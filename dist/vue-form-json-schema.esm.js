module.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VFJS_EVENT_FIELD_STATE_UPDATE="VFJS_EVENT_FIELD_STATE_UPDATE",t.VFJS_EVENT_FIELD_MODEL_VALIDATE="VFJS_EVENT_FIELD_MODEL_VALIDATE",t.VFJS_EVENT_FIELD_MODEL_UPDATE="VFJS_EVENT_FIELD_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATE="VFJS_EVENT_MODEL_UPDATE",t.VFJS_EVENT_MODEL_UPDATED="VFJS_EVENT_MODEL_UPDATED",t.VFJS_EVENT_MODEL_VALIDATE="VFJS_EVENT_MODEL_VALIDATE",t.VFJS_EVENT_STATE_UPDATED="VFJS_EVENT_STATE_UPDATED",t.VFJS_EXTERNAL_EVENT_CHANGE="change",t.VFJS_EXTERNAL_EVENT_STATE_CHANGE="state-change",t.VFJS_EXTERNAL_EVENT_VALIDATED="validated"},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(4);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e,t,n){var r=n(82);e.exports=function(e,t,n){var i=null==e?void 0:r(e,t);return void 0===i?n:i}},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(32);e.exports=function(e,t,n){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){var r=n(5),i=n(4);e.exports=function(e,t,n){(void 0===n||i(e[t],n))&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t,n){var r=n(39),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},function(e,t,n){var r=n(47)(Object.getPrototypeOf,Object);e.exports=r},function(e,t,n){var r=n(11),i=n(1);e.exports=function(e){if(!i(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){var r=n(5),i=n(4),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,n){var s=e[t];o.call(e,t)&&i(s,n)&&(void 0!==n||t in e)||r(e,t,n)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t,n){var r=n(66);e.exports=function(e,t,n){return null==e?e:r(e,t,n)}},function(e,t,n){var r=n(6),i=n(67),o=n(69),s=n(71);e.exports=function(e,t){return r(e)?e:i(e,t)?[e]:o(s(e))}},function(e,t){e.exports=function(e){return e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(75)),o=r(n(76)),s=r(n(77)),u=r(n(96)),f=r(n(97)),a={computed:i.default,data:o.default,props:u.default,methods:s.default,watch:f.default};t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.vfjsViewer=t.vfjsGlobalMixin=t.vfjsFieldMixin=void 0;var i=r(n(20)),o=r(n(18)),s=r(n(98));t.vfjsFieldMixin=i.default,t.vfjsGlobalMixin=o.default,t.vfjsViewer=s.default,t.default=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(21)),o=r(n(22)),s=r(n(74)),u={data:i.default,props:s.default,methods:o.default};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return{prefixes:["domProps","hook","nativeOn","on"]}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=r(n(23)),s=r(n(65)),u=r(n(73)),f=i({},o.default,s.default,u.default);t.default=f},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(n(24)),o={vfjsFieldGetAttributes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.class,o=r(t,["class"]),s=e.class,u=r(e,["class"]);if(!u)return{};var f=(0,i.default)({},this.vfjsFieldHelperFormatClasses(s),this.vfjsFieldHelperFormatClasses(n));return(0,i.default)({},o,u,{class:f})}};t.default=o},function(e,t,n){var r=n(25),i=n(58)(function(e,t,n){r(e,t,n)});e.exports=i},function(e,t,n){function r(e,t,n,c,l){e!==t&&s(t,function(s,a){if(f(s))l||(l=new i),u(e,t,a,n,r,c,l);else{var d=c?c(e[a],s,a+"",e,t,l):void 0;void 0===d&&(d=s),o(e,a,d)}},a)}var i=n(26),o=n(7),s=n(34),u=n(36),f=n(1),a=n(14);e.exports=r},function(e,t,n){function r(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}var i=n(27),o=n(28),s=n(29),u=n(30),f=n(31);r.prototype.clear=i,r.prototype.delete=o,r.prototype.get=s,r.prototype.has=u,r.prototype.set=f,e.exports=r},function(e,t){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(2),i=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0||(n==t.length-1?t.pop():i.call(t,n,1),--this.size,0))}},function(e,t,n){var r=n(2);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(2);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(2);e.exports=function(e,t){var n=this.__data__,i=r(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}},function(e,t,n){var r=n(33),i=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=i},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t,n){var r=n(35)();e.exports=r},function(e,t){e.exports=function(e){return function(t,n,r){for(var i=-1,o=Object(t),s=r(t),u=s.length;u--;){var f=s[e?u:++i];if(!1===n(o[f],f,o))break}return t}}},function(e,t,n){var r=n(7),i=n(37),o=n(41),s=n(44),u=n(45),f=n(49),a=n(6),c=n(50),l=n(53),d=n(10),v=n(1),j=n(54),p=n(55),h=n(56);e.exports=function(e,t,n,_,V,E,y){var F=e[n],g=t[n],b=y.get(g);if(b)r(e,n,b);else{var O=E?E(F,g,n+"",e,t,y):void 0,m=void 0===O;if(m){var M=a(g),A=!M&&l(g),S=!M&&!A&&p(g);O=g,M||A||S?a(F)?O=F:c(F)?O=s(F):A?(m=!1,O=i(g,!0)):S?(m=!1,O=o(g,!0)):O=[]:j(g)||f(g)?(O=F,f(F)?O=h(F):(!v(F)||_&&d(F))&&(O=u(g))):m=!1}m&&(y.set(g,O),V(O,g,_,E,y),y.delete(g)),r(e,n,O)}}},function(e,t,n){(function(e){var r=n(8),i="object"==typeof t&&t&&!t.nodeType&&t,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===i?r.Buffer:void 0,u=s?s.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=u?u(n):new e.constructor(n);return e.copy(r),r}}).call(t,n(38)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(40))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(42);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}},function(e,t,n){var r=n(43);e.exports=function(e){var t=new e.constructor(e.byteLength);return new r(t).set(new r(e)),t}},function(e,t,n){var r=n(8).Uint8Array;e.exports=r},function(e,t){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},function(e,t,n){var r=n(46),i=n(9),o=n(48);e.exports=function(e){return"function"!=typeof e.constructor||o(e)?{}:r(i(e))}},function(e,t,n){var r=n(1),i=Object.create,o=function(){function e(){}return function(t){if(!r(t))return{};if(i)return i(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();e.exports=o},function(e,t){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t){e.exports=function(){return!1}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(51),i=n(12);e.exports=function(e){return i(e)&&r(e)}},function(e,t,n){var r=n(10),i=n(52);e.exports=function(e){return null!=e&&i(e.length)&&!r(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(11),i=n(9),o=n(12),s=Function.prototype,u=Object.prototype,f=s.toString,a=u.hasOwnProperty,c=f.call(Object);e.exports=function(e){if(!o(e)||"[object Object]"!=r(e))return!1;var t=i(e);if(null===t)return!0;var n=a.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==c}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(57),i=n(14);e.exports=function(e){return r(e,i(e))}},function(e,t,n){var r=n(13),i=n(5);e.exports=function(e,t,n,o){var s=!n;n||(n={});for(var u=-1,f=t.length;++u<f;){var a=t[u],c=o?o(n[a],e[a],a,n,e):void 0;void 0===c&&(c=e[a]),s?i(n,a,c):r(n,a,c)}return n}},function(e,t,n){var r=n(59),i=n(64);e.exports=function(e){return r(function(t,n){var r=-1,o=n.length,s=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(s=e.length>3&&"function"==typeof s?(o--,s):void 0,u&&i(n[0],n[1],u)&&(s=o<3?void 0:s,o=1),t=Object(t);++r<o;){var f=n[r];f&&e(t,f,r,s)}return t})}},function(e,t,n){var r=n(60),i=n(61),o=n(63);e.exports=function(e,t){return o(i(e,t,r),e+"")}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(62),i=Math.max;e.exports=function(e,t,n){return t=i(void 0===t?e.length-1:t,0),function(){for(var o=arguments,s=-1,u=i(o.length-t,0),f=Array(u);++s<u;)f[s]=o[t+s];s=-1;for(var a=Array(t+1);++s<t;)a[s]=o[s];return a[t]=n(f),r(e,this,a)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(){return!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(15)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={vfjsFieldFormatEvents:function(e){return Array.isArray(e)?this.vfjsFieldFormatEventsReducer(e):this.vfjsFieldFormatEventsReducer(Object.keys(e))},vfjsFieldHelperFormatClasses:function(e){return e?Array.isArray(e)?e.reduce(function(e,t){return i({},e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:!0,enumerable:!0,configurable:!0,writable:!0}):e[t]=!0,e}({},t))},{}):e:{}},vfjsFieldHelperEventHandler:function(e,t){var n=this;return function(e){return"function"==typeof t?n.setVfjsFieldModel(t(e)):e instanceof Event&&e.target&&e.target.value?n.setVfjsFieldModel(e.target.value):n.setVfjsFieldModel(e)}},vfjsFieldFormatEventsReducer:function(e){var t=this;return e.reduce(function(n,i){return(0,r.default)(Object.assign({},n),t.vfjsFieldHelperFormatEventListenerKey(i),t.vfjsFieldHelperEventHandler(i,e[i]))},{})},vfjsFieldHelperFormatEventListenerKey:function(e){var t=this.prefixes.find(function(t){return e.match(t)});return t?t+"."+String(e).replace(t,"").toLowerCase():e}};t.default=o},function(e,t,n){var r=n(13),i=n(16),o=n(72),s=n(1),u=n(17);e.exports=function(e,t,n,f){if(!s(e))return e;for(var a=-1,c=(t=i(t,e)).length,l=c-1,d=e;null!=d&&++a<c;){var v=u(t[a]),j=n;if(a!=l){var p=d[v];void 0===(j=f?f(p,v,d):void 0)&&(j=s(p)?p:o(t[a+1])?[]:{})}r(d,v,j),d=d[v]}return e}},function(e,t,n){var r=n(6),i=n(68),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!i(e))||s.test(e)||!o.test(e)||null!=t&&e in Object(t)}},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=n(70)(function(e){var t=[];return r.test(e)&&t.push(""),e.replace(i,function(e,n,r,i){t.push(r?i.replace(o,"$1"):n||e)}),t});e.exports=s},function(e,t){e.exports=function(e){return e}},function(e,t){e.exports=function(e){return e}},function(e,t){var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||n.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i={setVfjsFieldState:function(e,t){this.vfjsBus.$emit(r.Vfjs_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsFieldModel:function(e,t){var n=this;return new Promise(function(i,o){n.vfjsBus.$emit(r.Vfjs_EVENT_FIELD_MODEL_UPDATE,{key:t||n.vfjsFieldModelKey,value:e,cb:function(e){e&&e.length>0&&o(e),i()}})})}};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={children:{type:Array,default:function(){return[]}},classNames:{type:[String,Array,Object],default:function(){return[]}},model:{type:String,required:!0},schema:{type:Object},state:{type:Object},value:{type:null},vfjsBus:{type:Object,required:!0},vfjsFieldErrors:{type:Array},vfjsFieldOptions:{type:Object},vfjsFieldModel:{type:null},vfjsFieldModelKey:{type:String,required:!0},vfjsFieldSchema:{type:Object},vfjsFieldState:{type:Object},vfjsFieldUiSchema:{type:Object},vfjsFieldModelValue:{type:null},vfjsModel:{type:Object,required:!0},vfjsState:{type:Object}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={vfjsSchemaValid:function(){return this.vfjsSchema.every(this.isVfjsFieldSchemaValid)},vfjsModelValid:function(){return this.vfjsSchema.every(this.isVfjsFieldModelValid)},vfjsFields:function(){return this.vfjsFieldsActive.map(this.vfjsHelperCreateField)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i={data:function(){return{vfjsBus:{},vfjsComponents:{},vfjsEvents:[r.VFJS_EVENT_FIELD_MODEL_UPDATE,r.VFJS_EVENT_FIELD_MODEL_VALIDATE,r.VFJS_EVENT_FIELD_STATE_UPDATE,r.VFJS_EVENT_MODEL_UPDATE,r.VFJS_EVENT_MODEL_UPDATED,r.VFJS_EVENT_MODEL_VALIDATE,r.VFJS_EVENT_STATE_UPDATED],vfjsFieldsActive:[],vfjsListeners:[],vfjsModel:{},vfjsSchema:{},vfjsUiSchema:[],vfjsState:{},vfjsValidator:null}}};t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=r(n(78)),s=r(n(80)),u=r(n(84)),f=r(n(87)),a=r(n(88)),c=r(n(90)),l=r(n(93)),d=i({},o.default,f.default,s.default,a.default,u.default,c.default,l.default);t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(15)),s=r(n(79)),u=n(0),f={addVfjsListener:function(e,t){var n=this.vfjsBus.$on(e,function(n){return t(e,n)});this.vfjsListeners.push(n)},addVfjsListeners:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];t.forEach(function(t){return e.addVfjsListener(t,n)})},removeVfjsListener:function(e){this.vfjsBus.$off(e)},removeVfjsListeners:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(this.removeVfjsListener)},removeVfjsListenersAll:function(){this.vfjsBus.$off(),this.vfjsListeners=[]},vfjsBusEventHandler:function(e,t){var n,r=this,s=(n={},i(n,u.VFJS_EVENT_FIELD_MODEL_VALIDATE,function(e){var t=e.key,n=e.value,i=e.cb,o=r.vfjsHelperApplyFieldModel(t,n);r.vfjsBus.$emit(u.VFJS_EVENT_MODEL_VALIDATE,{vfjsModel:o,cb:function(e){var o=r.getVfjsFieldModelValidationErrors(t,n),s=Object.assign({},r.getVfjsFieldState(t),{vfjsFieldErrors:o});r.setVfjsFieldState(s,t),i&&"function"==typeof i&&i(o)}})}),i(n,u.VFJS_EVENT_FIELD_MODEL_UPDATE,function(e){var t=e.key,n=e.value,i=e.cb;r.vfjsBus.$emit(u.VFJS_EVENT_FIELD_MODEL_VALIDATE,{key:t,value:n,cb:function(e){var o=r.vfjsHelperApplyFieldModel(t,n);r.setVfjsModel(o),i&&"function"==typeof i&&i(e)}})}),i(n,u.VFJS_EVENT_FIELD_STATE_UPDATE,function(e){var t=e.key,n=e.value,i=Object.assign({},r.getVfjsState());(0,o.default)(i,t,n),r.setVfjsState(i)}),i(n,u.VFJS_EVENT_MODEL_VALIDATE,function(e){var t=e.vfjsModel,n=e.cb,i=r.getVfjsValidationErrors(t),o=Object.assign({},r.getVfjsState(),{vfjsErrors:i});r.setVfjsState(o),n&&"function"==typeof n&&n(i)}),i(n,u.VFJS_EVENT_MODEL_UPDATED,function(){r.setVfjsUiFieldsActive(),r.$emit(u.VFJS_EXTERNAL_EVENT_CHANGE,r.getVfjsModel())}),i(n,u.VFJS_EVENT_STATE_UPDATED,function(){r.$emit(u.VFJS_EXTERNAL_EVENT_STATE_CHANGE,r.getVfjsState())}),n);e&&e in s&&s[e](t)},vfjsBusInitialize:function(){this.vfjsBus=new s.default}};t.default=f},function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=r(n(81)),s=r(n(83)),u=i({},o.default,s.default);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3)),i={getVfjsFieldModel:function(e){return e?this.getVfjsModel(e):this.vfjsFieldModelKey?this.getVfjsModel(this.vfjsFieldModelKey):null},getVfjsModel:function(e){return e?(0,r.default)(this.vfjsModel,e):this.vfjsModel}};t.default=i},function(e,t,n){var r=n(16),i=n(17);e.exports=function(e,t){for(var n=0,o=(t=r(t,e)).length;null!=e&&n<o;)e=e[i(t[n++])];return n&&n==o?e:void 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i={setVfjsFieldModel:function(e,t){var n=this;return new Promise(function(i,o){n.vfjsBus.$emit(r.VFJS_EVENT_FIELD_MODEL_UPDATE,{key:t||n.vfjsFieldModelKey,value:e,cb:function(e){e&&e.length>0&&o(e),i()}})})},setVfjsModel:function(e){this.vfjsModel=Object.assign({},this.getVfjsModel(),e),this.vfjsBus.$emit(r.VFJS_EVENT_MODEL_UPDATED,this.getVfjsModel())}};t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=r(n(85)),s=r(n(86)),u=i({},o.default,s.default);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3)),i={getVfjsState:function(e){return e?(0,r.default)(this.vfjsState,e):this.vfjsState},getVfjsFieldState:function(e){return e?this.getVfjsState(e):this.vfjsFieldModelKey?this.getVfjsState(this.vfjsFieldModelKey):null}};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i={setVfjsFieldState:function(e,t){this.vfjsBus.$emit(r.VFJS_EVENT_FIELD_STATE_UPDATE,{key:t||this.vfjsFieldModelKey,value:e})},setVfjsState:function(e){this.vfjsState=Object.assign({},this.getVfjsState(),e),this.vfjsBus.$emit(r.VFJS_EVENT_STATE_UPDATED)}};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={vfjsDestroy:function(){var e=this;this.vfjsEvents.forEach(function(t){return e.removeVfjsListener(t)})},vfjsInitialize:function(){this.vfjsBusInitialize(),this.setVfjsModel(this.model),this.vfjsComponents=Object.assign({},this.components),this.vfjsSchema=Object.assign({},this.schema),this.vfjsUiSchema=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.uiSchema)),this.vfjsOptions=Object.assign({},this.options),this.addVfjsListeners(this.vfjsEvents,this.vfjsBusEventHandler),this.vfjsValidationInitialize(),this.setVfjsUiFieldsActive()}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e})({},function(e){return e&&e.__esModule?e:{default:e}}(n(89)).default);t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3)),i={getVfjsFieldSchema:function(e){return e?this.getVfjsSchema(e):this.vfjsFieldModelKey?this.getVfjsSchema(this.vfjsFieldModelKey):null},getVfjsSchema:function(e){return e?(0,r.default)(this.getVfjsSchema.properties,e)||this.getVfjsSchemaFallback(e):this.vfjsSchema},getVfjsSchemaPath:function(e,t){var n=this.getVfjsSchema();if(!e)return n.items?this.getVfjsSchemaPath("items"):"properties."+t;var i=(0,r.default)(n,e);if(i){if("array"===i.type||i.items instanceof Array){var o=this.getVfjsSchemaPath(e+".items");return this.getVfjsSchemaPath(o+".0")}if("object"===i.type||i.properties instanceof Object)return this.getVfjsSchemaPath(e+".properties")}return t?e+"."+t:e},getVfjsSchemaFallback:function(e){var t=String(e).split(".").reduce(this.getVfjsSchemaPath,"");return(0,r.default)(this.getVfjsSchema(),t)}};t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=r(n(91)),s=r(n(92)),u=i({},o.default,s.default);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(3)),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o={getVfjsUiFieldActiveDeep:function(e,t){var n=this;return!(!e||!e.properties)&&(!(!e[t]&&!e.properties[t])||Object.keys(e.properties).some(function(r){return!!n.getVfjsFieldModelValid(r)&&n.getVfjsUiFieldActiveDeep(e.properties[r].properties,t)}))},getVfjsFieldActive:function(e){if(this.getVfjsFieldSchema(e)||this.getVfjsFieldModel(e))return!0;var t=this.getVfjsSchema();return this.getVfjsUiFieldActiveDeep(t.dependencies,e)},getVfjsUiFieldArrayChildrenActive:function(e,t){var n=this;return(this.getVfjsFieldModel(e)||[]).map(function(r,i){return n.vfjsHelperChildArrayReducerMapper(e,t,i)}).map(this.getVfjsUiFieldsActive)},getVfjsUiFieldActive:function(e){var t=e.children,n=void 0===t?[]:t,r=e.model,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","model"]);return!(r&&!this.getVfjsFieldActive(r))&&(this.vfjsHelperFieldIsArray(r)?i({},o,{model:r,children:this.getVfjsUiFieldArrayChildrenActive(r,n)}):i({},o,{model:r,children:this.getVfjsUiFieldsActive(n)}))},getVfjsUiFieldsActive:function(e){var t=this;return e.reduce(function(e,n){if(n){var r=t.getVfjsUiFieldActive(n);r&&e.push(r)}return e},[])},getVfjsFieldUiSchema:function(e){return this.getVfjsUiSchema(e)},getVfjsUiSchema:function(e){return e?(0,r.default)(this.vfjsUiSchema,e):this.vfjsUiSchema}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={setVfjsUiFieldsActive:function(){var e=this;this.vfjsFieldsActive=this.vfjsUiSchema.reduce(function(t,n){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t),[e.getVfjsUiFieldActive(n)])},[])}};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=r(n(94)),s=r(n(95)),u=n(0),f=i({vfjsValidationInitialize:function(){this.ajv=new o.default,this.vfjsOptions.validate&&this.vfjsOptions.validateOnLoad&&this.vfjsBus.$emit(u.VFJS_EVENT_MODEL_VALIDATE)}},s.default);t.default=f},function(e,t){e.exports=require("ajv")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={getVfjsFieldUiSchemaValidationErrors:function(e){var t=e.component,n=e.model,r=e.type,i=[];return t||this.getVfjsFieldComponent(r)||i.push("Unregistered component type: "+r),n&&String(n)!==n&&i.push('The field\'s "model" property must be a string!'),i},getVfjsFieldUiSchemaValid:function(e){return 0===this.getVfjsFieldUiSchemaValidationErrors(e).length&&e.children.every(this.getVfjsFieldUiSchemaValid)},getVfjsFieldModelValid:function(e,t){return 0===this.getVfjsFieldModelValidationErrors(e,t).length},getVfjsFieldModelValidationErrors:function(e,t){return this.getVfjsModelValidationErrors(e,t)},getVfjsModelValidationErrors:function(e,t){var n=e?this.getVfjsFieldSchema(e):this.getVfjsSchema();if(!n)return[];var r=void 0!==t?t:this.getVfjsFieldModel(e),i=this.ajv.validate(n,r);return r&&!i?this.ajv.errors:[]},getVfjsValid:function(){return 0===this.getVfjsValidationErrors().length},getVfjsValidationErrors:function(e){return this.ajv.validate(this.getVfjsSchema(),e||this.getVfjsModel())?[]:this.ajv.errors}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={components:{type:Object,default:function(){return{}}},model:{type:Object,default:function(){return{}}},schema:{type:Object,required:!0,default:function(){return[]}},options:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},uiSchema:{type:Array,required:!0,default:function(){return{}}}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={model:function(e){this.vfjsModel=Object.assign({},e),this.setVfjsUiFieldsActive()},schema:function(e){this.vfjsSchema=Object.assign({},e),this.setVfjsUiFieldsActive()},uiSchema:function(e){this.vfjsUiSchema=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e)),this.setVfjsUiFieldsActive()}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"vue-form-json-schema-viewer",mixins:[function(e){return e&&e.__esModule?e:{default:e}}(n(18)).default],computed:{fields:function(){return this.createFields(this.vfFields)}},methods:{createField:function(e){var t=e.component,n=e.children,r=e.props;return!!t&&this.$createElement(t,{props:r},this.createFields(n))},createFields:function(e){return e.map(this.createField).filter(function(e){return e})}},created:function(){this.vfjsInitialize()},beforeDestroy:function(){this.vfjsDestroy()},render:function(){return this.$createElement(this.tag,this.fields)}};t.default=r}]);
//# sourceMappingURL=vue-form-json-schema.esm.js.map