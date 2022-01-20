import * as React from "react"
import "./styles/index.scss";
import Typewriter from 'typewriter-effect';
import Project from "./components/Project";
import {DiGithubAlt} from "react-icons/di";
import { HiOutlineMail } from "react-icons/hi";
const projects = require("../projects.json");
// markup
class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef(); 
  }

  componentDidMount(){
    if (window.location.hash === "#about"){
      this.aboutRef.current.scrollIntoView({behavior: "smooth"});
    }else if (window.location.hash === "#projects"){
      this.projectsRef.current.scrollIntoView({behavior: "smooth"});
    }else if (window.location.hash === "#contact"){
      this.contactRef.current.scrollIntoView({behavior: "smooth"});
    }
  }
  render(){
    return (
      <main>
        <title>Oliver Temple | Portfolio</title>
        <nav className="menuBar">
          <div className="menuItem">
            <a href="#about" onClick={() => {
              this.aboutRef.current.scrollIntoView({behavior: "smooth"});
            }}>About</a>
          </div>
          <div className="menuItem">
            <a href="#projects" onClick={() => {
              this.projectsRef.current.scrollIntoView({behavior: "smooth"});
            }}>Projects</a>
          </div>
          <div className="menuItem">
            <a href="https://github.com/olivertemple" target="_blank" rel="noopener noreferrer">Github</a> 
          </div>
          <div className="menuItem">
            <a href="#contact" onClick={() => {
              this.contactRef.current.scrollIntoView({behavior: "smooth"});
            }}>Contact</a>
          </div>
        </nav>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <Typewriter 
                options={{
                  strings: ['Oliver Temple', "Software Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </section>
        <section className="about" ref={this.aboutRef}>
          <div className="container">
            <h1>About</h1>
            <div>
                <p>I am a software developer from the UK, with a love for coding. I enjoy coding all types of software, from mobile apps and websites to command line utilities.</p>
            </div>
          </div>
        </section>
        <section className="projects" ref={this.projectsRef}>
          <div className="container">
            <h1>Projects</h1>
            <div className="projectsContainer">
              {projects.map((item, index) => {
                return <Project 
                  key={index}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  tags={item.tags}
                  links={item.links}
                />
              })}
            </div>
          </div>
        </section>
        <section className="contact" ref={this.contactRef}>
              <div className="container">
                <h1>Contact</h1>
                <div>
                  <p>If you want any more information, feel free to contact me on any of the platforms listed below.</p>
                  <div className="contacts">
                    <div className="contactButton">
                      <DiGithubAlt />
                      <a href="https://github.com/olivertemple" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                    <div className="contactButton">
                      <HiOutlineMail />
                      <a href="mailto:oliver.temple.dev@gmail.com" target="_blank" rel="noopener noreferrer">oliver.temple.dev@gmail.com</a>

                    </div>
                  </div>
                </div>
              </div>
        </section>
      </main>
    )
  }

  
}

export default IndexPage
