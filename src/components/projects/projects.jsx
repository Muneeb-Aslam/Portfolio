/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import liveicon from '../projects/images/live.png'
import image from "../projects/images/cgpa.png";

function Project(props) {
    const {name,description,tech,github,live} = props.projects;
    return (
        <div className="projects-list">
            <img src={image} alt="" className="project-image" />
            <main className="project-details">
                <div className="name">{name}</div>
                <div className="description">{description}</div>
                <div className="tech">
                    {tech.map((value)=>{
                        return (
                            <p>{value}</p>
                        )
                    })}
                </div>
                <ul className="links">
                    <li>
                        <a href={github}>
                            <FontAwesomeIcon
                                className="icons"
                                icon={faGithub}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a href={live}>
                            <img src={liveicon} alt="live" className="live-icon"/>
                        </a>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default Project;
