(this.webpackJsonpKChang_Porfolio_V3=this.webpackJsonpKChang_Porfolio_V3||[]).push([[0],{115:function(A,g,E){"use strict";E.r(g);var C=E(0),B=E.n(C),I=E(47),Q=E.n(I),e=(E(58),E(21)),a=E(22),m=E(25),t=E(24),o=E(17),n=E(117),i=E(118),D=E(3),s=E.n(D),r=(E(59),E(48)),l=E.n(r),c=E(49),p=E.n(c),R=s.a.icon({iconUrl:l.a,shadowUrl:p.a,iconSize:[25,41],iconAnchor:[10,41],popupAnchor:[2,-40]}),h=[[-55,50,1],[-46,30,2],[-64,71,3],[-39,60,4],[-50,80,5]],w=function(A){Object(m.a)(E,A);var g=Object(t.a)(E);function E(A){var B;return Object(e.a)(this,E),(B=g.call(this,A)).mapRef=Object(C.createRef)(),B.centerMapView=B.centerMapView.bind(Object(o.a)(B)),B.centerMapView2=B.centerMapView2.bind(Object(o.a)(B)),B}return Object(a.a)(E,[{key:"componentDidMount",value:function(){var A=this.mapRef.current.leafletElement;console.log(this.mapRef);s.a.Marker.prototype.options.icon=R;var g=[A.unproject([0,225],1),A.unproject([225,0],1)],E=s.a.imageOverlay("./brain.jpg",g).addTo(A);A.fitBounds(E.getBounds())}},{key:"centerMapView",value:function(A){var g=this.mapRef.current.leafletElement;A&&(g.setView(A.latlng,4),this.props.handleClick2(A.latlng.alt))}},{key:"centerMapView2",value:function(A){var g=this.mapRef.current.leafletElement,E=h[A];g.setView(E,4)}},{key:"render",value:function(){var A=this;return B.a.createElement(n.a,{ref:this.mapRef,minZoom:4,maxZoom:4,zoom:4,crs:D.CRS.Simple,zoomControl:!1,bounceAtZoomLimits:!0,maxBoundsViscosity:.5,animate:!0,boundsOptions:{padding:[50,50]},style:{height:"80vh"}},h.map((function(g,E){return B.a.createElement(i.a,{position:g,key:E,className:E,icon:R,onClick:A.centerMapView})})))}}]),E}(C.Component);var u=function(A){return B.a.createElement("div",{className:"wrapper container-fluid m-0 p-0"},A.children)};var y=function(A){return B.a.createElement("div",Object.assign({className:"row".concat(A.fluid?"-fluid":"")},A))};var S=function(A){var g=A.size.split(" ").map((function(A){return"col-"+A})).join(" ");return B.a.createElement("div",Object.assign({className:g},A))};var f=function(A){return B.a.createElement("div",{className:"jumbotron jumbotron-fluid"},B.a.createElement("div",{className:"container myjumbo"},A.children,B.a.createElement("h3",{className:"typewriter"},"Hello there. Let me introduce myself.")))},d=(E(62),E(51)),M=E.n(d),N=E(26),J=E(52),K=E.n(J),Y=function(A){Object(m.a)(E,A);var g=Object(t.a)(E);function E(A){var C;return Object(e.a)(this,E),(C=g.call(this,A)).state={},C.handleClick=function(A){var g=N.find((function(g){return g.id===A}));C.setState({alert:C.getSkillNotes(g.skill,g.notes)}),C.map2Element.current.centerMapView2(A-1)},C.handleClick2=function(A){var g=N.find((function(g){return g.id===A}));C.setState({alert:C.getSkillNotes(g.skill,g.notes)})},C.getSkillNotes=function(A,g){return B.a.createElement(M.a,{hideOverlay:!0,title:A,info:!0,onConfirm:function(){return C.hideAlert()}},B.a.createElement("div",null,K()(g)))},C.hideAlert=function(){C.setState({alert:null})},C.map2Element=B.a.createRef(),C}return Object(a.a)(E,[{key:"render",value:function(){var A=this;return B.a.createElement(u,null,B.a.createElement(f,null),B.a.createElement(y,null,B.a.createElement(S,{size:"6"},B.a.createElement("div",{style:{backgroundColor:"#000"}},B.a.createElement(w,{ref:this.map2Element,handleClick2:this.handleClick2.bind(this)}))),B.a.createElement(S,{size:"6",className:"myjumbo text-wrap"},B.a.createElement("h3",{className:"link"},'self.name = "Kasey Chang"'),B.a.createElement("br",null),B.a.createElement("h3",null,'self.legal_name = "Kuosheng Chang"'),B.a.createElement("br",null),B.a.createElement("h3",null,'self.status = "multi-phasic',B.a.createElement("br",null),' computer expert"'),B.a.createElement("br",null),B.a.createElement("h3",null,"self.skills = [",B.a.createElement("br",null)),N.map((function(g){return B.a.createElement("div",{key:g.id},A.state.alert,B.a.createElement("h3",null,B.a.createElement("a",{className:"link",href:"#",key:g.id,onClick:function(){return A.handleClick(g.id)}}," ",g.skill," ",B.a.createElement("br",null))))})),B.a.createElement("h3",null,"... ]"),B.a.createElement("br",null))))}}]),E}(C.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));E(112),E(114);Q.a.render(B.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(A){A.unregister()}))},26:function(A){A.exports=JSON.parse("[{\"id\":1,\"skill\":\"'Fullstack Developer',\",\"notes\":\"<p>I graduated from fullstack (full-time) coding bootcamp at University of California Berkeley Extension.</p><p>I have coded <a href='https://github.com/kschang77/kschang77.github.io'>static websites</a> with just <a href='https://kschang77.github.io/portfoliov2/'>notepad.exe and Paint.net.</a></p><p>I have also coded dynamic websites with CSS, JS, and jQuery, Bootstrap 4, UIKit, and more. </p><P>I have coded backend <a href='https://github.com/kschang77/klingon-learner'>RESTful websites with Node.js and Express.js with Sequelize/MySQL</a> and <a href='https://github.com/kschang77/geo-hunt'>Mongoose/MongoDB as backends</a>.</P><p>... <a href='https://kschang77.github.io/doctorsgame/'>plus React.js</a> and <a href='https://github.com/kschang77/portfoliov3'>everything else</a> in between.</p>\"},{\"id\":2,\"skill\":\"'IT Support Generalist',\",\"notes\":\"<p>I have a specialization certificate in <a href='https://coursera.org/share/9984b63b2d085b55c6a860a1af3beddd'>IT Support from Google</a></p><p>I have a specialization certificate in <a href='https://www.coursera.org/account/accomplishments/professional-cert/NWFAAQPTAHCJ'>IT Automation with Python from Google</a></p><p>I have a specialization certificate in <a href='https://www.coursera.org/account/accomplishments/specialization/V6TXWG7PCTKA'>IT Fundamentals for Cybersecurity from IBM</a></p><p>I know how to build PCs and networks, and have done so for years.</p>\"},{\"id\":3,\"skill\":\"'Data/Base Engineer',\",\"notes\":\"<p>I have a <a href='https://www.coursera.org/account/accomplishments/professional-cert/V53AL32UTWAZ'>specialization certificate in Data Science</a> from IBM.</p><p>I have a <a href='https://coursera.org/share/df41565fca43861117b33ba5eccd838f'>specialization certificate in Applied AI</a> from IBM</p><p>I have a <a href='https://www.coursera.org/account/accomplishments/specialization/3ML9NP54B24N'>specialization certficate in Modern Big Data Analysis with SQL</a> from Cloudera</p><p>... and a few other things</p>\"},{\"id\":4,\"skill\":\"'Other Skills',\",\"notes\":\"<p>I was the editor of <a href='https://gamefaqs.gamespot.com/community/kschang77/contributions/faqs'>over 60 game FAQs/guides</a> read by millions of gamers. <a href='https://gamefaqs.gamespot.com/community/kschang77'>My GameFAQs user level is 36 'Sage'</a> -- highest non-staff level possible</p><p>I was a contributor (as Kasey K.S. Chang) to the official <a href='https://books.google.com/books?id=cbYf2l7gczUC&pg=PT5&lpg=PT5&dq=star+trek+encyclopedia+Kasey+K+S+Chang&source=bl&ots=lGtOB9m0Ut&sig=ACfU3U3xW_QFCsZHvlbFyxHrlCTIU3FTug&hl=en&sa=X&ved=2ahUKEwieyITCmdHoAhUCNKwKHTZpBhQQ6AEwAHoECAwQKQ#v=onepage&q=star%20trek%20encyclopedia%20Kasey%20K%20S%20Chang&f=false'>Star Trek Encyclopedia</a></p><p>I helped bring down at least two Ponzi schemes with my Google-fu and online blog</p><p>I speak English, Mandarin, Cantonese, and some Spanish</p><p>I help people daily online with translation, writing, and other question on reddit as /u/kschang and on Stack Overflow / Stack Exchange as 'Kasey Chang'</p>\"},{\"id\":5,\"skill\":\"contact_me()\",\"notes\":\"<ul><li><a href='#'><i class='fas fa-phone-square-alt'></i><span class='text'> 1-415-413-8249</span></a></li><li><a href='#'><i class='fas fa-envelope-square'></i><span class='text'> guyreviews77-hired@yahoo.com</span></a></li><li><a href='https://www.linkedin.com/in/kasey-chang'><i class='fab fa-linkedin'></i><span class='text'> www.linkedin.com/in/kasey-chang</span></a></li><li><a href='https://github.com/kschang77'> <i class='fab fa-github-square'></i> github.com/kschang77</span></a></li><li><a href='https://github.com/kschang77/portfoliov2/blob/master/Resume-Kasey-Chang.pdf'> <i class='fas fa-file-pdf'></i> My resume (PDF)</span></a></li></ul>\"}]")},48:function(A,g){A.exports="data:image/png;base64,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"},49:function(A,g){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAJYCAYAAACadoJwAAAgAElEQVR4Xu3XMQ0AAAzDsJU/6bHI5RGoZO3JzhEgQIAAAQIECBAgQCASWLRjhgABAgQIECBAgAABAidAPAEBAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQAH/z5sAAAWaSURBVIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECAgQPwAAQIECBAgQIAAAQKZgADJqA0RIECAAAECBAgQICBA/AABAgQIECBAgAABApmAAMmoDREgQIAAAQIECBAgIED8AAECBAgQIECAAAECmYAAyagNESBAgAABAgQIECDwym8CWWFsf00AAAAASUVORK5CYII="},53:function(A,g,E){A.exports=E(115)},58:function(A,g,E){},62:function(A,g,E){},93:function(A,g){},95:function(A,g){}},[[53,1,2]]]);
//# sourceMappingURL=main.13408f99.chunk.js.map