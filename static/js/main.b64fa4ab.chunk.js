(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{19:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},38:function(e,t){},39:function(e,t,a){"use strict";a.r(t);var c=a(12),n=a.n(c),s=a(20),r=a.n(s),l=(a(27),a(19),a(1));var i=function(){return Object(l.jsx)("div",{class:"footerContainer",children:Object(l.jsxs)("h2",{children:["Built by ",Object(l.jsx)("a",{href:"https://github.com/macakz",children:"macakz"})]})})};var o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"headerContainer",children:Object(l.jsx)("h1",{children:"The Reactive Calculator"})})})},j=a(5),b=a(41);a(29);var d=function(){var e=Object(c.useState)(" "),t=Object(j.a)(e,2),a=t[0],n=t[1],s=function(e){var t=e.target.getAttribute("name");switch(t){case"=":!function(){var e=Object(b.a)(a);n(e)}();break;case"%":n(a/100);break;case"\xb1":a.includes("-")?n(a.split("-").pop()):n("-"+a);break;default:n(a+t)}};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"calculator",children:[Object(l.jsx)("div",{className:"calculator_display",children:" "===a?Object(l.jsx)("div",{children:"0"}):Object(l.jsx)("div",{children:a})}),Object(l.jsxs)("div",{className:"calculator_keys",children:[Object(l.jsx)("button",{onClick:function(){n(" ")},name:"AC",className:"ac",children:"AC"}),Object(l.jsx)("button",{onClick:s,name:"\xb1","data-type":"operator",className:"plusMinus",children:"\xb1"}),Object(l.jsx)("button",{onClick:s,name:"%","data-type":"operator",className:"percent",children:"%"}),Object(l.jsx)("button",{onClick:s,name:"/","data-type":"operator",className:"divide",children:"\xf7"}),Object(l.jsx)("button",{onClick:s,name:"7","data-type":"number",className:"seven",children:"7"}),Object(l.jsx)("button",{onClick:s,name:"8","data-type":"number",className:"eight",children:"8"}),Object(l.jsx)("button",{onClick:s,name:"9","data-type":"number",className:"nine",children:"9"}),Object(l.jsx)("button",{onClick:s,name:"*","data-type":"operator",className:"multiply",children:"\xd7"}),Object(l.jsx)("button",{onClick:s,name:"4","data-type":"number",className:"four",children:"4"}),Object(l.jsx)("button",{onClick:s,name:"5","data-type":"number",className:"five",children:"5"}),Object(l.jsx)("button",{onClick:s,name:"6","data-type":"number",className:"six",children:"6"}),Object(l.jsx)("button",{onClick:s,name:"-","data-type":"operator",className:"minus",children:"\u2212"}),Object(l.jsx)("button",{onClick:s,name:"1","data-type":"number",className:"one",children:"1"}),Object(l.jsx)("button",{onClick:s,name:"2","data-type":"number",className:"two",children:"2"}),Object(l.jsx)("button",{onClick:s,name:"3","data-type":"number",className:"three",children:"3"}),Object(l.jsx)("button",{onClick:s,name:"+","data-type":"operator",className:"plus",children:"+"}),Object(l.jsx)("button",{onClick:s,name:"0","data-type":"number",className:"zero",children:"0"}),Object(l.jsx)("button",{onClick:s,name:".","data-type":"operator",className:"decimal",children:"."}),Object(l.jsx)("button",{onClick:s,name:"=","data-type":"operator",className:"equals",children:"="})]})]})})})};var m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"pageContainer",children:[Object(l.jsxs)("div",{className:"contentWrap",children:[Object(l.jsx)(o,{}),Object(l.jsx)(d,{})]}),Object(l.jsx)(i,{})]})})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b64fa4ab.chunk.js.map