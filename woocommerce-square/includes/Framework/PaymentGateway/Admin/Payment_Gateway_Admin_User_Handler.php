<?php
/**
 * WooCommerce Payment Gateway Framework
 *
 * This source file is subject to the GNU General Public License v3.0
 * that is bundled with this package in the file license.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.html GNU General Public License v3.0 or later
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@skyverge.com so we can send you a copy immediately.
 *
 * @since     3.0.0
 * @author    WooCommerce / SkyVerge
 * @copyright Copyright (c) 2013-2019, SkyVerge, Inc.
 * @license   http://www.gnu.org/licenses/gpl-3.0.html GNU General Public License v3.0 or later
 *
 * Modified by WooCommerce on 01 December 2021.
 */

namespace WooCommerce\Square\Framework\PaymentGateway\Admin;
use WooCommerce\Square\Framework\PaymentGateway\Payment_Gateway;
use WooCommerce\Square\Framework\PaymentGateway\Payment_Gateway_Plugin;

defined( 'ABSPATH' ) or exit;

/**
 * Handle the admin user profile settings.
 *
 * @since 3.0.0
 */
class Payment_Gateway_Admin_User_Handler {

	/** @var \Payment_Gateway_Plugin the plugin instance **/
	protected $plugin;

	/** @var array the token editor for each gateway **/
	protected $token_editors = array();

	/**
	 * Construct the user handler.
	 *
	 * @since 3.0.0
	 * @param \Payment_Gateway_Plugin The plugin instance
	 */
	public function __construct( Payment_Gateway_Plugin $plugin ) {

		$this->plugin = $plugin;

		// Set up a token editor for each gateway
		add_action( 'admin_init', array( $this, 'init_token_editors' ) );

		// Add the settings section
		add_action( 'show_user_profile', array( $this, 'add_profile_section' ) );
		add_action( 'edit_user_profile', array( $this, 'add_profile_section' ) );

		// Save the settings
		add_action( 'personal_options_update',  array( $this, 'save_profile_fields' ) );
		add_action( 'edit_user_profile_update', array( $this, 'save_profile_fields' ) );

		// Display the token editor markup inside the  profile section
		add_action( 'wc_payment_gateway_square_user_profile', array( $this, 'display_token_editors' ) );

		// Display the customer ID field markup inside the  profile section
		add_action( 'wc_payment_gateway_square_user_profile', array( $this, 'display_customer_id_fields' ) );
	}


	/**
	 * Set up a token editor for each gateway.
	 *
	 * @since 3.0.0
	 */
	public function init_token_editors() {

		foreach ( $this->get_tokenized_gateways() as $gateway ) {

			if ( ! $gateway->supports_token_editor() ) {
				continue;
			}

			$this->token_editors[ $gateway->get_id() ] = $gateway->get_payment_tokens_handler()->get_token_editor();
		}
	}


	/**
	 * Display the customer profile settings markup.
	 *
	 * @since 3.0.0
	 * @param \WP_User $user The user object
	 */
	public function add_profile_section( $user ) {

		if ( ! $this->is_supported() || ! current_user_can( 'manage_woocommerce' ) ) {
			return;
		}

		$user_id             = $user->ID;
		$plugin_id           = 'square';
		$section_title       = $this->get_title();
		$section_description = $this->get_description();

		include( $this->get_plugin()->get_payment_gateway_framework_path() . '/Admin/views/html-user-profile-section.php' );
	}


	/**
	 * Display the token editor markup.
	 *
	 * @since 3.0.0
	 * @param \WP_User $user The user object
	 */
	public function display_token_editors( $user ) {

		foreach ( $this->get_token_editors() as $gateway_id => $editor ) {

			$gateway = $this->get_plugin()->get_gateway( $gateway_id );

			// if the gateway supports a customer ID but none is saved, don't display the token tables
			if ( $gateway && $gateway->supports_customer_id() && ! $gateway->get_customer_id( $user->ID, array( 'autocreate' => false ) ) ) {
				continue;
			}

			$editor->display( $user->ID );
		}
	}


	/**
	 * Display the customer ID field(s).
	 *
	 * @since 3.0.0
	 * @param \WP_User $user the user object
	 */
	public function display_customer_id_fields( $user ) {

		foreach( $this->get_customer_id_fields( $user->ID ) as $field ) {

			$label = $field['label'];
			$name  = $field['name'];
			$value = $field['value'];

			include( $this->get_plugin()->get_payment_gateway_framework_path() . '/Admin/views/html-user-profile-field-customer-id.php' );
		}
	}


	/**
	 * Save the user profile section fields.
	 *
	 * @since 3.0.0
	 * @param int $user_id the user ID
	 */
	public function save_profile_fields( $user_id ) {

		if ( ! $this->is_supported() || ! current_user_can( 'manage_woocommerce' ) ) {
			return;
		}

		// Save the token data from each token editor
		$this->save_tokens( $user_id );

		// Save the customer IDs
		$this->save_customer_ids( $user_id );
	}


	/**
	 * Save the token data from each token editor.
	 *
	 * @since 3.0.0
	 * @param int $user_id the user ID
	 */
	protected function save_tokens( $user_id ) {

		foreach ( $this->get_token_editors() as $gateway_id => $editor ) {
			$editor->save( $user_id );
		}
	}


