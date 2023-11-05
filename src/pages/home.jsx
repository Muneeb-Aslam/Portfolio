import { faLinkedin, faGithub, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/home.css'
import About from "../components/about";
export default function Home() {
    return (
        <>
            <header>
                <Nav />
                <main>
                    <p className="title">Hi! <p className="name">I am Muneeb Aslam</p></p>
                    <p className="skills">Full Stack Developer (MERN) 💻 - Student 👩‍🎓</p>
                    <ul className="media">
                        <li className="media-titles"><FontAwesomeIcon icon={faGithub} style={{ color: "#000000", }} size="2xl" /></li>
                        <li className="media-titles"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#0072b1", }} size="2xl" /></li>
                        <li className="media-titles"><FontAwesomeIcon icon={faFacebook} style={{ color: "#4267B2", }} size="2xl" /></li>
                        <li className="media-titles"><FontAwesomeIcon icon={faGoogle} style={{ color: "#DB4437", }} size="2xl" /></li>
                    </ul>
                    <button className="resume">Resume</button>
                </main>
            </header>
            <About />
        </>
    )
}