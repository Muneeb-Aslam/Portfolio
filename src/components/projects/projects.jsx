/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./project.module.css"

function Project(props) {
    const {name,description,tech,github,live,image} = props.projects;

    return (
        <a className={styles.projectsList} href={live} target="blank">
            <img src={`/images/${image}`} alt="" className={styles.projectImage} />
            <main className={styles.projectDetails}>
                <div className={styles.name}>{name}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.tech}>
                    {tech.map((value)=>{
                        return (
                            <p>{value}</p>
                        )
                    })}
                </div>
                <ul className={styles.links}>
                    <li>
                        <a href={github} target="blank">
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faGithub}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li>
                        <a href={live} target="blank">
                            <img src="/images/live.png" alt="live" className={styles.liveIcon}/>
                        </a>
                    </li>
                </ul>
            </main>
        </a>
    );
}

export default Project;
