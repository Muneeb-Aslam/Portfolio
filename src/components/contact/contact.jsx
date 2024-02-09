import {
    faLinkedin,
    faGithub,
    faFacebook,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../contact/email.svg";
import styles from "./contact.module.css";

function ContactComp() {
    return (
        <main className={styles.contact}>
            <section className={styles.contactImage}>
                <img src={contactImage} alt="contact-pic" />
            </section>
            <section className={styles.contactDetails}>
                <div className={styles.contactTitle}>Contact Me</div>
                <div className={styles.description}>
                    I am available on almost every social media. Feel free to
                    reach me out if you want a Freelance work to be done. You
                    can ping me and have a Tech advice too! I can help you with
                    MERN Stack, HTML/CSS, Tailwind, Git/GitHub, Web Development
                    and Linux.
                </div>
                <ul className={styles.media}>
                    <li className={styles.mediaTitles}>
                        <a
                            href="https://github.com/Muneeb-Aslam"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faGithub}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li className={styles.mediaTitles}>
                        <a
                            href="https://www.linkedin.com/in/muneeb-aslaam/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faLinkedin}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li className={styles.mediaTitles}>
                        <a
                            href="https://www.facebook.com/muneeb.official.686332?mibextid=ZbWKwL"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faFacebook}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li className={styles.mediaTitles}>
                        <a href="mailto:muneebbaslam@gmail.com">
                            <FontAwesomeIcon
                                className={styles.icons}
                                icon={faGoogle}
                                size="lg"
                            />
                        </a>
                    </li>
                </ul>
                <a
                    href="/Muneeb_Aslam_Resume.pdf"
                    target="_blank"
                    download="Muneeb_Aslam_Resume"
                >
                    <button className={styles.resume}>Resume</button>
                </a>
            </section>
        </main>
    );
}

export default ContactComp;
