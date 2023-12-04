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
				I am available on almost every social media. Feel free to reach me out if you want a Freelance work to be done. You can ping me and have a Tech advice too! I can help you with MERN Stack, HTML/CSS, Tailwind, Git/GitHub, Web Development and Linux.
				</div>
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
			</section>
        </main>
    );
}

export default ContactComp;
