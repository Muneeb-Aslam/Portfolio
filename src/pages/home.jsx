import {
    faLinkedin,
    faGithub,
    faFacebook,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/common/Nav";
import "../components/home/home.css";
import About from "../components/home/about";
import Footer from "../components/common/footer";
import Project from "../components/home/project";
export default function Home() {
    return (
        <>
            <header>
                <Nav />
                <main>
                    <p className="title">
                        Hi! <p className="name">I am Muneeb Aslam</p>
                    </p>
                    <p className="skills">
                        Full Stack Developer (MERN) 💻 - Student 👩‍🎓
                    </p>
                    <ul className="media">
                        <li className="media-titles">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faGithub}
                                size="lg"
                            />
                        </li>
                        <li className="media-titles">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faLinkedin}
                                size="lg"
                            />
                        </li>
                        <li className="media-titles">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faFacebook}
                                size="lg"
                            />
                        </li>
                        <li className="media-titles">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faGoogle}
                                size="lg"
                            />
                        </li>
                    </ul>
                    <button className="resume">Resume</button>
                </main>
            </header>
            <About />
            <section className="projects">
                <div className="title">
                    Projects
                    <div className="description">
                        From Concept to Code: Building the Future, One Project
                        at a Click
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
