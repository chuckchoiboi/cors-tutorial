(this.webpackJsonpcors=this.webpackJsonpcors||[]).push([[0],{18:function(e,r,t){},19:function(e,r,t){},241:function(e,r,t){"use strict";t.r(r);var s=t(1),n=t.n(s),i=t(9),o=t.n(i),l=(t(18),t(3)),c=(t(19),t(0)),a=function(e){var r=e.tabs,t=e.selected,s=e.setSelected,n=e.setSecondarySelected,i=e.children;return Object(c.jsxs)("div",{className:"PrimaryTabs",children:[Object(c.jsx)("ul",{className:"nav nav-tabs d-flex",children:r.map((function(e,r){var i=r===t?"active":"";return Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)("div",{className:"nav-link "+i,style:{cursor:"pointer"},onClick:function(){s(r),n(0)},children:e})},e)}))}),i]})},d=function(e){var r=e.isSelected,t=e.tabs,s=e.selected,n=e.setSelected,i=e.children,o=100/t.length;return r?Object(c.jsxs)("div",{className:"SecondaryTabs",children:[Object(c.jsx)("ul",{className:"nav nav-tabs d-flex",children:t.map((function(e,r){var t=r===s?"active":"";return Object(c.jsx)("li",{className:"nav-item",style:{width:"".concat(o,"%")},children:Object(c.jsx)("div",{className:"nav-link "+t,style:{cursor:"pointer"},onClick:function(){return n(r)},children:e})},e)}))}),i]}):null},h=t(245),p=t(244),u=function(e){var r=e.data,t=r.server,n=r.header?"fetch('".concat(r.url,"', '").concat(JSON.stringify(r.header),"')"):"fetch('".concat(r.url,"')"),i=Object(s.useState)(""),o=Object(l.a)(i,2),a=o[0],d=o[1];return Object(c.jsxs)("div",{className:"Tab m-4",children:[Object(c.jsx)("p",{children:"Server"}),Object(c.jsx)(h.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:t}),Object(c.jsx)("p",{children:"Request"}),Object(c.jsx)(h.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:"".concat(n)}),Object(c.jsx)("button",{className:"btn btn-primary mx-auto d-block",onClick:function(){!function(e){e.header?fetch(e.url,e.header).then((function(e){return e.json()})).then((function(e){return JSON.stringify(e)})).then((function(e){return d("".concat(e))})):fetch(e.url).then((function(e){return e.json()})).then((function(e){return JSON.stringify(e)})).then((function(e){return d("".concat(e))}))}(r)},children:"Send Request"}),Object(c.jsx)("p",{children:"Console"}),Object(c.jsx)(h.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:"".concat("Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/simple/no-origin' from origin 'https://www.chuckchoi.me' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.")}),Object(c.jsx)("p",{children:"Response"}),Object(c.jsx)(h.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:"".concat(a)})]})};var b=function(){var e=Object(s.useState)(0),r=Object(l.a)(e,2),t=r[0],n=r[1],i=Object(s.useState)(0),o=Object(l.a)(i,2),h=o[0],p=o[1],b={simple:["Error 1","Wildcard Origin","Error 2","Valid Condition"],preflight:["Error 1","Error 2","Error 3","Valid Condition"],credentialed:["Error 1","Error 2","Valid Condition"]},g="https://cors-tutorial-server.herokuapp.com/api",j=[{url:g+"/simple/no-origin",server:"app.get('/api/simple/no-origin', (req, res) => {\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:g+"/simple/wildcard-origin",server:"app.get('/api/simple/wildcard-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"*\")\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:g+"/simple/bad-origin",server:"app.get('/api/simple/bad-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"https://www.website.notcool\")\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:g+"/simple/good-origin",server:"app.get('/api/simple/good-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"https://chuckchoiboi.github.io\")\n  res.status(200).json({ title: 'Hello World!' })\n})"}],w=[{url:g+"/preflight/bad-origin",header:{method:"DELETE"},server:'app.options(\'/api/preflight/bad-origin\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://www.website.notcool")\n  res.status(204).end()\n})'},{url:g+"/preflight/bad-method",header:{method:"DELETE"},server:'app.options(\'/api/preflight/bad-method\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.status(204).end()\n})'},{url:g+"/preflight/req-bad-origin",header:{method:"DELETE"},server:'app.options(\'/api/preflight/req-bad-origin\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.header("Access-Control-Allow-Methods", "DELETE")\n  res.status(204).end()\n})\n\napp.delete(\'/api/simple/req-bad-origin\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://www.website.notcool")\n  res.status(200).json({ title: \'Goodbye World!\' })\n})'},{url:g+"/preflight/good-request",header:{method:"DELETE"},server:'app.options(\'/api/preflight/good-request\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.header("Access-Control-Allow-Methods", "DELETE")\n  res.status(204).end()\n})\n\napp.delete(\'/api/simple/good-request\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.status(200).json({ title: \'Goodbye World!\' })\n})'}],O=[{url:g+"/credentialed/wildcard-origin",header:{credentials:"include"},server:"app.get('/api/credentialed/wildcard-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"*\")\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:g+"/credentialed/good-origin",header:{credentials:"include"},server:"app.get('/api/credentialed/good-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"https://chuckchoiboi.github.io\")\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:g+"/credentialed/good-request",header:{credentials:"include"},server:'app.get(\'/api/credentialed/good-request\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.header("Access-Control-Allow-Credentials", "true")\n  res.status(200).json({ title: \'Hello World!\' })\n})'}];return Object(c.jsx)("div",{className:"d-flex justify-content-center flex-row mt-4",children:Object(c.jsxs)(a,{tabs:["Simple Request","Preflight Request","Credentialed Request"],selected:t,setSelected:n,setSecondarySelected:p,children:[Object(c.jsx)(d,{isSelected:0===t,tabs:b.simple,selected:h,setSelected:p,children:Object(c.jsx)(u,{isSelected:0===h,data:j[h]})}),Object(c.jsx)(d,{isSelected:1===t,tabs:b.preflight,selected:h,setSelected:p,children:Object(c.jsx)(u,{isSelected:1===h,data:w[h]})}),Object(c.jsx)(d,{isSelected:2===t,tabs:b.credentialed,selected:h,setSelected:p,children:Object(c.jsx)(u,{isSelected:2===h,data:O[h]})})]})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,246)).then((function(r){var t=r.getCLS,s=r.getFID,n=r.getFCP,i=r.getLCP,o=r.getTTFB;t(e),s(e),n(e),i(e),o(e)}))};t(240);o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),g()}},[[241,1,2]]]);
//# sourceMappingURL=main.2340c7da.chunk.js.map