(this["webpackJsonpspace-stuff-project"]=this["webpackJsonpspace-stuff-project"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),r=t(3),a=t.n(r),i=(t(8),t(9),t(0)),s=function(){return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"Cool Space Stuff"})})},u=function(){return Object(i.jsxs)("div",{className:"home",children:[Object(i.jsx)("button",{id:"get-image",onClick:function(){fetch("https://api.nasa.gov/planetary/apod?api_key=9YUajepmhWTLLO1dz38SxEeKsWa8KyzPDKK66Bep").then((function(e){if(!e.ok)throw new Error("Could not fetch the data from this source.");return e.json()})).then((function(e){var n='\n            <div className="home-data">\n                    <h3>'.concat(e.title,"</h3>\n                    <img src=").concat(e.url," alt=").concat(e.title," />\n                    <p>").concat(e.explanation,"</p>\n                    <address>").concat(e.date,"</address>\n                </div>\n            ");document.querySelector(".content-image").innerHTML=n})).catch((function(e){var n='\n            <div className="error">\n                <p>'.concat(e.message,"</p>\n            </div>\n            ");document.querySelector(".content-image").innerHTML=n}))},children:"Get image of the day"}),Object(i.jsx)("button",{id:"get-story",onClick:function(){fetch("http://api.open-notify.org/astros.json").then((function(e){if(!e.ok)throw new Error("Could not fetch the people details from this source.");return e.json()})).then((function(e){var n=e.people.map((function(e){return"<li>".concat(e.name," is currently on ").concat(e.craft,"</li>")}));document.querySelector(".content-people").innerHTML="<h3>List of people currently in space</h3>"+n})).catch((function(e){var n='\n            <div className="error">\n                <p>'.concat(e.message,"</p>\n            </div>\n            ");document.querySelector(".content-people").innerHTML=n}))},children:"Get info on people in space"}),Object(i.jsx)("article",{className:"content-image"}),Object(i.jsx)("article",{className:"content-people"})]})};var l=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(u,{})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),o(e),r(e),a(e)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),p()},8:function(e,n,t){},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.40f94ff6.chunk.js.map