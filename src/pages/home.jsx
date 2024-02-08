import {
    faLinkedin,
    faGithub,
    faFacebook,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/common/Nav";
import About from "../components/home/about";
import Footer from "../components/common/footer";
import styles from "../components/home/home.module.css"

export default function Home() {

    return (
        <>
            <header>
                <Nav />
                <main>
                    <p className={styles.title}>
                        Hi! <p className={styles.name}>I am Muneeb Aslam</p>
                    </p>
                    <p className={styles.skills}>
                        Front End Developer (React JS) 💻 - Student 👩‍🎓
                    </p>
                    <ul className={styles.media}>
                        <li className={styles.mediatitles}>
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faGithub}
                                size="lg"
                            />
                        </li>
                        <li className={styles.mediatitles}>
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faLinkedin}
                                size="lg"
                            />
                        </li>
                        <li className={styles.mediatitles}>
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faFacebook}
                                size="lg"
                            />
                        </li>
                        <li className={styles.mediatitles}>
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faGoogle}
                                size="lg"
                            />
                        </li>
                    </ul>
                    <a
                        href="/Muneeb_Aslam_Resume.pdf"
                        target="_blank"
                        download="Muneeb_Aslam_Resume"
                    >
                        <button className={styles.resume}>Resume</button>
                    </a>
                </main>
            </header>
            <About />
            <section className={styles.projects}>
                <div className={styles.title}>
                    Projects
                    <div className={styles.description}>
                        From Concept to Code: Building the Future, One Project
                        at a Click
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
