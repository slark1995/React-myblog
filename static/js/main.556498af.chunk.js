(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{119:function(e,a,t){e.exports=t(284)},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){},127:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},282:function(e,a,t){},284:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=(t(124),t(8)),s=t(9),o=t(11),m=t(10),u=t(12),p=(t(125),t(93)),d=t.n(p),f=t(94),b=t.n(f),E=t(95),h=t.n(E),g=t(96),j=t.n(g),v=(t(126),t(114)),O=t(44),y=t(97),N=t.n(y),k=(t(127),t(322)),w=t(3),S=t(316),P=t(29),x=t(329),C=t(318),T=t(320),M=t(323),A=t(45),D=t(321),L=t(98),B=t.n(L),J=t(100),H=t.n(J),I=t(101),R=t.n(I),W=t(330),_=t(324),G=t(325),q=t(317),F=t(19);function Q(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function U(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Q(t,!0).forEach((function(a){Object(O.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var Y=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(K,{open:this.props.open})}}]),a}(r.a.Component),z=Object(S.a)((function(e){return{root:{display:"flex"},appBar:{backgroundColor:q.a[700],transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},title:{flexGrow:1,display:"flex",margin:5},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:U({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function K(e){var a=z(),t=Object(P.a)(),n=r.a.useState(e.open),l=Object(v.a)(n,2),i=l[0],c=l[1];return r.a.createElement("div",{className:a.root},r.a.createElement(C.a,{position:"fixed",className:Object(w.a)(a.appBar,Object(O.a)({},a.appBarShift,i))},r.a.createElement(T.a,null,r.a.createElement(D.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(w.a)(a.menuButton,i&&a.hide)},r.a.createElement(B.a,null)),r.a.createElement("i",{className:"fa fa-paper-plane fa-lg","aria-hidden":"true"}),r.a.createElement(F.b,{to:"/",className:"title"},r.a.createElement(A.a,{variant:"h6",noWrap:!0,className:a.title},"Taijie's Personal Page")))),r.a.createElement(x.a,{className:a.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(D.a,{onClick:function(){c(!1)}},"ltr"===t.direction?r.a.createElement(H.a,null):r.a.createElement(R.a,null))),r.a.createElement("div",{className:"info"},r.a.createElement("img",{src:N.a,className:"sidePortrait",alt:"portrait"}),r.a.createElement("h2",null,"TJ.Yang"),r.a.createElement("p",null,"Web Dev/shutterbug"),r.a.createElement("a",{href:"https://github.com/slark1995",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}," Github")))),r.a.createElement(k.a,null),r.a.createElement(M.a,null,r.a.createElement(F.b,{to:"/",className:"sideTitle"},r.a.createElement(W.a,{button:!0,key:"Home page"},r.a.createElement(_.a,null,r.a.createElement("i",{className:"fa fa-home fa-lg","aria-hidden":"true"})),r.a.createElement(G.a,{primary:"Home page"})))),r.a.createElement(k.a,null),r.a.createElement(M.a,null,r.a.createElement(W.a,{button:!0,key:"All posts"},r.a.createElement(_.a,null,r.a.createElement("i",{className:"fa fa-file-code-o fa-lg","aria-hidden":"true"})),r.a.createElement(G.a,{primary:"All posts"})),r.a.createElement(W.a,{button:!0,key:"Web dev"},r.a.createElement(_.a,null,r.a.createElement("i",{className:"fa fa-code fa-lg","aria-hidden":"true"})),r.a.createElement(G.a,{primary:"Web dev"})),r.a.createElement(W.a,{button:!0,key:"Algorighm"},r.a.createElement(_.a,null,r.a.createElement("i",{className:"fa fa-hashtag fa-lg","aria-hidden":"true"})),r.a.createElement(G.a,{primary:"Algorighm"})),r.a.createElement(W.a,{button:!0,key:"AI related"},r.a.createElement(_.a,null,r.a.createElement("i",{className:"fa fa-lightbulb-o fa-lg","aria-hidden":"true"})),r.a.createElement(G.a,{primary:"AI related"}))),r.a.createElement(k.a,null),r.a.createElement(M.a,null,r.a.createElement(W.a,{button:!0,key:"Photos"},r.a.createElement(_.a,null,r.a.createElement("i",{className:"fa fa-camera-retro fa-lg"})),r.a.createElement(G.a,{primary:"Photos"}))),r.a.createElement(k.a,null),r.a.createElement(M.a,null,r.a.createElement(W.a,{button:!0,key:"Demos"},r.a.createElement(_.a,null,r.a.createElement("i",{className:"fa fa-cubes fa-lg","aria-hidden":"true"})),r.a.createElement(G.a,{primary:"Demos"})))),r.a.createElement("main",{className:Object(w.a)(a.content,Object(O.a)({},a.contentShift,i))}))}var X=Y,$=t(115),V=t(326),Z=t(327),ee=t(328),ae=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"welcome"},r.a.createElement(X,{open:!1}),r.a.createElement("div",{className:"WelcomeBackground"},r.a.createElement("img",{src:d.a,className:"portrait",alt:"portrait"}),r.a.createElement("h2",null,"Taijie Yang"),r.a.createElement("p",null,"Web Developper/Amateur Photographer"),r.a.createElement("div",{className:"slogan"},r.a.createElement("i",{className:"fa fa-quote-left"}),r.a.createElement("span",null," \u8981\u52aa\u529b\u6210\u4e3a\u4f18\u79c0\u7684\u4eba "),r.a.createElement("i",{className:"fa fa-quote-right"})),r.a.createElement(te,null)),r.a.createElement("div",{className:"Navigation"},r.a.createElement(F.b,{to:"/posts",className:"link"},r.a.createElement(ne,{CardTitle:"POSTS",img:b.a})),r.a.createElement(ne,{CardTitle:"PHOTOS",img:h.a}),r.a.createElement(ne,{CardTitle:"DEMOS",img:j.a})))}}]),a}(r.a.Component),te=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(F.b,{to:"/about",className:"link"},r.a.createElement($.a,{className:"AboutMeButton",elevation:2,square:!0},"About Me"))}}]),a}(r.a.Component),ne=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.CardTitle,a=this.props.img;return r.a.createElement(V.a,{className:"Card",square:!0},r.a.createElement(Z.a,null,r.a.createElement(ee.a,{className:"CardTitle"},r.a.createElement("h2",null,e)),r.a.createElement("img",{src:a,className:"cardimg",alt:""})))}}]),a}(r.a.Component),re=ae,le=t(30),ie=(t(133),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"aboutMe"},r.a.createElement(X,{open:!0}),r.a.createElement("div",{className:"aboutContainer"},r.a.createElement("h2",null,"About Me"),r.a.createElement("ul",{className:"about-list"},r.a.createElement("li",null,"Name: Taijie Yang"),r.a.createElement("li",null,"Education: BSc, Specialization in Computer Science",r.a.createElement("br",null),"\u2003\u2003\u2003\u2003\u2003University of Alberta | Edmonton",r.a.createElement("br",null),"\u2003\u2003\u2003\u2003\u2003Sep 2015 - Aug 2019"),r.a.createElement("li",null,"Contact:\xa0",r.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),"\xa0",r.a.createElement("a",{href:"mailto:taijie@ualberta.ca",target:"_blank",rel:"noopener noreferrer"},"taijie@ualberta.ca"),"\xa0|\xa0",r.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"})," 780-885-2568\xa0|\xa0",r.a.createElement("span",{className:"wechat"},r.a.createElement("i",{className:"fa fa-weixin","aria-hidden":"true"})," 610158299 ")),r.a.createElement("li",null,"Hobby: photographing and video recording, so i am Proficient in PS and Pr")),r.a.createElement("h2",null,"Professional skills"),r.a.createElement("ul",{className:"about-list"},r.a.createElement("li",null,"Programming Languages: Python, HTML/CSS, Javascript, C, Java, SQL, Matlab, Understanding assembly language"),r.a.createElement("li",null,"Summary: ",r.a.createElement("br",null),"- 2 Years of experience in software development, including designing and implementing web/mobile applications using: ReactJS, Django REST Framework, MySQL, Java, REST API",r.a.createElement("br",null),"- Strong skills in front-end web development using HTML, CSS, JavaScript, AJAX as well as modern JS frameworks",r.a.createElement("br",null),"- Skillful in back-end development using Django REST Framework as well as sever-less technology such as Firebase",r.a.createElement("br",null),"- Solid backgrounds in Git based source control tools such as Github, Bitbucket",r.a.createElement("br",null),"- Experienced in Database tools, such as Django ORM as well as MySQL, NoSQL",r.a.createElement("br",null),"- Knowledge in common network protocols such as HTTP, TCP/IP, Restful API design",r.a.createElement("br",null),"- Experienced in Android mobile application development using Java",r.a.createElement("br",null),"- Deep understanding and experienced in agile methodology and scrum"),r.a.createElement("li",null,"Others:",r.a.createElement("br",null),"- Thorough understanding in machine learning concepts, such as reinforcement learning and deep learning, and skillful with Python tools \u2013 Tensorflow, Numpy, and Matplotlib",r.a.createElement("br",null),"- Advanced skills in Windows, Mac and Linux operating systems",r.a.createElement("br",null),"- Hardworking, eager to learn new knowledge, passionate about programming"))))}}]),a}(r.a.Component)),ce=(t(65),t(134),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.title,a=this.props.excerpt,t=this.props.uuid,n={pathname:"/posts/".concat(t,"/")};return r.a.createElement("div",{className:"itemwrapper"},r.a.createElement("h2",{className:"postTitle"},r.a.createElement(F.b,{className:"link",to:n},e)),r.a.createElement("p",{className:"excerpt"},a.length>300?r.a.createElement("span",null,a.slice(0,300)+" ... ",r.a.createElement("span",null,r.a.createElement(F.b,{className:"readMore",to:n},"Read More"))):r.a.createElement("span",null,a+" "," \xa0",r.a.createElement("span",null,r.a.createElement(F.b,{className:"readMore",to:n},"Read More")))))}}]),a}(r.a.Component)),se=function(){return fetch("https://tj-blog-1eff5.firebaseio.com/posts.json").then((function(e){return e.json()})).catch((function(e){return console.log(e.message)}))},oe=function(e){return fetch("https://tj-blog-1eff5.firebaseio.com/posts/".concat(e,".json")).then((function(e){return e.json()})).catch((function(e){return console.log(e.message)}))},me=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).getPosts=function(){se().then((function(e){var a=[];for(var n in e)a.push(n);for(var r=0;r<a.length;r++)Object.values(e)[r].uuid=a[r];var l=Object.values(e);t.setState({posts:l})}))},t.state={posts:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){var e=this.state.posts.map((function(e){return r.a.createElement(ce,{key:e.uuid,uuid:e.uuid,id:e.id,title:e.title,excerpt:e.excerpt})}));return r.a.createElement("div",{className:"postlist"},e||null)}}]),a}(r.a.Component),ue=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"posts"},r.a.createElement(X,{open:!0}),r.a.createElement(me,null))}}]),a}(r.a.Component),pe=(t(135),t(102)),de=t.n(pe),fe=t(103),be=t.n(fe),Ee=t(104),he=t(105),ge=t.n(he),je=t(106),ve=t.n(je),Oe=t(107),ye=t.n(Oe),Ne=t(108),ke=t.n(Ne),we=t(109),Se=t.n(we),Pe=t(110),xe=t.n(Pe),Ce=t(111),Te=t.n(Ce),Me=t(112),Ae=t.n(Me),De=t(113),Le=new de.a({html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!0,quotes:"\u201c\u201d\u2018\u2019"});Le.use(be.a).use(Ee.a,{level:[1,2,3]}).use(ge.a).use(ve.a).use(ye.a,{autofill:!0}).use(ke.a).use(Se.a).use(xe.a).use(Te.a).use(Ae.a,{includeLevel:[1,2,3]}),Le.renderer.rules.emoji=function(e,a){return De.a.parse(e[a].content)};var Be=Le,Je=(t(282),t(283),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).getPosts=function(){var e=t.props.match.params.postId;oe(e).then((function(e){t.setState({post:e})}))},t.state={post:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){if(void 0!==this.state.post){var e=this.state.post.excerpt,a=this.state.post.content+"",t=this.state.post.title,n={__html:Be.render(a)};return r.a.createElement("div",{className:"postRead"},r.a.createElement(X,{open:!0}),r.a.createElement("div",{className:"readPage"},r.a.createElement("h1",{className:"title_read"}," ",t," "),r.a.createElement("div",{className:"excerpt_read"}," ",e," "),r.a.createElement("div",{className:"markdown-body"},r.a.createElement("div",{className:"text",dangerouslySetInnerHTML:n}))))}}}]),a}(r.a.Component)),He=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={developers:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(F.a,null,r.a.createElement("div",null,r.a.createElement(le.a,{exact:!0,path:"/",component:re}),r.a.createElement(le.a,{exact:!0,path:"/about",component:ie}),r.a.createElement(le.a,{exact:!0,path:"/posts",component:ue}),r.a.createElement(le.a,{exact:!0,path:"/posts/:postId/",component:Je}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,a,t){},84:function(e,a,t){var n={"./bmp":85,"./bmp.js":85,"./gif":86,"./gif.js":86,"./jpg":87,"./jpg.js":87,"./png":88,"./png.js":88,"./psd":89,"./psd.js":89,"./svg":90,"./svg.js":90,"./tiff":91,"./tiff.js":91,"./webp":92,"./webp.js":92};function r(e){var a=l(e);return t(a)}function l(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=84},93:function(e,a,t){e.exports=t.p+"static/media/portrait.3398e624.JPG"},94:function(e,a,t){e.exports=t.p+"static/media/postcard.c0d8bde7.jpg"},95:function(e,a,t){e.exports=t.p+"static/media/photocard.e2c24fb0.png"},96:function(e,a,t){e.exports=t.p+"static/media/democard.6238802c.png"},97:function(e,a,t){e.exports=t.p+"static/media/sidePortrait.d75ee55c.jpg"}},[[119,1,2]]]);
//# sourceMappingURL=main.556498af.chunk.js.map