	/**
	 * Save the customer IDs.
	 *
	 * @since 3.0.0
	 * @param int $user_id the user ID
	 */
	protected function save_customer_ids( $user_id ) {

		foreach ( $this->get_tokenized_gateways() as $gateway ) {

			if ( ! $gateway->supports_customer_id() ) {
				continue;
			}

			// phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce verification is handled by WordPress
			if ( isset( $_POST[ $gateway->get_customer_id_user_meta_name() ] ) ) {
				// phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce verification is handled by WordPress
				$gateway_customer_id = sanitize_text_field( wp_unslash( $_POST[ $gateway->get_customer_id_user_meta_name() ] ) );
				$gateway->update_customer_id( $user_id, trim( $gateway_customer_id ) );
			}
		}
	}


	/** Getter methods ******************************************************/


	/**
	 * Get the token editor section title.
	 *
	 * @since 3.0.0
	 * @return string
	 */
	protected function get_title() {

		$plugin_title = trim( str_replace( 'WooCommerce', '', $this->get_plugin()->get_plugin_name() ) );

		/* translators: %s: plugin title */
		$title = sprintf( esc_html__( '%s Payment Tokens', 'woocommerce-square' ), $plugin_title );

		/**
		 * Filter the admin token editor title.
		 *
		 * @since 3.0.0
		 * @param string $title The section title
		 * @param \Payment_Gateway_Plugin $plugin The gateway plugin instance
		 */
		return apply_filters( 'wc_payment_gateway_admin_user_profile_title', $title, $this->get_plugin() );
	}


	/**
	 * Get the token editor section description.
	 *
	 * @since 3.0.0
	 * @return string
	 */
	protected function get_description() {

		/**
		 * Filter the admin token editor description.
		 *
		 * @since 3.0.0
		 * @param string $description The section description
		 * @param \Payment_Gateway_Plugin $plugin The gateway plugin instance
		 */
		return apply_filters( 'wc_payment_gateway_admin_user_profile_description', '', $this->get_plugin() );
	}


	/**
	 * Get the token editor objects.
	 *
	 * @since 3.0.0
	 * @return array
	 */
	protected function get_token_editors() {
		return $this->token_editors;
	}


	/**
	 * Get the customer ID fields for the plugin's gateways.
	 *
	 * In most cases, this will be a single field unless the plugin has multiple gateways and they
	 * are set to different environments.
	 *
	 * @since 3.0.0
	 * @param int $user_id the user ID
	 * @return array {
	 *     The fields data
	 *
	 *     @type string $label the field label
	 *     @type string $name  the input name
	 *     @type string $value the input value
	 * }
	 */
	protected function get_customer_id_fields( $user_id ) {

		$unique_meta_key = '';

		$fields = array();

		foreach ( $this->get_tokenized_gateways() as $gateway ) {

			if ( ! $gateway->supports_customer_id() ) {
				continue;
			}

			$meta_key = $gateway->get_customer_id_user_meta_name();

			// If a field with this meta key has already been set, skip this gateway
			if ( $meta_key === $unique_meta_key ) {
				continue;
			}

			$label = esc_html__( 'Customer ID', 'woocommerce-square' );

			// If the plugin has multiple gateways configured for multiple environments, append the environment name to keep things straight
			/* translators: %s: environment name */
			$label .= ( $this->has_multiple_environments() ) ? ' ' . sprintf( esc_html__( '(%s)', 'woocommerce-square' ), $gateway->get_environment_name() ) : '';

			$fields[] = array(
				'label' => $label,
				'name'  => $meta_key,
				'value' => $gateway->get_customer_id( $user_id, array(
					'autocreate' => false,
				) ),
			);

			$unique_meta_key = $meta_key;
		}

		return $fields;
	}


	/**
	 * Get the unique environments between the plugin's gateways.
	 *
	 * @since 3.0.0
	 * @return array the environments in the format `$environment_id => $environment_name`
	 */
	protected function get_unique_environments() {

		$environments = array();

		foreach ( $this->get_tokenized_gateways() as $gateway ) {
			$environments[ $gateway->get_environment() ] = $gateway->get_environment_name();
		}

		$environments = array_unique( $environments );

		return $environments;
	}


	/**
	 * Get the gateways that support tokenization and are enabled.
	 *
	 * @since 3.0.0
	 * @return Payment_Gateway[]
	 */
	protected function get_tokenized_gateways() {

		$gateways = array();

		foreach ( $this->get_plugin()->get_gateways() as $gateway ) {

			if ( $gateway->is_enabled() && $gateway->supports_tokenization() && ( $gateway->supports_token_editor() || $gateway->supports_customer_id() ) ) {
				$gateways[] = $gateway;
			}
		}

		return $gateways;
	}


	/** Conditional methods ******************************************************/


	/**
	 * Determine if the user profile section is supported by at least one gateway.
	 *
	 * @since 3.0.0
	 * @return bool
	 */
	protected function is_supported() {

		$gateways = $this->get_tokenized_gateways();

		/**
		 * Filter whether the user profile section should be displayed for this gateway plugin.
		 *
		 * @since 3.0.0
		 * @param bool $display
		 * @param \Payment_Gateway_Plugin $plugin the gateway plugin instance
		 */
		return apply_filters( 'wc_payment_gateway_square_display_user_profile', ! empty( $gateways ), $this->get_plugin() );
	}


	/**
	 * Determine if the plugin has varying environments between its gateways.
	 *
	 * @since 3.0.0
	 * @return bool
	 */
	public function has_multiple_environments() {
		return 1 < count( $this->get_unique_environments() );
	}


	/**
	 * Get the plugin instance.
	 *
	 * @since 3.0.0
	 * @return \Payment_Gateway_Plugin the plugin instance
	 */
	protected function get_plugin() {
		return $this->plugin;
	}
}
