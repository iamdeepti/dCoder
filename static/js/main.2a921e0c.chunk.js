(this["webpackJsonpcns-project"]=this["webpackJsonpcns-project"]||[]).push([[0],{32:function(e,t,a){e.exports=a(43)},37:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(37),a(12)),s=a(13),u=a(19),i=a(17),m=a(45),p=a(50),h=a(48),y=a(49),f=a(46),E=a(47),v=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={text:"",key:null,result:""},e.setText=function(t){var a=t.target.value.toLowerCase();a.replace(" ",""),e.setState({text:a})},e.setKey=function(t){var a=parseInt(t.target.value);e.setState({key:a})},e.encrypt=function(t){t.preventDefault();for(var a,n="",r=0;r<e.state.text.length;r++)a=(e.state.text.charCodeAt(r)-97+e.state.key)%26+97,n+=String.fromCharCode(a);e.setState({result:n})},e.decrypt=function(t){t.preventDefault();for(var a,n="",r=0;r<e.state.text.length;r++)a=(e.state.text.charCodeAt(r)-97-e.state.key)%26+97,n+=String.fromCharCode(a);e.setState({result:n})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Enter Plain Text/ Cipher Text"),r.a.createElement(y.a.Control,{as:"textarea",rows:"3",onChange:this.setText})),r.a.createElement(y.a.Group,null,r.a.createElement(y.a.Label,null,"Enter Key "),r.a.createElement(y.a.Control,{type:"text",onChange:this.setKey})),r.a.createElement(f.a,null,r.a.createElement(E.a,{type:"submit",onClick:this.encrypt},"Encrypt"),r.a.createElement(E.a,{type:"submit",onClick:this.decrypt},"Decrypt"))),r.a.createElement("p",null,this.state.result)))}}]),a}(n.Component),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={key:"Caesar"},e.setKey=function(t){e.setState({key:t})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,null,r.a.createElement("br",null),r.a.createElement("h1",null,"Dcoder"),r.a.createElement("h3",null,"A tool for Cryptography"),r.a.createElement("p",null," ","Dcoder, as the name suggests, decodes or encodes all popular encodings."),r.a.createElement(p.a,{id:"controlled-tab-example",activeKey:this.state.key,onSelect:function(t){return e.setKey(t)}},r.a.createElement(h.a,{eventKey:"Caesar",title:"Caesar"},r.a.createElement(v,null)),r.a.createElement(h.a,{eventKey:"Affine",title:"Affine"}),r.a.createElement(h.a,{eventKey:"Substituion",title:"Substituion"})))}}]),a}(n.Component);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.2a921e0c.chunk.js.map