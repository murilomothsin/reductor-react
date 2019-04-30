(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(65)},36:function(e,t,a){},56:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),c=(a(36),a(9)),s=a(6),u=a(7),i=a(10),m=a(11),h=a(14),p=a(12),E=a(15),d=a(13),b=a.n(d),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={url:"",result:"",errors:[]},a.handleChange=function(e){e.preventDefault(),a.setState(Object(u.a)({},a.state,{url:e.target.value}))},a.submit=function(e){e.preventDefault(),b.a.post("".concat("https://reductor-app.herokuapp.com","/shorts"),{short:a.state}).then(function(e){a.setState(Object(u.a)({},a.state,{result:e.data.url}))}).catch(function(e){a.setState(Object(u.a)({},a.state,{errors:e.response.data.errors}))})},a.printErrors=function(){return r.a.createElement("ul",{className:"errors"},a.state.errors.map(function(e){return r.a.createElement("li",{key:e},e)}))},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("h2",null,"Insert your URL:"),this.state.result?r.a.createElement("div",null,r.a.createElement("h3",null,"Congratulations... Take your link:"),r.a.createElement("a",{href:this.state.result,target:"_blank",rel:"noopener noreferrer"},this.state.result)):r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Insert your URL...",value:this.state.url,onChange:this.handleChange}),this.printErrors(),r.a.createElement("button",{type:"submit"},"Insert")))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={shorts:[]},a.getShortList=function(){b.a.get("".concat("https://reductor-app.herokuapp.com","/shorts")).then(function(e){a.setState(Object(u.a)({},a.state,{shorts:e.data.shorts,root_url:e.data.root_url}))}).catch(function(e){a.setState(Object(u.a)({},a.state,{errors:e.response.data.errors}))})},a.shortsList=function(){return a.state.shorts.map(function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.click_count),r.a.createElement("td",{className:"tooltip"},r.a.createElement("span",{className:"tooltiptext"},e.page_title),e.page_title?e.page_title.slice(0,37):"Title will be loaded soon."),r.a.createElement("td",null,r.a.createElement("a",{href:"".concat(a.state.root_url).concat(e.url_digest),target:"_blank",rel:"noopener noreferrer"},e.url)))})},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getShortList()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Top 100 links"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Click Count"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"URL"))),r.a.createElement("tbody",null,this.shortsList())),r.a.createElement("button",{onClick:this.getShortList},"Refresh"))}}]),t}(n.Component);var g=function(){return r.a.createElement("div",{align:"center"},r.a.createElement("h2",null,"About Reductor"),r.a.createElement("p",null,"Project developed by ",r.a.createElement("a",{href:"https://www.linkedin.com/in/murilomothsin/",target:"_blank",rel:"noopener noreferrer"},"Murilo Mothsin")," for learning porpuses!"),r.a.createElement("p",null,"Code available at ",r.a.createElement("a",{href:"https://github.com/murilomothsin/reductor-react/",target:"_blank",rel:"noopener noreferrer"},"Github")))};a(56);var k=function(){return r.a.createElement(c.a,{basename:"/reductor-react"},r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/hot/"},"Top 100")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/about/"},"About"))),r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{path:"/",exact:!0,component:f}),r.a.createElement(s.a,{path:"/about/",component:g}),r.a.createElement(s.a,{path:"/hot/",component:v}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.e8738ac2.chunk.js.map