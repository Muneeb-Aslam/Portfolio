import { faLinkedin, faGithub, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/header.css'
export default function Home() {
    return (
        <header>
            <Nav />
            <main>
                <p className="title">Hi! <p className="name">I am Muneeb Aslam</p></p>
                <p className="skills">Front End Developer (React JS) 💻 - Student 👩‍🎓</p>
                <ul className="media">
                    <li className="media-titles"><FontAwesomeIcon icon={faGithub} style={{color: "#000000",}} /></li>
                    <li className="media-titles"><FontAwesomeIcon icon={faLinkedin} /></li>
                    <li className="media-titles"><FontAwesomeIcon icon={faFacebook} /></li>
                    <li className="media-titles"><FontAwesomeIcon icon={faGoogle} /></li>
                </ul>
                <button className="resume">Resume</button>
            </main>
        </header>
    )
}