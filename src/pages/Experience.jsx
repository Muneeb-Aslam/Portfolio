/* eslint-disable react/jsx-key */
import Nav from "../components/common/Nav";
import Footer from "../components/common/footer";
import ExperienceComponent from "../components/experience/experience";
import experienceImg from "../components/experience/experience.svg";
import styles from "../components/experience/experience.module.css";
import ExperienceList from "../components/experience/experience.json";
const Experience = () => {
    return (
        <>
            <Nav />
            <div className={styles.projectHeader}>
                <img src={experienceImg} alt="" />
                <div className={styles.description}>
                    <p className={styles.title}>Experience</p>
                    <p>
                        Currently, I&apos;m a Final Year student of Software
                        Engineering at NUST. I have expertise in building the
                        solutions.
                    </p>
                </div>
            </div>
            <main className={styles.experiencemain}>
                {ExperienceList.map((items) => {
                    return <ExperienceComponent items={items} />;
                })}
            </main>
            <Footer />
        </>
    );
};

export default Experience;
