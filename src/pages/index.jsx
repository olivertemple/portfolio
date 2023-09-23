import * as React from "react"
import "./styles/index.scss"

const projects = require("../projects.json");

class IndexPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {}

        this.aboutRef = React.createRef();
        this.skillsRef = React.createRef();
        this.projectsRef = React.createRef();
        this.contactRef = React.createRef();
    }

    render(){
        return(
            <main>
                <nav className="menuBar">
                    <div className="menuBarLeft">
                        <div className="menuItem">
                            <a href="#about" onClick={() => {
                            this.aboutRef.current.scrollIntoView({behavior: "smooth"});
                            }}>About</a>
                        </div>
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
                    </div>
                    <div className="menuBarRight">

                    </div>

                </nav>

                <div className="content">
                    <section className="hero">
                        
                    </section>
                </div>
            </main>
        )
    }
}

export default IndexPage


export function Head(){
    return(
        <>
            <link rel="icon" href="/src/images/icon.png" />
            <meta name="description" content="A portfolio website for me, Oliver Temple" />
            <title>Oliver Temple | Portfolio</title>
        </>
    )
}