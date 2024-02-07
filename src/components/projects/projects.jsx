/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Project(props) {
    const {name,description,tech,github,live,image} = props.projects;

    return (
        <a className="projects-list" href={live} target="blank">
            <img src={`/images/${image}`} alt="" className="project-image" />
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
                        <a href={github} target="blank">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faGithub}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a href={live} target="blank">
                            <img src="/images/live.png" alt="live" className="live-icon"/>
                        </a>
                    </li>
                </ul>
            </main>
        </a>
    );
}

export default Project;
