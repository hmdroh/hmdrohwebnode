import React, { Component } from "react";
import TimeClock from './Timer';
import MyName from "../animations/MyName";

import Logo from "../animations/MyLogo";
import line from "../line.svg";
import Project from "../animations/Project";

import "./App.css";

import Puzzle from "./otherComp/Puzzle";


class Application1 extends Component {
   state = {
       tech1: ["HTML", "CSS", "Bootstrap", "Node.js", "React.js", "RESTful API", "JSON", "Snapchat Video"],
       tech2: ["HTML", "CSS", "PHP", "MySQL", "Magento", "Illustrator", "JavaScript"],
       tech3: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "jQuery", "PHP gd library"],
       tech4: ["HTML", "CSS", "Parallax", "Materialize CSS", "JavaScript", "Google Forms"],
       tech5: ["HTML", "CSS", "Bootstrap", "Node.js", "Express.js", "RESTful API", "Handlebars.js"],
       tech6: ["HTML", "CSS", "Bootstrap", "Node.js", "React.js", "RESTful API", "JSON"],
       tech7: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "jQuery", "MySQL"],
       tech8: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "jQuery", "FontAwesome"],
       tech9: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "jQuery", "Express", "Sequelize.js", "Moment.js"]

       
   }
    componentDidMount(){

   }
    render() {
        return (
       
            <div>
                <div class="div-pg1">
                    <div className="App">
                        <Logo />
                        <div className="full-name">
                            <h2><MyName duration="0.6">Hamed Rohani</MyName></h2>
                        </div>
                        <div className="line-tg"><MyName duration="0.3"><hr color="blue" /></MyName></div>
                        <div className="Occupation-title"><MyName duration="0.9">Full Stack Software Engineer</MyName></div>
                        <div class="lnk-div"><a href="https://linkedin.com/in/hmdroh" target="_blank"><MyName duration="1">Linkedin</MyName></a></div>
                        <div class="lnk-div"><a href="https://github.com/hmdroh" target="_blank"><MyName duration="1.2">Github Link</MyName></a></div>
                        <div>	<a href="./Hamed-Resume-20-07.pdf" target="_blank"><div class="buttonCV">
                        <span>Updated Resume</span>
		<svg>
		<polyline class="o1" points="0 0, 100 0, 100 35, 0 35, 0 0"></polyline>
		<polyline class="o2" points="0 0, 100 0, 100 35, 0 35, 0 0"></polyline>
	</svg>
	</div></a></div>
    <TimeClock />
    

                    </div>
                </div>
                <div style={{"backgroundColor": "black", display: "flex", flexDirection:"column",alignItems: "center", justifyContent: "center"}}><Puzzle />
                </div>

                <div className="new-section-div">
                    <div className="floating-section-div"></div>
                    <div className="section-content-div">
                    
                    <div className="section-title"><i class="fas fa-graduation-cap"></i> Technical Skills</div>
                        <MyName duration="0.72"><div className="skills-div">HTML5</div></MyName>
                        <MyName duration="0.74"><div className="skills-div">CSS3</div></MyName>
                        <MyName duration="2.76"><div className="skills-div">JavaScript</div></MyName>
                        <MyName duration="0.78"><div className="skills-div">ES6</div></MyName>
                        <MyName duration="1.8"><div className="skills-div">Node.js</div></MyName>
                        <MyName duration="2.82"><div className="skills-div">React.js</div></MyName>
                        <MyName duration="0.84"><div className="skills-div">Redux.js</div></MyName>
                        <MyName duration="0.84"><div className="skills-div">Python</div></MyName>
                        <MyName duration="0.86"><div className="skills-div">jQUery</div></MyName>
                        <MyName duration="0.88"><div className="skills-div">Bootstrap</div></MyName>
                        <MyName duration="0.90"><div className="skills-div">SASS</div></MyName>
                        <MyName duration="1.92"><div className="skills-div">D3</div></MyName>
                        <MyName duration="0.94"><div className="skills-div">JSON APIs and Ajax</div></MyName>
                        <MyName duration="1.04"><div className="skills-div">RESTful API</div></MyName>
                        <MyName duration="1.14"><div className="skills-div">GraphQL</div></MyName>


                        <MyName duration="0.84"><div className="skills-div">MySQL</div></MyName>
                        <MyName duration="0.84"><div className="skills-div">SQL</div></MyName>
                        <MyName duration="0.86"><div className="skills-div">MongoDB</div></MyName>
                        <MyName duration="0.88"><div className="skills-div">Mongoose.js</div></MyName>
                        <MyName duration="0.90"><div className="skills-div">Express.js</div></MyName>
                        <MyName duration="1.92"><div className="skills-div">Sequelize.js</div></MyName>


                        <MyName duration="0.96"><div className="skills-div">Git/Github Version Controlling</div></MyName>
                        <MyName duration="0.98"><div className="skills-div">UX Design</div></MyName>

                        <MyName duration="1.12"><div className="skills-div">JSX</div></MyName>
                        <MyName duration="1.14"><div className="skills-div">Photoshop</div></MyName>
                        <MyName duration="1.14"><div className="skills-div">Illustrator</div></MyName>
                        <MyName duration="1.14"><div className="skills-div">MERN Stack</div></MyName>
                        <MyName duration="1.14"><div className="skills-div">Quality Assurance and Testing with Chai</div></MyName>

                        <MyName duration="1.00"><div className="skills-div">Helmet.js</div></MyName>
                        <MyName duration="1.02"><div className="skills-div">AWS EC2 Management</div></MyName>
                        <MyName duration="1.06"><div className="skills-div">Linux Shell and SSH Commands</div></MyName>
                        <MyName duration="1.08"><div className="skills-div">Microsoft Office</div></MyName>
                        
                        <MyName duration="0.86"><div className="skills-div">A+ Hardware</div></MyName>
                        <MyName duration="0.88"><div className="skills-div">Project Management Skills</div></MyName>
                        <MyName duration="1.14"><div className="skills-div">Algorithms</div></MyName>
                        <MyName duration="1.14"><div className="skills-div">Responsive Design</div></MyName>
                  
                    </div>
                </div>

                <div className="new-section-div">
                    <div className="floating-section-div"></div>
                    <div className="section-content-div">
                    <div className="section-title"><i class="fas fa-project-diagram"></i> Projects</div>

                    <Project duration="2.4" tech={this.state.tech2} link="http://farsales.com" >Farsales.com Online Store (2016)</Project>
                    <Project duration="2.8" tech={this.state.tech3} data-link="#" link="http://malomat.wysoon.com">Malomat HR MIS System (2011)</Project>
                    <Project duration="2" tech={this.state.tech1} link="https://wwapp.herokuapp.com/" >Weekend Wonderer (2018) </Project>
                    <Project duration="2.2" tech={this.state.tech5} link="https://liveactive.herokuapp.com/" >Live Active Healthy Food (2018)</Project>
                    <Project duration="2.1" tech={this.state.tech6} link="https://nytreactproj.herokuapp.com/" >NYTimes News Scrubber (2018)</Project>
                    <Project duration="2.1" tech={this.state.tech9} link="#" data-link="http://www.untoldedu.com/" >Acbar Website Scrapper(2018)</Project>
                    {/* <Project duration="2.1" tech={this.state.tech7} link="https://burger-app1.herokuapp.com/" >Burger Shop (2018)</Project> */}
                    <Project duration="2.1" tech={this.state.tech8} link="https://friend-findertest.herokuapp.com/" >Friend Finder (2018)</Project>
                    <Project duration="3.2" tech={this.state.tech4} link="http://wysoon.com">Wysoon.com Web Hosting Service (2018)</Project>
                    </div>
                </div>

                <div className="new-section-div">
                    <div className="floating-section-div"></div>
                    <div className="section-content-div">
                    <div className="section-title"><i class="far fa-address-card"></i> Contacts</div>
                       {/* <div className="contact-link"><a href="http://instagram.com/hmdroh" target="_blank"> <i class="fab fa-instagram"></i> http://instagram.com/hmdroh</a></div><br/> */}
                       <div className="contact-link"><a href="http://linkedin.com/in/hmdroh" target="_blank"><i class="fab fa-linkedin"></i> http://linkedin.com/in/hmdroh</a></div><br/>
                       <div className="contact-link"><a href="http://github.com/hmdroh" target="_blank"><i class="fab fa-github"></i> http://github.com/hmdroh</a></div><br/>
                       <div className="contact-link"><a href="mailto:hamed.rohani4@gmail.com"> <i class="fas fa-envelope-square"></i> hamed.rohani4@gmail.com </a></div>
                        <br/>
                        <br/>
                        <div>Built this responsive website using Node.js, React.js, TweenMax</div>
                        <div>California, 2020</div>
                    
                    </div>
                </div>
            </div>

        )
    }
}

export default Application1;
