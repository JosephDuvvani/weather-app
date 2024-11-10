(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(601),a=n.n(r),i=n(314),o=n.n(i),s=n(417),d=n.n(s),c=new URL(n(176),n.b),u=o()(a()),l=d()(c);u.push([e.id,`body {\n    margin: 0;\n    padding: 0;\n\n    background-color: #111;\n    font-family: 'Rubik', sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nh1, h2, h3, h4 {\n    font-size: inherit;\n    font-weight: inherit;\n    padding: 0;\n    margin: 0;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.weather-app {\n    min-height: 100svh;\n    background: linear-gradient(\n        rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n        url(${l});\n    background-position: bottom;\n    background-size: cover;\n    background-repeat: no-repeat;\n    color: #fff;\n    position: relative;\n}\n\n.content,\n.weather_card,\n.data_table_columns {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.content {\n    margin-inline: 2rem;\n}\n\n.header,\n.header_line,\n.search_form-container,\n.address,\n.datetime,\n.data_table {\n    grid-column: 1/-1;\n}\n\n.header {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n    padding-block: 1rem;\n}\n\n.logo h1 {\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n\n.nav {\n    display: flex;\n    gap: 1.5rem;\n}\n\n\n.nav span {\n    cursor: pointer;\n    transition: .5s;\n}\n\n.nav span:hover {\n    transform: scale(1.4);\n}\n\n.header_line {\n    height: 2px;\n    background-color: #fff;\n}\n\n.search_form-container {\n    display: flex;\n    justify-content: center;\n    padding-block: 1rem;\n    justify-self: center;\n}\n\n.search_form {\n    display: flex;\n    align-items: center;\n    height: 2.5rem;\n    padding-block: .3rem;\n    padding-inline: .7rem .3rem;\n    background-color: #fff;\n    border-radius: 50vh 0 0 50vh;\n    position: relative;\n}\n\n.icon-container {\n    display: flex;\n    position: relative;\n}\n\n.icon-container svg {\n    width: 1.5rem;\n    fill: #8f8f8f;\n}\n\n#search_form-input {\n    font-size: 1rem;\n    outline: none;\n    border: 0;\n    background: transparent;\n    margin-left: .2rem;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding-right: 1.4rem;\n}\n\n.search_form-clear {\n    cursor: pointer;\n    visibility: hidden;\n    position: absolute;\n    right: .2rem;\n}\n\n.search_form-button {\n    border: 0;\n    width: 4rem;\n    display: grid;\n    justify-items: center;\n    align-content: center;\n    border-radius: 0 50vh 50vh 0;\n    cursor: pointer;\n}\n\n.search_form-button:hover svg,\n.search_form-clear:hover svg {\n    fill: #111;\n}\n\n.weather_card {\n    gap: 0 .5rem;\n    justify-self: center;\n    padding: 1rem;\n    border-radius: .3rem;\n    transform: rotateX(90deg);\n    transition: .3s;\n}\n\nh2.address {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.weather_card .datetime {\n    font-size: .9rem;\n    font-weight: 500;\n    margin-block: .5rem;\n}\n\n.weather_card .temp {\n    display: grid;\n    grid-template-rows: 1fr min-content ;\n}\n\n.temp .tunnel {\n    height: 4.25rem;\n    overflow: hidden;\n    position: relative;\n    align-self: center;\n}\n\n.temp .track {\n    position: absolute;\n}\n\n.weather_card .temp .temperature{\n    font-size: 5rem;\n}\n\n.celsius,\n.fahrenheit {\n    display: flex;\n}\n\n.unit {\n    display: flex;\n    align-items: start;\n}\n\n.temp_value {\n    line-height: .85;\n}\n\n.switch-units {\n    font-size: .8em;\n    cursor: pointer;\n    margin-bottom: .5rem;\n    width: fit-content;\n}\n\n.switch-units:hover {\n    color: hsl(120, 76%, 39%);\n}\n\n.unit svg {\n    width: .5em;\n    fill: currentColor;\n}\n\n.weather_card-container {\n    display: grid;\n    justify-items: start;\n    min-width: max-content;\n}\n\n.weather_descr {\n    display: grid;\n    justify-items: center;\n}\n\n#weather_descr_icon {\n    width: 5rem;\n}\n\n.weather_descr .text {\n    width: 12.75rem;\n    text-align: center;\n}\n\n.data_table_title {\n    font-size: .9em;\n    font-weight: 500;\n    margin-block: 1.5rem;\n}\n\n.feelslike {\n    margin-bottom: 2rem;\n}\n\n.feelslike .container {\n    height: 2rem;\n    overflow: hidden;\n    position: relative;\n    margin-bottom: .5rem;\n}\n\n.feelslike_temp {\n    display: grid;\n    position: absolute;\n    /* bottom: 0; */\n}\n\n.feelslike_temp .temperature {\n    font-size: 2.5rem;\n}\n\n.feelslike_label {\n    font-size: .8em;\n}\n\n.data_table_columns {\n    width: 35rem;\n}\n\n.data_table_columns .column {\n    display: grid;\n    gap: .5em;\n}\n\n.column-2 {\n    margin-left: 1rem;\n}\n\n.column .cell {\n    font-size: .9rem;\n    display: flex;\n    gap: 1em;\n    border-bottom: 2px solid #fff;\n    padding-block: 1em .8em;\n    line-height: 1.5;\n}\n\n.cell .data_icon svg {\n    height: 110%;\n    fill: #fff;\n}\n\n.moon_phase-icon {\n    transform: rotate(-35deg);\n}\n\n.cell .data_label {\n    flex: 1;\n    min-width: max-content;\n}\n\n.cell .data_value {\n    min-width: max-content;\n}\n\n.extra-content-container {\n    display: grid;\n    justify-items: center;\n    align-content: center;\n}\n\n.week {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    transform: rotateX(90deg);\n    transition: .3s;\n}\n\n.week .day-1 {\n    grid-column: 1/-1;\n    margin-inline: calc(25% + .5rem);\n}\n\n.weekday {\n    padding: .5rem;\n    border: 1px solid hsl(0, 0%, 80%);\n    border-radius: .3rem;\n    cursor: pointer;\n    transition: .3s;\n}\n\n.weekday:hover {\n    transform: scale(1.1);\n}\n\n.weekday * {\n    pointer-events: none;\n}\n\n.weekday .daydate {\n    display: flex;\n    gap: 2em;\n    margin-bottom: .5em;\n}\n\n.daydate .day {\n    flex: 1;\n}\n\n.weather-image-container {\n    justify-self: center;\n}\n\n.weather-image-container .weather-image {\n    width: 3.5em;\n}\n\n.daytemp-container {\n    height: 1.2em;\n    overflow: hidden;\n    position: relative;\n    display: grid;\n    margin-top: .3em;\n}\n\n.daytemp {\n    display: grid;\n    justify-items: center;\n    justify-self: center;\n    font-size: 1.2em;\n    position: absolute;\n}\n\n@media only screen and (max-width: 1020px) {\n    .content {\n        grid-template-columns: 1fr;\n        margin: 0;\n        padding: 0 1rem 5rem;\n    }\n    .weather_card {\n        padding-inline: 0;\n    }\n    .data_table_columns {\n        grid-template-columns: 1fr;\n        width: auto;\n    }\n    .column-2 {\n        margin-left: 0;\n    }\n    .address,\n    .data_table_title {\n        text-wrap: wrap;\n        width: 340px;\n    }\n}\n\n.loading-icon,\n.error-message {\n    position: absolute;\n    left: 50%;\n    top: 20rem;\n}\n\n.error-message {\n    font-size: 1.2em;\n    transform: translateX(-50%);\n}\n\n.loading-icon {\n    width: 3rem;\n    height: 3rem;\n    fill: hsl(0, 0%, 100%);\n    translate: -50%;\n}\n\n.loading-icon svg {\n    position: absolute;\n}\n.loading-icon svg:nth-child(2) {\n    transform: rotate(180deg);\n}\n\n.loading {\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n    0% {-webkit-transform: rotate(0deg);}\n    100% {-webkit-transform: rotate(360deg);}\n}\n\n@keyframes spin {\n    0% {transform: rotate(0deg);}\n    100% {transform: rotate(360deg);}\n}\n\n.hide {\n    display: none;\n}`,""]);const m=u},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],u=i[c]||0,l="".concat(c," ").concat(u);i[c]=u+1;var m=n(l),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var d=r(e,a),c=0;c<i.length;c++){var u=n(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},176:(e,t,n)=>{e.exports=n.p+"797cd5d9eb3812756a8f.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),a=n.n(r),i=n(825),o=n.n(i),s=n(659),d=n.n(s),c=n(56),u=n.n(c),l=n(540),m=n.n(l),h=n(113),f=n.n(h),g=n(208),p={};p.styleTagTransform=f(),p.setAttributes=u(),p.insert=d().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=m(),a()(g.A,p),g.A&&g.A.locals&&g.A.locals;const w=n.p+"15eb556cd941ec7fc2b4.png",y=n.p+"8266b38268aa49c196dc.png",b=n.p+"9957456da0445490c376.png",v=n.p+"6d48da504f4816188c8d.png",k=n.p+"ee81bf9d1d19fb3888ab.jpg";var x=n(176);const M=n.p+"f11b41315e83772b8dd5.jpg",S=n.p+"efbafe38b4f350ef09d3.jpg",C={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function E(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const D={date:E({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:E({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:E({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},T={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function P(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,a=n?.width?String(n.width):t;r=e.formattingValues[a]||e.formattingValues[t]}else{const t=e.defaultWidth,a=n?.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const W={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:P({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:P({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:P({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:P({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:P({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function _(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const o=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?function(e){for(let t=0;t<e.length;t++)if(e[t].test(o))return t}(s):function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(o))return t}(s);let c;return c=e.valueCallback?e.valueCallback(d):d,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:t.slice(o.length)}}}const F={ordinalNumber:(B={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(B.matchPattern);if(!n)return null;const r=n[0],a=e.match(B.parsePattern);if(!a)return null;let i=B.valueCallback?B.valueCallback(a[0]):a[0];return i=t.valueCallback?t.valueCallback(i):i,{value:i,rest:e.slice(r.length)}}),era:_({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:_({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:_({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:_({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:_({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var B;const I={code:"en-US",formatDistance:(e,t,n)=>{let r;const a=C[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:D,formatRelative:(e,t,n,r)=>T[e],localize:W,match:F,options:{weekStartsOn:0,firstWeekContainsDate:1}};let $={};function j(){return $}Math.pow(10,8);const L=6048e5,A=864e5,O=Symbol.for("constructDateFrom");function q(e,t){return"function"==typeof e?e(t):e&&"object"==typeof e&&O in e?e[O](t):e instanceof Date?new e.constructor(t):new Date(t)}function Y(e,t){return q(t||e,e)}function z(e){const t=Y(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function N(e,t){const n=Y(e,t?.in);return n.setHours(0,0,0,0),n}function H(e,t){const n=Y(e,t?.in);return function(e,t,n){const[r,a]=function(e,...t){const n=q.bind(null,e||t.find((e=>"object"==typeof e)));return t.map(n)}(n?.in,e,t),i=N(r),o=N(a),s=+i-z(i),d=+o-z(o);return Math.round((s-d)/A)}(n,function(e,t){const n=Y(e,t?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function U(e,t){const n=j(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=Y(e,t?.in),i=a.getDay(),o=(i<r?7:0)+i-r;return a.setDate(a.getDate()-o),a.setHours(0,0,0,0),a}function Q(e,t){return U(e,{...t,weekStartsOn:1})}function X(e,t){const n=Y(e,t?.in),r=n.getFullYear(),a=q(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const i=Q(a),o=q(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const s=Q(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function G(e,t){const n=Y(e,t?.in),r=+Q(n)-+function(e,t){const n=X(e,t),r=q(t?.in||e,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Q(r)}(n);return Math.round(r/L)+1}function R(e,t){const n=Y(e,t?.in),r=n.getFullYear(),a=j(),i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=q(t?.in||e,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const s=U(o,t),d=q(t?.in||e,0);d.setFullYear(r,0,i),d.setHours(0,0,0,0);const c=U(d,t);return+n>=+s?r+1:+n>=+c?r:r-1}function J(e,t){const n=Y(e,t?.in),r=+U(n,t)-+function(e,t){const n=j(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=R(e,t),i=q(t?.in||e,0);return i.setFullYear(a,0,r),i.setHours(0,0,0,0),U(i,t)}(n,t);return Math.round(r/L)+1}function V(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const K={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return V("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):V(n+1,2)},d:(e,t)=>V(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>V(e.getHours()%12||12,t.length),H:(e,t)=>V(e.getHours(),t.length),m:(e,t)=>V(e.getMinutes(),t.length),s:(e,t)=>V(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return V(Math.trunc(r*Math.pow(10,n-3)),t.length)}},Z={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return K.y(e,t)},Y:function(e,t,n,r){const a=R(e,r),i=a>0?a:1-a;return"YY"===t?V(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):V(i,t.length)},R:function(e,t){return V(X(e),t.length)},u:function(e,t){return V(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return V(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return V(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return K.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return V(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=J(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):V(a,t.length)},I:function(e,t,n){const r=G(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):V(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):K.d(e,t)},D:function(e,t,n){const r=H(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):V(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return V(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return V(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return V(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return K.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):K.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):V(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):V(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):K.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):K.s(e,t)},S:function(e,t){return K.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return te(r);case"XXXX":case"XX":return ne(r);default:return ne(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return te(r);case"xxxx":case"xx":return ne(r);default:return ne(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ee(r,":");default:return"GMT"+ne(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ee(r,":");default:return"GMT"+ne(r,":")}},t:function(e,t,n){return V(Math.trunc(+e/1e3),t.length)},T:function(e,t,n){return V(+e,t.length)}};function ee(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return 0===i?n+String(a):n+String(a)+t+V(i,2)}function te(e,t){return e%60==0?(e>0?"-":"+")+V(Math.abs(e)/60,2):ne(e,t)}function ne(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+V(Math.trunc(r/60),2)+t+V(r%60,2)}const re=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},ae=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},ie={p:ae,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return re(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",re(r,t)).replace("{{time}}",ae(a,t))}},oe=/^D+$/,se=/^Y+$/,de=["D","DD","YY","YYYY"];function ce(e){return!(!((t=e)instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t))&&"number"!=typeof e||isNaN(+Y(e)));var t}const ue=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,le=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,me=/^'([^]*?)'?$/,he=/''/g,fe=/[a-zA-Z]/;function ge(e,t,n){const r=j(),a=n?.locale??r.locale??I,i=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=Y(e,n?.in);if(!ce(s))throw new RangeError("Invalid time value");let d=t.match(le).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,ie[t])(e,a.formatLong):e})).join("").match(ue).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:pe(e)};if(Z[t])return{isToken:!0,value:e};if(t.match(fe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));a.localize.preprocessor&&(d=a.localize.preprocessor(s,d));const c={firstWeekContainsDate:i,weekStartsOn:o,locale:a};return d.map((r=>{if(!r.isToken)return r.value;const i=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return se.test(e)}(i)||!n?.useAdditionalDayOfYearTokens&&function(e){return oe.test(e)}(i))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),de.includes(e))throw new RangeError(r)}(i,t,String(e)),(0,Z[i[0]])(s,i,a.localize,c)})).join("")}function pe(e){const t=e.match(me);return t?t[1].replace(he,"'"):e}const we=function(){const e=document.getElementById("weather-app"),t=document.getElementById("address"),n=document.getElementById("datetime"),r=document.getElementById("temp-celsius"),a=document.getElementById("temp-fahrenheit"),i=document.getElementById("weather_descr_icon"),o=document.getElementById("weather_descr_text"),s=document.getElementById("table_title"),d=document.getElementById("feelslike-celsius"),c=document.getElementById("feelslike-fahrenheit"),u=document.getElementById("high-low"),l=document.getElementById("wind"),m=document.getElementById("pressure"),h=document.getElementById("visibility"),f=document.getElementById("humidity"),g=document.getElementById("dew_point"),p=document.getElementById("uv_index"),w=document.getElementById("moon_phase");function y(e,t){e.textContent="",e.textContent=t}const b=document.querySelectorAll(".day"),v=document.querySelectorAll(".date"),k=document.querySelectorAll(".weather-image"),x=document.querySelectorAll(".daytemp"),M=document.getElementById("inactive-units"),S=document.querySelectorAll(".temp-track");let C="C/kph";const E=document.querySelector(".weather_card"),D=document.getElementById("week"),T=document.getElementById("error-message"),P=document.getElementById("loading");return{setBackground:t=>{e.style.backgroundImage=`linear-gradient(\n        rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${t})`},showAddress:e=>{y(t,e)},showDatetime:e=>{y(n,e)},showTempCelsius:e=>{y(r,e)},showTempFahrenheit:e=>{y(a,e)},showDescriptionImage:e=>{i.src=e},showDescriptionText:e=>{y(o,e)},showDataTableTitle:e=>{y(s,e)},showFeelslikeCelsius:e=>{y(d,e)},showFeelslikeFahrenheit:e=>{y(c,e)},showMaxMinTemp:e=>{y(u,e)},showWind:e=>{y(l,e)},showPressure:e=>{y(m,e)},showVisibility:e=>{y(h,e)},showHumidity:e=>{y(f,e)},showDew:e=>{y(g,e)},showUVIndex:e=>{y(p,e)},showMoonPhase:e=>{y(w,e)},showWeekday:(e,t,n,r,a)=>{b[e].textContent="",v[e].textContent="",k[e].src="#",x[e].textContent="",b[e].textContent=t,v[e].textContent=n,k[e].src=r,x[e].textContent=a},getUnitSystem:()=>C,setUnitSystem:e=>C=e,showUnitSystem:()=>{"C/kph"!==C?(M.textContent="",M.textContent="Celsius",S.forEach((e=>{e.style.bottom="-0.1em"}))):(M.textContent="",M.textContent="Fahrenheit",S.forEach((e=>{e.style.bottom="initial"})))},changeDaytemp:(e,t)=>{x[e].textContent="",x[e].textContent=t},showDataField:()=>{E.style.transform="rotateX(0deg)",D.style.transform="rotateX(0deg)"},hideDataField:()=>{E.style.transform="rotateX(90deg)",D.style.transform="rotateX(90deg)"},showError:e=>{T.textContent="",T.textContent=e.message,T.classList.toggle("hide",!1)},noError:()=>{T.textContent="",T.classList.toggle("hide",!0)},loading:()=>{P.classList.toggle("loading",!0),P.classList.toggle("hide",!1)},stopLoading:()=>{P.classList.toggle("loading",!1),P.classList.toggle("hide",!0)}}}(),ye=e=>e.includes("Snow")?b:e.includes("Rain")?y:e.includes("cloud")||e.includes("Overcast")?w:v,be=e=>e.includes("Snow")?M:e.includes("Rain")?S:e.includes("cloud")||e.includes("Overcast")?k:x;let ve;const ke=e=>Math.trunc(5*(+e-32)/9),xe=e=>(+e/.6214).toFixed(1);let Me=0;const Se=e=>{let t=e.address;t.includes(",")&&(t=e.address.split(","),t.pop());const n=e.currentConditions,r=e.days[Me],a=n.datetime.split(":");a.pop();const i=`${a.join(":")} ${ge(new Date(`${r.datetime}`),"EEEE, dd MMM yyyy")}`;var o;we.showAddress(e.address),0==Me?(we.showDatetime(i),we.showTempCelsius(ke(n.temp)),we.showTempFahrenheit(Math.trunc(n.temp)),we.showFeelslikeFahrenheit(Math.trunc(n.feelslike)),we.showFeelslikeCelsius(ke(n.feelslike))):(we.showDatetime(ge(new Date(`${r.datetime}`),"EEEE, dd MMM yyyy")),we.showTempCelsius(ke(r.temp)),we.showTempFahrenheit(Math.trunc(r.temp)),we.showFeelslikeFahrenheit(Math.trunc(r.feelslike)),we.showFeelslikeCelsius(ke(r.feelslike))),we.showDescriptionImage(ye(r.conditions)),we.showDescriptionText(r.conditions),we.showDataTableTitle(`Weather today in ${t}`),we.showMaxMinTemp(`${ke(r.tempmax)}° / ${ke(r.tempmin)}°`),we.showWind(`${xe(r.windspeed)} km/h`),we.showPressure(`${Math.trunc(r.pressure)} hpa`),we.showVisibility(`${xe(r.visibility)} km`),we.showHumidity(`${r.humidity}%`),we.showDew(`${ke(r.dew)}°`),we.showUVIndex(`${r.uvindex} of 10`),we.showMoonPhase(0===(o=r.moonphase)?"New Moon":o>0&&o<.25?"Waxing Crescent":.25===o?"First Quarter":o>.25&&o<.5?"Waxing Gibbous":.5===o?"Full Moon":o>.5&&o<.75?"Waning Gibbous":o<.75?"Last Quarter":o>.75&&o<=1?"Waning Crescent":void 0)},Ce=document.getElementById("search_form-input"),Ee=document.getElementById("search_form-button"),De=document.getElementById("search_form-clear");Ee.addEventListener("click",(()=>{we.setUnitSystem("C/kph"),Me=0,(()=>{if(""===Ce.value)return;we.noError();const e=Ce.value.trim();we.hideDataField();(async function(e){const t=new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=44U84TAKBGJZQ9BU7VJRFQADW`,{mode:"cors"});try{we.loading();const e=await fetch(t);if(!e.ok)throw new Error("Location Not Found!");const n=await e.json();return we.stopLoading(),we.noError(),n}catch(e){we.stopLoading(),we.showError(e)}})(e).then((e=>{if(!e)return;const t=function(e){return{address:e.resolvedAddress,currentConditions:{temp:e.currentConditions.temp,feelslike:e.currentConditions.feelslike,datetime:e.currentConditions.datetime},days:e.days.map((e=>({temp:e.temp,tempmax:e.tempmax,tempmin:e.tempmin,feelslike:e.feelslike,datetime:e.datetime,conditions:e.conditions,dew:e.dew,humidity:e.humidity,windspeed:e.windspeed,pressure:e.pressure,visibility:e.visibility,uvindex:e.uvindex,moonphase:e.moonphase,sunrise:e.sunrise,sunset:e.sunset,hours:e.hours.map((e=>({datetime:e.datetime,conditions:e.conditions,humidity:e.humidity,windspeed:e.windspeed,pressure:e.pressure,visibility:e.visibility,temp:e.temp,feelslike:e.feelslike})))})))}}(e);ve=t,we.setBackground(be(t.days[Me].conditions)),Se(t),we.showDataField(),we.showUnitSystem();for(let e=0;e<7;e++){let n=ge(new Date(t.days[e].datetime),"EEEE"),r=ge(new Date(t.days[e].datetime),"dd/MM"),a=ye(t.days[e].conditions),i=`${ke(t.days[e].temp)}°`,o=`${Math.trunc(+t.days[e].temp)}°`;0===e?we.showWeekday(e,"Today",r,a,i,o):1===e?we.showWeekday(e,"Tomorrow",r,a,i,o):we.showWeekday(e,n,r,a,i,o)}}))})()})),De.addEventListener("click",(e=>{e.preventDefault(),Ce.value="",De.style.visibility="hidden",Ce.focus()})),Ce.addEventListener("input",(()=>{Ce.value.length>0?De.style.visibility="visible":De.style.visibility="hidden"}));const Te=document.getElementById("switch-units"),Pe=()=>{if(!ve)return;const e=we.getUnitSystem();we.showUnitSystem();const t=ve.days[Me];"C/kph"!==e?(we.showMaxMinTemp(`${Math.trunc(+t.tempmax)}° / ${Math.trunc(+t.tempmin)}°`),we.showWind(`${(+t.windspeed).toFixed(1)} mi/h`),we.showVisibility(`${(+t.visibility).toFixed(1)} mi`),we.showDew(`${Math.trunc(t.dew)}°`)):(we.showMaxMinTemp(`${ke(t.tempmax)}° / ${ke(t.tempmin)}°`),we.showWind(`${xe(t.windspeed)} km/h`),we.showVisibility(`${xe(t.visibility)} km`),we.showDew(`${ke(t.dew)}°`))};Te.addEventListener("click",(()=>{"C/kph"===we.getUnitSystem()?we.setUnitSystem("F/mph"):we.setUnitSystem("C/kph"),Pe(),(()=>{if("C/kph"!==we.getUnitSystem())for(let e=0;e<7;e++){let t=`${Math.trunc(+ve.days[e].temp)}°`;we.changeDaytemp(e,t)}else for(let e=0;e<7;e++){let t=`${ke(+ve.days[e].temp)}°`;we.changeDaytemp(e,t)}})()}));const We=document.querySelectorAll(".weekday");var _e;We.forEach((e=>{e.addEventListener("click",(()=>{ve&&(Me=Array.from(We).indexOf(e),we.setBackground(be(ve.days[Me].conditions)),Se(ve),"C/kph"!==we.getUnitSystem()&&Pe())}))})),_e=()=>{document.body.style.visibility="visible"},"interactive"===document.readyState||"complete"===document.readyState?_e():document.addEventListener("DOMContentLoaded",_e)})();