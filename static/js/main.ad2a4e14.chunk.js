(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),a=t(4),c=t.n(a),l=t(1);t(10);var s=function(e){var n=e.total,t=e.buffer;return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{id:"display"},n),i.a.createElement("p",{id:"second"},t))},u=[{innerHTML:"AC",id:"clear",class:"delete"},{innerHTML:"/",id:"divide",class:"operand"},{innerHTML:"x",id:"multiply",class:"operand"},{innerHTML:"7",id:"seven",class:"number"},{innerHTML:"8",id:"eight",class:"number"},{innerHTML:"9",id:"nine",class:"number"},{innerHTML:"-",id:"subtract",class:"operand"},{innerHTML:"4",id:"four",class:"number"},{innerHTML:"5",id:"five",class:"number"},{innerHTML:"6",id:"six",class:"number"},{innerHTML:"+",id:"add",class:"operand"},{innerHTML:"1",id:"one",class:"number"},{innerHTML:"2",id:"two",class:"number"},{innerHTML:"3",id:"three",class:"number"},{innerHTML:"=",id:"equals",class:"equals"},{innerHTML:"0",id:"zero",class:"number"},{innerHTML:".",id:"decimal",class:"number"}];t(11);var o=function(e){var n=e.handleClick;return i.a.createElement("div",{id:"keyboard-container"},u.map((function(e){return i.a.createElement("button",{key:e.id,id:e.id,className:e.class,onClick:function(){return n(e.innerHTML)}},e.innerHTML)})))},d=t(2);function f(e){return"/"===e||"x"===e||"+"===e||"-"===e}var m={"+":function(e,n){return e+n},"-":function(e,n){return e-n},x:function(e,n){return e*n},"/":function(e,n){return e/n}};t(12);var b=function(){var e=Object(r.useState)("0"),n=Object(l.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)("0"),u=Object(l.a)(c,2),b=u[0],h=u[1],v=Object(r.useState)("0"),p=Object(l.a)(v,2),T=p[0],H=p[1];return Object(r.useEffect)((function(){H(t[t.length-1])}),[t]),i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"calculator-container"},i.a.createElement(s,{buffer:t,total:b}),i.a.createElement(o,{handleClick:function(e){if("AC"===e)a("0"),h("0");else if(f(e))f(T)?(a(t.slice(0,t.length-1)+e),h(b.slice(0,b.length-1)+e)):(a(t+e),h(b+e));else if("="===e){("."===T||f(T))&&(a(t.slice(0,t.length-1)+e),h(b.slice(0,b.length-1)+e));var n=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,"+",0];if(n.length<=3)return m[n[1]](n[0],n[2]);for(var t=1;t<n.length;t+=2)if("x"===n[t]||"/"===n[t]){var r=m[n[t]](n[t-1],n[t+1]);return e([].concat(Object(d.a)(n.slice(0,t-1)),[r],Object(d.a)(n.slice(t+2,n.length))))}return e([m[n[1]](n[0],n[2])].concat(Object(d.a)(n.slice(3,n.length))))}(function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=[],t=0,r=0;r<e.length;r++)f(e[r])&&(n.push(Number(e.slice(t,r))),n.push(e[r]),t=r+1);return n.push(Number(e.slice(t,e.length))),n}(b));console.log("response",n),a(n),h(n)}else if("."===e){if(t.includes("."))return;a(t+e),h(b+e)}else t.length>20?function(){var e=t;a("SIZE LIMIT REACHED!"),setTimeout((function(){a(e)}),2e3)}():"0"===t?(a(e),h(b.slice(0,b.length-1)+e)):f(T)?(a(e),h(b+e)):(a(t+e),h(b+e))}})))};c.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.ad2a4e14.chunk.js.map