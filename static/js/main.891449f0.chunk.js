(this.webpackJsonphmdrohnode=this.webpackJsonphmdrohnode||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/hmd.e1d40030.svg"},14:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},26:function(e,t,a){e.exports=a.p+"static/media/line.b65c0a0c.svg"},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(8),c=a.n(i),r=(a(19),a(3)),o=a(4),s=a(6),u=a(5),m=a(9),d=a(11),h=a.n(d),v=(a(21),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={time:h()().clone().toLocaleString()},n.displayTime=n.displayTime.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"displayTime",value:function(){this.setState({time:h()().clone().toLocaleString()})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){e.displayTime()}),1e3)}},{key:"render",value:function(){return l.a.createElement("div",{className:"momentTimer"},l.a.createElement("p",null,this.state.time))}}]),a}(l.a.Component)),p=a(7);var z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={duration:e.props.duration},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(e){var t=Object(i.findDOMNode)(this);p.b.fromTo(t,this.state.duration,{x:100,rotationY:180,opacity:0},{x:0,rotationY:0,opacity:1,ease:p.a.easeOut.config(.22,1),onComplete:e})}},{key:"componentWillLeave",value:function(e){var t=Object(i.findDOMNode)(this);p.b.fromTo(t,0,{rotationY:0,opacity:0},{rotationY:-180,opacity:0,onComplete:e})}},{key:"render",value:function(){return l.a.createElement("div",null,this.props.children)}}]),a}(l.a.Component),E=a(12),b=a.n(E);var f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(e){var t=Object(i.findDOMNode)(this);p.b.fromTo(t,.6,{y:600,rotationY:200,opacity:0},{y:0,rotationY:0,opacity:1,ease:p.a.easeOut.config(.22,1),onComplete:e})}},{key:"componentWillLeave",value:function(e){var t=Object(i.findDOMNode)(this);p.b.fromTo(t,0,{rotationY:0,opacity:0},{rotationY:-180,opacity:0,onComplete:e})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"}))}}]),a}(l.a.Component);a(26);var j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={duration:e.props.duration,tech:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(e){this.setState({tech:this.props.tech});var t=Object(i.findDOMNode)(this);p.b.fromTo(t,this.state.duration,{y:100,rotationY:20,opacity:0},{y:0,rotationY:0,opacity:1,ease:p.a.easeOut.config(.22,1),onComplete:e})}},{key:"componentWillLeave",value:function(e){var t=Object(i.findDOMNode)(this);p.b.fromTo(t,0,{rotationY:0,opacity:0},{rotationY:-180,opacity:0,onComplete:e})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("a",{href:this.props.link,target:"_blank"},l.a.createElement("div",{className:"project-content"},l.a.createElement("div",{className:"project-img"},l.a.createElement("img",{src:b.a,alt:"project"})),l.a.createElement("div",{className:"project-title"},this.props.children),l.a.createElement("div",{classname:"project-tech"},this.state.tech.map((function(e){return l.a.createElement("div",{className:"skills-small-div"},e)}))))))}}]),a}(l.a.Component),k=(a(27),a(10)),g=a(2),O=(a(28),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={showPic:!0,picTouch:!0,resetPuzzle:{puzzle1:{"grid-column":"1/3","grid-row":"1"},puzzle2:{"grid-column":"2/3","grid-row":"1"},puzzle3:{"grid-column":"3/3","grid-row":"1"},puzzle4:{"grid-column":"1/3","grid-row":"2"},puzzle5:{"grid-column":"2/3","grid-row":"2"},puzzle6:{"grid-column":"3/3","grid-row":"2"},puzzle7:{"grid-column":"1/3","grid-row":"3"},puzzle8:{"grid-column":"2/3","grid-row":"3"}},tempPuzzle:{puzzle1:{"grid-column":"1/3","grid-row":"1"},puzzle2:{"grid-column":"2/3","grid-row":"1"},puzzle3:{"grid-column":"3/3","grid-row":"1"},puzzle4:{"grid-column":"1/3","grid-row":"2"},puzzle5:{"grid-column":"2/3","grid-row":"2"},puzzle6:{"grid-column":"3/3","grid-row":"2"},puzzle7:{"grid-column":"1/3","grid-row":"3"},puzzle8:{"grid-column":"2/3","grid-row":"3"}},showPuzzle:{puzzle1:{"grid-column":"1/3","grid-row":"1"},puzzle2:{"grid-column":"2/3","grid-row":"1"},puzzle3:{"grid-column":"3/3","grid-row":"1"},puzzle4:{"grid-column":"1/3","grid-row":"2"},puzzle5:{"grid-column":"2/3","grid-row":"2"},puzzle6:{"grid-column":"3/3","grid-row":"2"},puzzle7:{"grid-column":"1/3","grid-row":"3"},puzzle8:{"grid-column":"2/3","grid-row":"3"}}},n.isClickable=n.isClickable.bind(Object(m.a)(n)),n.getLocations=n.getLocations.bind(Object(m.a)(n)),n.randomize=n.randomize.bind(Object(m.a)(n)),n.showGame=n.showGame.bind(Object(m.a)(n)),n.saveStates=n.saveStates.bind(Object(m.a)(n)),n.showOriginal=n.showOriginal.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"getLocations",value:function(e){for(var t={1:[!1,!1,!1],2:[!1,!1,!1],3:[!1,!1,!1]},a=1;a<9;a++){var n=this.state.showPuzzle["puzzle"+a]["grid-column"];n=n.split("/")[0],t[this.state.showPuzzle["puzzle"+a]["grid-row"]][n-1]=!0}e(t)}},{key:"isClickable",value:function(e){var t=this,a=this.state.showPuzzle["puzzle"+e]["grid-column"];a=Number(a.split("/")[0]);var n=Number(this.state.showPuzzle["puzzle"+e]["grid-row"]);this.getLocations((function(l){if(l[n-1]&&!l[n-1][a-1])return t.setState((function(t){return Object(g.a)(Object(g.a)({},t),{},{showPuzzle:Object(g.a)(Object(g.a)({},t.showPuzzle),{},Object(k.a)({},"puzzle"+e,Object(g.a)(Object(g.a)({},t.showPuzzle["puzzle"+e]),{},{"grid-row":String(n-1)})))})})),t.saveStates(),!0;if(l[n+1]&&!l[n+1][a-1])return t.setState((function(t){return Object(g.a)(Object(g.a)({},t),{},{showPuzzle:Object(g.a)(Object(g.a)({},t.showPuzzle),{},Object(k.a)({},"puzzle"+e,Object(g.a)(Object(g.a)({},t.showPuzzle["puzzle"+e]),{},{"grid-row":String(n+1)})))})})),t.saveStates(),!0;return a<3&&!l[n][a]?(t.setState((function(t){return Object(g.a)(Object(g.a)({},t),{},{showPuzzle:Object(g.a)(Object(g.a)({},t.showPuzzle),{},Object(k.a)({},"puzzle"+e,Object(g.a)(Object(g.a)({},t.showPuzzle["puzzle"+e]),{},{"grid-column":String(Number(a+1)+"/3")})))})})),t.saveStates(),!0):a>1&&!l[n][a-2]?(t.setState((function(t){return Object(g.a)(Object(g.a)({},t),{},{showPuzzle:Object(g.a)(Object(g.a)({},t.showPuzzle),{},Object(k.a)({},"puzzle"+e,Object(g.a)(Object(g.a)({},t.showPuzzle["puzzle"+e]),{},{"grid-column":String(Number(a-1)+"/3")})))})})),t.saveStates(),!0):(t.saveStates(),!1)}))}},{key:"saveStates",value:function(){this.setState((function(e){return Object(g.a)(Object(g.a)({},e),{},{picTouch:!1,showPic:!0,tempPuzzle:Object(g.a)({},e.showPuzzle)})}))}},{key:"showGame",value:function(){this.setState((function(e){return Object(g.a)(Object(g.a)({},e),{},{showPic:!0,showPuzzle:Object(g.a)({},e.tempPuzzle)})}))}},{key:"showOriginal",value:function(){this.setState((function(e){return Object(g.a)(Object(g.a)({},e),{},{showPic:!1,tempPuzzle:Object(g.a)({},e.showPuzzle),showPuzzle:Object(g.a)({},e.resetPuzzle)})}))}},{key:"randomize",value:function(){for(var e=this,t=1;t<100;t++)setTimeout((function(){e.isClickable(Math.floor(8*Math.random())+1)}),.1),setTimeout((function(){e.isClickable(Math.floor(8*Math.random())+1)}),.1),setTimeout((function(){e.isClickable(Math.floor(8*Math.random())+1)}),.1);this.setState((function(e){return Object(g.a)(Object(g.a)({},e),{},{picTouch:!1,showPic:!0})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"PuzzleRealMain"},l.a.createElement("div",{className:"PuzzleMainContainer"},l.a.createElement("ul",{className:"PuzzleContainer"},l.a.createElement("li",{className:"Puzzle Puzzle1",style:this.state.showPuzzle.puzzle1,onClick:function(){return e.isClickable(1)}},"1"),l.a.createElement("li",{className:"Puzzle Puzzle2",style:this.state.showPuzzle.puzzle2,onClick:function(){return e.isClickable(2)}},"2"),l.a.createElement("li",{className:"Puzzle Puzzle3",style:this.state.showPuzzle.puzzle3,onClick:function(){return e.isClickable(3)}},"3"),l.a.createElement("li",{className:"Puzzle Puzzle4",style:this.state.showPuzzle.puzzle4,onClick:function(){return e.isClickable(4)}},"4"),l.a.createElement("li",{className:"Puzzle Puzzle5",style:this.state.showPuzzle.puzzle5,onClick:function(){return e.isClickable(5)}},"5"),l.a.createElement("li",{className:"Puzzle Puzzle6",style:this.state.showPuzzle.puzzle6,onClick:function(){return e.isClickable(6)}},"6"),l.a.createElement("li",{className:"Puzzle Puzzle7",style:this.state.showPuzzle.puzzle7,onClick:function(){return e.isClickable(7)}},"7"),l.a.createElement("li",{className:"Puzzle Puzzle8",style:this.state.showPuzzle.puzzle8,onClick:function(){return e.isClickable(8)}},"8"))),l.a.createElement("button",{onClick:this.randomize},"Randomize"),l.a.createElement("button",{onClick:this.showGame,style:{display:this.state.showPic?"none":"block"}},"Continue Game..."),l.a.createElement("button",{onClick:this.showOriginal,style:{display:this.state.showPic&&!this.state.picTouch?"block":"none"}},"Show Ordered Picture"),l.a.createElement("div",{className:"puzzleText"},"(Aug 2019): Puzzle Game Made in React.js"))}}]),a}(l.a.Component)),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={tech1:["HTML","CSS","Bootstrap","Node.js","React.js","RESTful API","JSON","Snapchat Video"],tech2:["HTML","CSS","PHP","MySQL","Magento","Illustrator","JavaScript"],tech3:["HTML","CSS","JavaScript","PHP","MySQL","jQuery","PHP gd library"],tech4:["HTML","CSS","Parallax","Materialize CSS","JavaScript","Google Forms"],tech5:["HTML","CSS","Bootstrap","Node.js","Express.js","RESTful API","Handlebars.js"],tech6:["HTML","CSS","Bootstrap","Node.js","React.js","RESTful API","JSON"],tech7:["HTML","CSS","JavaScript","Bootstrap","Node.js","jQuery","MySQL"],tech8:["HTML","CSS","JavaScript","Bootstrap","Node.js","jQuery","FontAwesome"],tech9:["HTML","CSS","JavaScript","Bootstrap","Node.js","jQuery","Express","Sequelize.js","Moment.js"]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"div-pg1"},l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement("div",{className:"full-name"},l.a.createElement("h2",null,l.a.createElement(z,{duration:"0.6"},"Hamed Rohani"))),l.a.createElement("div",{className:"line-tg"},l.a.createElement(z,{duration:"0.3"},l.a.createElement("hr",{color:"blue"}))),l.a.createElement("div",{className:"Occupation-title"},l.a.createElement(z,{duration:"0.9"},"Full Stack Software Engineer")),l.a.createElement("div",{class:"lnk-div"},l.a.createElement("a",{href:"https://linkedin.com/in/hmdroh",target:"_blank"},l.a.createElement(z,{duration:"1"},"Linkedin"))),l.a.createElement("div",{class:"lnk-div"},l.a.createElement("a",{href:"https://github.com/hmdroh",target:"_blank"},l.a.createElement(z,{duration:"1.2"},"Github Link"))),l.a.createElement("div",null," ",l.a.createElement("a",{href:"./Hamed-Resume-20-02.pdf",target:"_blank"},l.a.createElement("div",{class:"buttonCV"},l.a.createElement("span",null,"Updated Resume"),l.a.createElement("svg",null,l.a.createElement("polyline",{class:"o1",points:"0 0, 100 0, 100 35, 0 35, 0 0"}),l.a.createElement("polyline",{class:"o2",points:"0 0, 100 0, 100 35, 0 35, 0 0"}))))),l.a.createElement(v,null))),l.a.createElement("div",{style:{backgroundColor:"black",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement(O,null)),l.a.createElement("div",{className:"new-section-div"},l.a.createElement("div",{className:"floating-section-div"}),l.a.createElement("div",{className:"section-content-div"},l.a.createElement("div",{className:"section-title"},l.a.createElement("i",{class:"fas fa-graduation-cap"})," Technical Skills"),l.a.createElement(z,{duration:"0.72"},l.a.createElement("div",{className:"skills-div"},"HTML5")),l.a.createElement(z,{duration:"0.74"},l.a.createElement("div",{className:"skills-div"},"CSS3")),l.a.createElement(z,{duration:"2.76"},l.a.createElement("div",{className:"skills-div"},"JavaScript")),l.a.createElement(z,{duration:"0.78"},l.a.createElement("div",{className:"skills-div"},"ES6")),l.a.createElement(z,{duration:"1.8"},l.a.createElement("div",{className:"skills-div"},"Node.js")),l.a.createElement(z,{duration:"2.82"},l.a.createElement("div",{className:"skills-div"},"React.js")),l.a.createElement(z,{duration:"0.84"},l.a.createElement("div",{className:"skills-div"},"Redux.js")),l.a.createElement(z,{duration:"0.84"},l.a.createElement("div",{className:"skills-div"},"Python")),l.a.createElement(z,{duration:"0.86"},l.a.createElement("div",{className:"skills-div"},"jQUery")),l.a.createElement(z,{duration:"0.88"},l.a.createElement("div",{className:"skills-div"},"Bootstrap")),l.a.createElement(z,{duration:"0.90"},l.a.createElement("div",{className:"skills-div"},"SASS")),l.a.createElement(z,{duration:"1.92"},l.a.createElement("div",{className:"skills-div"},"D3")),l.a.createElement(z,{duration:"0.94"},l.a.createElement("div",{className:"skills-div"},"JSON APIs and Ajax")),l.a.createElement(z,{duration:"1.04"},l.a.createElement("div",{className:"skills-div"},"RESTful API")),l.a.createElement(z,{duration:"1.14"},l.a.createElement("div",{className:"skills-div"},"GraphQL")),l.a.createElement(z,{duration:"0.84"},l.a.createElement("div",{className:"skills-div"},"MySQL")),l.a.createElement(z,{duration:"0.84"},l.a.createElement("div",{className:"skills-div"},"SQL")),l.a.createElement(z,{duration:"0.86"},l.a.createElement("div",{className:"skills-div"},"MongoDB")),l.a.createElement(z,{duration:"0.88"},l.a.createElement("div",{className:"skills-div"},"Mongoose.js")),l.a.createElement(z,{duration:"0.90"},l.a.createElement("div",{className:"skills-div"},"Express.js")),l.a.createElement(z,{duration:"1.92"},l.a.createElement("div",{className:"skills-div"},"Sequelize.js")),l.a.createElement(z,{duration:"0.96"},l.a.createElement("div",{className:"skills-div"},"Git/Github Version Controlling")),l.a.createElement(z,{duration:"0.98"},l.a.createElement("div",{className:"skills-div"},"UX Design")),l.a.createElement(z,{duration:"1.12"},l.a.createElement("div",{className:"skills-div"},"JSX")),l.a.createElement(z,{duration:"1.14"},l.a.createElement("div",{className:"skills-div"},"Photoshop")),l.a.createElement(z,{duration:"1.14"},l.a.createElement("div",{className:"skills-div"},"Illustrator")),l.a.createElement(z,{duration:"1.14"},l.a.createElement("div",{className:"skills-div"},"MERN Stack")),l.a.createElement(z,{duration:"1.14"},l.a.createElement("div",{className:"skills-div"},"Quality Assurance and Testing with Chai")),l.a.createElement(z,{duration:"1.00"},l.a.createElement("div",{className:"skills-div"},"Helmet.js")),l.a.createElement(z,{duration:"1.02"},l.a.createElement("div",{className:"skills-div"},"AWS EC2 Management")),l.a.createElement(z,{duration:"1.06"},l.a.createElement("div",{className:"skills-div"},"Linux Shell and SSH Commands")),l.a.createElement(z,{duration:"1.08"},l.a.createElement("div",{className:"skills-div"},"Microsoft Office")),l.a.createElement(z,{duration:"0.86"},l.a.createElement("div",{className:"skills-div"},"A+ Hardware")),l.a.createElement(z,{duration:"0.88"},l.a.createElement("div",{className:"skills-div"},"Project Management Skills")),l.a.createElement(z,{duration:"1.14"},l.a.createElement("div",{className:"skills-div"},"Algorithms")),l.a.createElement(z,{duration:"1.14"},l.a.createElement("div",{className:"skills-div"},"Responsive Design")))),l.a.createElement("div",{className:"new-section-div"},l.a.createElement("div",{className:"floating-section-div"}),l.a.createElement("div",{className:"section-content-div"},l.a.createElement("div",{className:"section-title"},l.a.createElement("i",{class:"fas fa-project-diagram"})," Projects"),l.a.createElement(j,{duration:"2.4",tech:this.state.tech2,link:"http://farsales.com"},"Farsales.com Online Store (2016)"),l.a.createElement(j,{duration:"2.8",tech:this.state.tech3,"data-link":"#",link:"http://malomat.wysoon.com"},"Malomat HR MIS System (2011)"),l.a.createElement(j,{duration:"2",tech:this.state.tech1,link:"https://wwapp.herokuapp.com/"},"Weekend Wonderer (2018) "),l.a.createElement(j,{duration:"2.2",tech:this.state.tech5,link:"https://liveactive.herokuapp.com/"},"Live Active Healthy Food (2018)"),l.a.createElement(j,{duration:"2.1",tech:this.state.tech6,link:"https://nytreactproj.herokuapp.com/"},"NYTimes News Scrubber (2018)"),l.a.createElement(j,{duration:"2.1",tech:this.state.tech9,link:"#","data-link":"http://www.untoldedu.com/"},"Acbar Website Scrapper(2018)"),l.a.createElement(j,{duration:"2.1",tech:this.state.tech8,link:"https://friend-findertest.herokuapp.com/"},"Friend Finder (2018)"),l.a.createElement(j,{duration:"3.2",tech:this.state.tech4,link:"http://wysoon.com"},"Wysoon.com Web Hosting Service (2018)"))),l.a.createElement("div",{className:"new-section-div"},l.a.createElement("div",{className:"floating-section-div"}),l.a.createElement("div",{className:"section-content-div"},l.a.createElement("div",{className:"section-title"},l.a.createElement("i",{class:"far fa-address-card"})," Contacts"),l.a.createElement("div",{className:"contact-link"},l.a.createElement("a",{href:"http://linkedin.com/in/hmdroh",target:"_blank"},l.a.createElement("i",{class:"fab fa-linkedin"})," http://linkedin.com/in/hmdroh")),l.a.createElement("br",null),l.a.createElement("div",{className:"contact-link"},l.a.createElement("a",{href:"http://github.com/hmdroh",target:"_blank"},l.a.createElement("i",{class:"fab fa-github"})," http://github.com/hmdroh")),l.a.createElement("br",null),l.a.createElement("div",{className:"contact-link"},l.a.createElement("a",{href:"mailto:hamed.rohani4@gmail.com"}," ",l.a.createElement("i",{class:"fas fa-envelope-square"})," hamed.rohani4@gmail.com ")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,"Built this responsive website using Node.js, React.js, TweenMax"),l.a.createElement("div",null,"California, 2020"))))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N,null))}}]),a}(n.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Report Card"))}}]),a}(n.Component);function S(e){return function(t){Object(s.a)(n,t);var a=Object(u.a)(n);function n(){return Object(r.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(e){var t=Object(i.findDOMNode)(this);p.b.fromTo(t,1,{x:0,rotationY:20,opacity:0},{x:100,rotationY:0,opacity:1,ease:p.a.easeOut.config(.22,1),onComplete:e})}},{key:"componentWillLeave",value:function(e){var t=Object(i.findDOMNode)(this);p.b.fromTo(t,0,{rotationY:0,opacity:0},{rotationY:-180,opacity:0,onComplete:e})}},{key:"render",value:function(){return l.a.createElement(e,this.props)}}]),n}(l.a.Component)}var P=S(function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Result Card"))}}]),a}(n.Component)),C=S(w);n.Component;c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.891449f0.chunk.js.map