/* eslint-disable react/prop-types */
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Project(props) {
    return (
        <section className="projects-list">
            <img src={props.image} alt="" className="project-image" />
            <main className="project-details">
                <div className="name">{props.name}</div>
                <div className="description">{props.description}</div>
                <div className="tech">{props.tech}</div>
                <ul className="links">
                    <li>
                        <a href="http://">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faGithub}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="http://">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faGithub}
                                size="lg"
                            />
                        </a>
                    </li>
                </ul>
            </main>
        </section>
    );
}

export default Project;
