import React from "react"
import "../styles/Project.scss";
import {DiGithubAlt} from "react-icons/di";
import { GrDeploy } from "react-icons/gr";


export default function Project(props){
    let background = 'url(.' + props.image + ')';
    return(
        <div className="project">
            <div className="row">
                <div className="image" style={{backgroundImage:background}}></div>
                <div className="info">
                    <div>
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>
                    </div>
                    <div className="tags">
                        {props.tags ? props.tags.map((tag, index) => {
                            return <span className="tag" key={index}>{tag}</span>
                        }) : null}
                    </div>
                    {props.links ? (
                        <div className="links">
                        {props.links.source ? (
                            <div className="source">
                                <DiGithubAlt />
                                <a href={props.links.source} target="_blank" rel="noopener noreferrer">Source</a>
                            </div>
                        ) : null}
                        {props.links.deployment ? (
                            <div className="deployment">
                                <GrDeploy/>

                                <a href={props.links.deployment} target="_blank" rel="noopener noreferrer">Deployment</a>
                            </div>
                        ) : null}
                    </div>
                    ) : null}
                    
                </div>
            </div>
            
        </div>
    )
}