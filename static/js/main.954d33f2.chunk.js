(this.webpackJsonpcors=this.webpackJsonpcors||[]).push([[0],{10:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var c=r(1),i=r.n(c),n=r(4),l=r.n(n),s=(r(9),r(3)),d=(r(10),r(0)),a=function(e){var t=e.tabs,r=e.selected,c=e.setSelected,i=e.setSecondarySelected,n=e.children;return Object(d.jsxs)("div",{className:"PrimaryTabs",children:[Object(d.jsx)("ul",{className:"nav nav-tabs d-flex",children:t.map((function(e,t){var n=t===r?"active":"";return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("div",{className:"nav-link "+n,style:{cursor:"pointer"},onClick:function(){c(t),i(0)},children:e})},e)}))}),n]})},o=function(e){var t=e.isSelected,r=e.tabs,c=e.selected,i=e.setSelected,n=e.children,l=100/r.length;return t?Object(d.jsxs)("div",{className:"SecondaryTabs",children:[Object(d.jsx)("ul",{className:"nav nav-tabs d-flex",children:r.map((function(e,t){var r=t===c?"active":"";return Object(d.jsx)("li",{className:"nav-item",style:{width:"".concat(l,"%")},children:Object(d.jsx)("div",{className:"nav-link "+r,style:{cursor:"pointer"},onClick:function(){return i(t)},children:e})},e)}))}),n]}):null},u=function(e){var t=e.data;return Object(d.jsxs)("div",{className:"Tab m-4",children:[Object(d.jsx)("p",{children:"Server"}),Object(d.jsx)("pre",{children:"app.get('api/simple/no-origin', (req, res) => { hello })"}),Object(d.jsx)("p",{children:"Request"}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){!function(e){e.header?fetch(e.url,e.header):fetch(e.url)}(t)},children:"Send Request"}),Object(d.jsx)("p",{children:"Console"}),Object(d.jsx)("p",{children:"Response"})]})};var h=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),r=t[0],i=t[1],n=Object(c.useState)(0),l=Object(s.a)(n,2),h=l[0],j=l[1],b={simple:["Error 1","Wildcard Origin","Error 2","Valid Condition"],preflight:["Error 1","Error 2","Error 3","Valid Condition"],credentialed:["Error 1","Error 2","Valid Condition"]},p="https://cors-tutorial-server.herokuapp.com/api",m=[{url:p+"/simple/no-origin"},{url:p+"/simple/wildcard-origin"},{url:p+"/simple/bad-origin"},{url:p+"/simple/good-origin"}],f=[{url:p+"/preflight/bad-origin",header:{method:"DELETE"}},{url:p+"/preflight/bad-method",header:{method:"DELETE"}},{url:p+"/preflight/req-bad-origin",header:{method:"DELETE"}},{url:p+"/preflight/good-request",header:{method:"DELETE"}}],O=[{url:p+"/credentialed/wildcard-origin",header:{credentials:"include"}},{url:p+"/credentialed/good-origin",header:{credentials:"include"}},{url:p+"/credentialed/good-request",header:{credentials:"include"}}];return Object(d.jsx)("div",{className:"d-flex justify-content-center flex-row mt-4",children:Object(d.jsxs)(a,{tabs:["Simple Request","Preflight Request","Credentialed Request"],selected:r,setSelected:i,setSecondarySelected:j,children:[Object(d.jsx)(o,{isSelected:0===r,tabs:b.simple,selected:h,setSelected:j,children:Object(d.jsx)(u,{isSelected:0===h,data:m[h]})}),Object(d.jsx)(o,{isSelected:1===r,tabs:b.preflight,selected:h,setSelected:j,children:Object(d.jsx)(u,{isSelected:1===h,data:f[h]})}),Object(d.jsx)(o,{isSelected:2===r,tabs:b.credentialed,selected:h,setSelected:j,children:Object(d.jsx)(u,{isSelected:2===h,data:O[h]})})]})})},j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;r(e),c(e),i(e),n(e),l(e)}))};r(12);l.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,r){}},[[13,1,2]]]);
//# sourceMappingURL=main.954d33f2.chunk.js.map