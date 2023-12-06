import Nav from "../components/common/Nav";
import Footer from "../components/common/footer";
import ExperienceComponent from "../components/experience/experience";
import experienceImg from "../components/experience/experience.svg"
const Experience = () => {
    return (
        <>
            <Nav />
            <div className="project-header">
                <img src={experienceImg} alt="" />
                <div className="description">
                    <p className="title">Experience</p>
                    <p>
                        Currently, I&apos;m a Final Year student of Software Engineering at NUST. I have expertise in building the solutions.
                    </p>
                </div>
            </div>
            <ExperienceComponent />
            <Footer />
        </>
    );
};

export default Experience;
