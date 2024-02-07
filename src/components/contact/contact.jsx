import {
    faLinkedin,
    faGithub,
    faFacebook,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from "../contact/email.svg";

function ContactComp() {
    return (
        <main className="contact">
            <section className="contact-image">
                <img src={contactImage} alt="contact-pic" />
            </section>
            <section className="contact-details">
                <div className="contact-title">Contact Me</div>
                <div className="description">
                    I am available on almost every social media. Feel free to
                    reach me out if you want a Freelance work to be done. You
                    can ping me and have a Tech advice too! I can help you with
                    MERN Stack, HTML/CSS, Tailwind, Git/GitHub, Web Development
                    and Linux.
                </div>
                <ul className="media">
                    <li className="media-titles">
                        <a href="https://github.com/Muneeb-Aslam" target="_blank" rel="noreferrer"> 
                            <FontAwesomeIcon
                                className="icons"
                                icon={faGithub}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li className="media-titles">
                        <a href="https://www.linkedin.com/in/muneeb-aslaam/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                className="icons"
                                icon={faLinkedin}
                                size="lg"
                            />
                        </a>
                    </li>
                    <li className="media-titles">
                        <a href=""></a>
                        <FontAwesomeIcon
                            className="icons"
                            icon={faFacebook}
                            size="lg"
                        />
                    </li>
                    <li className="media-titles">
                        <a href="mailto:muneebbaslam@gmail.com">
                            <FontAwesomeIcon
                                className="icons"
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
                    <button className="resume">Resume</button>
                </a>
            </section>
        </main>
    );
}

export default ContactComp;
