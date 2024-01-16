import * as React from "react"
import "./styles/index.scss";
import Typewriter from 'typewriter-effect';
import Project from "./components/Project.jsx";
import {DiGithubAlt} from "react-icons/di";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import Particles from "react-tsparticles";
import {Helmet} from "react-helmet"
import { Analytics } from "@oliver-temple/analytics";

const projects = require("../projects.json");
// markup
class IndexPage extends React.Component {
  constructor(props){
    super(props);

    let anal = new Analytics("-MuSNfQjN7E9adTA7l9Q");
    anal.clicks();

    this.state = {
      showMenu: false,
      play:true,
    }
    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef(); 
    this.skillsRef = React.createRef();

    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount(){
    if (window.location.hash === "#about"){
      this.aboutRef.current.scrollIntoView({behavior: "smooth"});
    }else if (window.location.hash === "#projects"){
      this.projectsRef.current.scrollIntoView({behavior: "smooth"});
    }else if (window.location.hash === "#contact"){
      this.contactRef.current.scrollIntoView({behavior: "smooth"});
    }else if (window.location.hash === "#skills"){
      this.skillsRef.current.scrollIntoView({behavior: "smooth"});
    }

  
  }

  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  togglePlay(){
    this.setState({
      play: !this.state.play
    })
  }
  render(){
    return (
      <main>
        <Helmet>
          <link rel="icon" href="/static/images/icon.png" />
          <meta name="description" content="A portfolio website for me, Oliver Temple" />
          <title>Oliver Temple | Portfolio</title>
        </Helmet>
        <nav className="menuBar">
          <div className="menuItem">
            <a href="#skills" onClick={() => {
              this.skillsRef.current.scrollIntoView({behavior: "smooth"});
            }}>Skills</a>
          </div>
          <div className="menuItem">
            <a href="#projects" onClick={() => {
              this.projectsRef.current.scrollIntoView({behavior: "smooth"});
            }}>Projects</a>
          </div>
          <div className="menuItem">
            <a href="#contact" onClick={() => {
              this.contactRef.current.scrollIntoView({behavior: "smooth"});
            }}>Contact</a>
          </div>
        </nav>
        <Particles
      id="tsparticles"
      style={{zIndex: -1}}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: this.state.play ? true : false,
              mode: "push",
            },
            onHover: {
              enable: this.state.play ? true : false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: this.state.play ? true : false,
            outMode: "bounce",
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
          <div className="content">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                {this.state.play ? (
                  <Typewriter 
                    options={{
                      strings: ['Oliver Temple', "Software Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                ) : (
                  <div>
                    <h1>Oliver Temple</h1>
                    <h2>Software Developer</h2>
                  </div>
                )
                }
                
              </div>
            </div>
            <div className="play_pause" onClick={this.togglePlay}>
              {this.state.play ? <BsFillPauseFill size={40} color={"#4b63d8"}/> : <BsFillPlayFill size={40} color={"#4b63d8"}/>}
              
            </div>
          </section>
          <section className="about" ref={this.aboutRef}>
            <div className="container">
              <h1>About</h1>
              <div>
                  <p>I am a second year undergraduate studying engineering at the Dyson Institue of Engineering and Technology, with a love for coding. I enjoy coding all types of software, from mobile apps and websites to command line utilities.</p>
              </div>
            </div>
          </section>
          <section className="skills" ref={this.skillsRef}>
            <div className="container">
              <h1>Skills</h1>
              <div className="skills-list">
                <div className="skill">
                  <h2>Languages</h2>
                  <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>LaTeX</li>
                  </ul>
                </div>
                <div className="skill">
                  <h2>Frameworks</h2>
                  <ul>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Node.js</li>
                    <li>Flask</li>
                  </ul>
                </div>
                <div className="skill">
                  <h2>Tools</h2>
                  <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>AWS</li>
                  </ul>
                </div>
                <div className="skill">
                  <h2>Databases</h2>
                  <ul>
                    <li>Firebase</li>
                  </ul>
                </div>
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
        </div>
      </main>
    )
  }

  
}

export default IndexPage
