!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.regeneratorRuntime},function(e,t){function n(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,u,"next",e)}function u(e){n(i,o,a,s,u,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(12);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(14),o=n(15),a=n(16),i=n(18);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wc.wcBlocksRegistry},function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(11);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wc.wcSettings},function(e,t){e.exports=window.wp.htmlEntities},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(7).default,o=n(13);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(7).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,s=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return s}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(17);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.i18n},,function(e,t,n){"use strict";n.r(t);var r=n(8),o=n.n(r),a=n(0),i=n(10),s=n(6),u=n(19),c=n(2),p=n.n(c),l=n(3),d=n.n(l),f=n(4),y=n.n(f),m=n(1),w=n.n(m),b=n(9),_=n(5),x=window.wc.wcBlocksData.PAYMENT_STORE_KEY,v=null,h=function(){if(null!==v)return v;var e=Object(b.getSetting)("square_cash_app_pay_data",null);if(!e)throw new Error("Square Cash App Pay initialization data is not available");return v={title:e.title||"",description:e.description||"",applicationId:e.application_id||"",locationId:e.location_id||"",isSandbox:e.is_sandbox||!1,loggingEnabled:e.logging_enabled||!1,generalError:e.general_error||"",showSavedCards:e.show_saved_cards||!1,showSaveOption:e.show_save_option||!1,supports:e.supports||{},isPayForOrderPage:e.is_pay_for_order_page||!1,orderId:e.order_id||"",ajaxUrl:e.ajax_url||"",paymentRequestNonce:e.payment_request_nonce||"",continuationSessionNonce:e.continuation_session_nonce||"",gatewayIdDasherized:e.gateway_id_dasherized||"",buttonStyles:e.button_styles||{},isContinuation:e.is_continuation||!1,refereneceId:e.reference_id||""}},S=function(e){return h().ajaxUrl.replace("%%endpoint%%","square_cash_app_pay_".concat(e))},g=function(){var e=p()(w.a.mark((function e(t){var n,r,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){var n={security:h().paymentRequestNonce,is_pay_for_order_page:h().isPayForOrderPage||!1,order_id:h().orderId||0};jQuery.post(S("get_payment_request"),n,(function(n){return n.success?e(n.data):t(n.data)}))}));case 2:return n=e.sent,r=JSON.parse(n),o=t.paymentRequest(r),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(t,n){var r={security:h().continuationSessionNonce,clear:e};jQuery.post(S("set_continuation_session"),r,(function(e){return e.success?t(e.data):n(e.data)}))}))},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"notice";h().loggingEnabled&&("error"===t?console.error(e):console.log(e))},P="wc-square-cash-app-pay",E=function(e){var t=Object(a.useState)(null),n=y()(t,2),r=n[0],o=n[1],s=Object(a.useState)(!1),u=y()(s,2),c=u[0],l=u[1],f=Object(a.useState)(""),m=y()(f,2),b=m[0],_=m[1],x=h(),v=x.applicationId,S=x.locationId,E=x.buttonStyles,q=x.referenceId,C=x.generalError,M=x.gatewayIdDasherized,A=x.description,I=e.onSubmit,R=e.emitResponse,k=e.eventRegistration,T=e.billing,L=T.cartTotal,N=T.currency,U=e.components.LoadingMask,z=e.activePaymentMethod,D=k.onPaymentSetup;return Object(a.useEffect)((function(){return D((function(){if(!b)return{type:R.responseTypes.ERROR,message:C};var e=d()({},"wc-".concat(M,"-payment-nonce"),b||"");return{type:R.responseTypes.SUCCESS,meta:{paymentMethodData:e}}}))}),[R.responseTypes.SUCCESS,R.responseTypes.ERROR,D,b]),Object(a.useEffect)((function(){if(l(!1),o(null),window.Square){j("[Square Cash App Pay] Initializing Square Cash App Pay Button");var e=window.Square.payments(v,S);if(e)return t(),function(){return p()(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.wcSquareCashAppPay){e.next=4;break}return e.next=3,window.wcSquareCashAppPay.destroy();case 3:window.wcSquareCashAppPay=null;case 4:case"end":return e.stop()}}),e)})))()}}function t(){return n.apply(this,arguments)}function n(){return(n=p()(w.a.mark((function n(){var r,a;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!1),n.prev=1,n.next=4,g(e);case 4:if(r=n.sent,!window.wcSquareCashAppPay){n.next=9;break}return n.next=8,window.wcSquareCashAppPay.destroy();case 8:window.wcSquareCashAppPay=null;case 9:return n.next=11,e.cashAppPay(r,{redirectURL:window.location.href,referenceId:q});case 11:return a=n.sent,n.next=14,a.attach("#".concat(P),E);case 14:a.addEventListener("ontokenization",(function(e){var n=e.detail,r=n.tokenResult,a=n.error;if(a)_(""),o(a.message);else if("OK"===r.status){var i=r.token;i||(_(""),o(C)),_(i),I()}else _(null),t()})),a.addEventListener("customerInteraction",(function(e){if(e.detail&&e.detail.isMobile)return O()})),window.wcSquareCashAppPay=a,j("[Square Cash App Pay] Square Cash App Pay Button Loaded"),n.next=24;break;case 20:n.prev=20,n.t0=n.catch(1),o(C),console.error(n.t0);case 24:l(!0);case 25:case"end":return n.stop()}}),n,null,[[1,20]])})))).apply(this,arguments)}}),[L.value,N.code]),Object(a.useEffect)((function(){var e=document.querySelector("button.wc-block-components-checkout-place-order-button");if(e)return"square_cash_app_pay"!==z||b||e.setAttribute("disabled","disabled"),function(){e.removeAttribute("disabled")}}),[z,b]),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("p",null,Object(i.decodeEntities)(A||"")),r&&Object(a.createElement)("div",{className:"woocommerce-error"},r),!r&&Object(a.createElement)(U,{isLoading:!c,showSpinner:!0},Object(a.createElement)("div",{id:P})))},q=["RenderedComponent","isEdit"],C=h(),M=C.title,A=C.applicationId,I=C.locationId,R=function(e){var t=e.RenderedComponent,n=e.isEdit,r=o()(e,q);return n?null:Object(a.createElement)(t,r)},k={name:"square_cash_app_pay",label:Object(a.createElement)((function(e){var t=e.components.PaymentMethodLabel;return Object(a.createElement)(t,{text:Object(i.decodeEntities)(M)})}),null),paymentMethodId:"square_cash_app_pay",ariaLabel:Object(u.__)("Cash App Pay payment method","woocommerce-square"),content:Object(a.createElement)(R,{RenderedComponent:E}),edit:Object(a.createElement)(R,{RenderedComponent:E,isEdit:!0}),canMakePayment:function(e){var t,n=e.billingData,r=e.cartTotals,o=A&&I,a="US"===n.country,i="USD"===r.currency_code,s=o&&a&&i;return s&&(t=document&&document.getElementById("radio-control-wc-payment-method-options-square_cash_app_pay"),h().isContinuation&&!window.wcSquareCashAppPaySelected&&t&&(j("[Square Cash App Pay] Selecting Cash App Pay payment method"),Object(_.dispatch)(x).__internalSetActivePaymentMethod("square_cash_app_pay"),window.wcSquareCashAppPaySelected=!0,O(!0))),s},supports:{features:h().supports||[],showSavedCards:h().showSavedCards||!1,showSaveOption:h().showSaveOption||!1}};Object(s.registerPaymentMethod)(k)}]);