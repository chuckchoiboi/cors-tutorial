(this.webpackJsonpcors=this.webpackJsonpcors||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},236:function(e,t,r){"use strict";r.r(t);var s=r(1),o=r.n(s),i=r(10),n=r.n(i),c=(r(18),r(2)),a=(r(19),r(0)),l=function(e){var t=e.tabs,r=e.selected,s=e.setSelected,o=e.setSecondarySelected,i=e.setFetched,n=e.children;return Object(a.jsxs)("div",{className:"PrimaryTabs",children:[Object(a.jsx)("ul",{className:"nav nav-tabs d-flex",children:t.map((function(e,t){var n=t===r?"active":"";return Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("div",{className:"nav-link "+n,style:{cursor:"pointer"},onClick:function(){s(t),o(0),i(!1)},children:e})},e)}))}),n]})},h=function(e){var t=e.isSelected,r=e.tabs,s=e.selected,o=e.setSelected,i=e.setFetched,n=e.children,c=100/r.length;return t?Object(a.jsxs)("div",{className:"SecondaryTabs",children:[Object(a.jsx)("ul",{className:"nav nav-tabs d-flex",children:r.map((function(e,t){var r=t===s?"active":"";return Object(a.jsx)("li",{className:"nav-item",style:{width:"".concat(c,"%")},children:Object(a.jsx)("div",{className:"nav-link "+r,style:{cursor:"pointer"},onClick:function(){o(t),i(!1)},children:e})},e)}))}),n]}):null},d=r(240),p=r(239),u=function(e){var t=e.data,r=e.fetched,o=e.setFetched;Object(s.useEffect)((function(){r?v("#response"):(g(""),O(!1))}),[r]);var i=t.server,n=t.header?"fetch('".concat(t.url,"', '").concat(JSON.stringify(t.header),"')"):"fetch('".concat(t.url,"')"),l=t.error,h=Object(s.useState)(""),u=Object(c.a)(h,2),b=u[0],g=u[1],w=Object(s.useState)(!1),j=Object(c.a)(w,2),f=j[0],O=j[1],v=function(e){var t=document.querySelector(e).offsetTop;window.scroll({top:t,behavior:"smooth"})};return Object(a.jsxs)("div",{className:"Tab m-4",children:[Object(a.jsx)("p",{children:"Server"}),Object(a.jsx)(d.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:i}),Object(a.jsx)("p",{children:"Request"}),Object(a.jsx)(d.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:"".concat(n)}),r?"":Object(a.jsx)("button",{className:"btn btn-primary mx-auto d-block",onClick:function(){!function(e){O(!0),e.header?fetch(e.url,e.header).then((function(e){return e.json()})).then((function(e){return JSON.stringify(e)})).then((function(t){g("".concat(e.response,"\n\n                    ").concat(t)),o(!0)})).catch((function(e){return o(!0)})):fetch(e.url).then((function(e){return e.json()})).then((function(e){return JSON.stringify(e)})).then((function(t){g("".concat(e.response,"\n            \n                    Body: ").concat(t)),o(!0)})).catch((function(e){return o(!0)}))}(t)},disabled:!(!f||r),children:"Send Request"}),f&&!r?Object(a.jsx)("h1",{children:"Loading Data..."}):Object(a.jsx)(a.Fragment,{children:r&&Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{id:"response",children:"Error"}),Object(a.jsx)(d.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:"".concat(l)})]}),b&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{id:"response",children:"Response"}),Object(a.jsx)(d.a,{language:"javascript",style:p.a,lineProps:{style:{wordBreak:"break-all",whiteSpace:"pre-wrap"}},wrapLines:!0,children:"".concat(b)})]})]})})]})},b="https://cors-tutorial-server.up.railway.app/api",g=[{url:b+"/simple/no-origin",error:"Access to fetch at 'https://cors-tutorial-server.up.railway.app/api/simple/no-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.",server:"app.get('/api/simple/no-origin', (req, res) => {\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:b+"/simple/wildcard-origin",server:"app.get('/api/simple/wildcard-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"*\")\n  res.status(200).json({ title: 'Hello World!' })\n})",response:"GET https://cors-tutorial-server.up.railway.app/api/simple/wildcard-origin 200 OK\n\nAccess-Control-Allow-Origin: *\nContent-Length: 24\nContent-Type: application/json; charset=utf-8\nServer: Cowboy\nStatus: 200"},{url:b+"/simple/bad-origin",error:"Access to fetch at 'https://cors-tutorial-server.up.railway.app/api/simple/bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.",server:"app.get('/api/simple/bad-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"https://www.website.notcool\")\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:b+"/simple/good-origin",server:"app.get('/api/simple/good-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"https://chuckchoiboi.github.io\")\n  res.status(200).json({ title: 'Hello World!' })\n})",response:"GET https://cors-tutorial-server.up.railway.app/api/simple/good-origin 200 OK\n\nAccess-Control-Allow-Origin: https://chuckchoiboi.github.io\nContent-Length: 24\nContent-Type: application/json; charset=utf-8\nServer: Cowboy\nStatus: 200"}],w=[{url:b+"/preflight/bad-origin",error:"Access to fetch at 'https://cors-tutorial-server.up.railway.app/api/preflight/bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: Response to preflight request does not pass access control check: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.",header:{method:"DELETE"},server:'app.options(\'/api/preflight/bad-origin\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://www.website.notcool")\n  res.status(204).end()\n})'},{url:b+"/preflight/bad-method",header:{method:"DELETE"},error:"Access to fetch at 'https://cors-tutorial-server.up.railway.app/api/preflight/bad-method' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: Method DELETE is not allowed by Access-Control-Allow-Methods in preflight response.",server:'app.options(\'/api/preflight/bad-method\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.status(204).end()\n})'},{url:b+"/preflight/req-bad-origin",header:{method:"DELETE"},error:"Access to fetch at 'https://cors-tutorial-server.up.railway.app/api/preflight/req-bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.",server:'app.options(\'/api/preflight/req-bad-origin\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.header("Access-Control-Allow-Methods", "DELETE")\n  res.status(204).end()\n})\n\napp.delete(\'/api/simple/req-bad-origin\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://www.website.notcool")\n  res.status(200).json({ title: \'Goodbye World!\' })\n})'},{url:b+"/preflight/good-request",header:{method:"DELETE"},server:'app.options(\'/api/preflight/good-request\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.header("Access-Control-Allow-Methods", "DELETE")\n  res.status(204).end()\n})\n\napp.delete(\'/api/simple/good-request\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.status(200).json({ title: \'Goodbye World!\' })\n})',response:"OPTIONS https://cors-tutorial-server.up.railway.app/api/preflight/good-request 204 No Content\n\nAccess-Control-Allow-Origin: https://chuckchoiboi.github.io\nAccess-Control-Allow-Methods: DELETE\nConnection: keep-alive\nContent-Length: 0\nServer: Cowboy\nStatus: 204\n\n----------------------------------------------------------------------------------------------\n\nDELETE https://cors-tutorial-server.up.railway.app/api/preflight/good-request 200 OK\n\nAccess-Control-Allow-Origin: https://chuckchoiboi.github.io\nConnection: keep-alive\nContent-Length: 26\nContent-Type: application/json; charset=utf-8\nServer: Cowboy\nStatus: 200"}],j=[{url:b+"/credentialed/wildcard-origin",header:{credentials:"include"},error:"Access to fetch at 'https://cors-tutorial-server.up.railway.app/api/credentialed/wildcard-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request credentials mode is 'include'.",server:"app.get('/api/credentialed/wildcard-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"*\")\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:b+"/credentialed/good-origin",header:{credentials:"include"},error:"Access to fetch at 'https://cors-tutorial-server.up.railway.app/api/credentialed/good-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request credentials mode is 'include'.",server:"app.get('/api/credentialed/good-origin', (req, res) => {\n  res.header(\"Access-Control-Allow-Origin\", \"https://chuckchoiboi.github.io\")\n  res.status(200).json({ title: 'Hello World!' })\n})"},{url:b+"/credentialed/good-request",header:{credentials:"include"},server:'app.get(\'/api/credentialed/good-request\', (req, res) => {\n  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")\n  res.header("Access-Control-Allow-Credentials", "true")\n  res.status(200).json({ title: \'Hello World!\' })\n})',response:"GET https://cors-tutorial-server.up.railway.app/api/credentialed/good-request 200 OK\n\nAccess-Control-Allow-Credentialed: true\nAccess-Control-Allow-Origin: https://chuckchoiboi.github.io\nContent-Length: 24\nContent-Type: application/json; charset=utf-8\nServer: Cowboy\nStatus: 200"}];var f=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),r=t[0],o=t[1],i=Object(s.useState)(0),n=Object(c.a)(i,2),d=n[0],p=n[1],b={simple:["Error 1","Wildcard Origin","Error 2","Valid Condition"],preflight:["Error 1","Error 2","Error 3","Valid Condition"],credentialed:["Error 1","Error 2","Valid Condition"]},f=Object(s.useState)(!1),O=Object(c.a)(f,2),v=O[0],C=O[1];return Object(a.jsx)("div",{className:"d-flex justify-content-center flex-row mt-4",children:Object(a.jsxs)(l,{tabs:["Simple Request","Preflight Request","Credentialed Request"],selected:r,setSelected:o,setSecondarySelected:p,setFetched:C,children:[Object(a.jsx)(h,{isSelected:0===r,tabs:b.simple,selected:d,setSelected:p,setFetched:C,children:Object(a.jsx)(u,{isSelected:0===d,data:g[d],fetched:v,setFetched:C})}),Object(a.jsx)(h,{isSelected:1===r,tabs:b.preflight,selected:d,setSelected:p,setFetched:C,children:Object(a.jsx)(u,{isSelected:1===d,data:w[d],fetched:v,setFetched:C})}),Object(a.jsx)(h,{isSelected:2===r,tabs:b.credentialed,selected:d,setSelected:p,setFetched:C,children:Object(a.jsx)(u,{isSelected:2===d,data:j[d],fetched:v,setFetched:C})})]})})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,241)).then((function(t){var r=t.getCLS,s=t.getFID,o=t.getFCP,i=t.getLCP,n=t.getTTFB;r(e),s(e),o(e),i(e),n(e)}))};r(235);n.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),O()}},[[236,1,2]]]);
//# sourceMappingURL=main.e45f81a9.chunk.js.map