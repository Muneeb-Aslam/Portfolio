/* eslint-disable react/jsx-key */
import Project from "../components/projects/projects";
import Nav from "../components/common/Nav";
import Footer from "../components/common/footer";
import projects from "../components/projects/projects.json";
import styles from "../components/projects/project.module.css"

const Projects = () => {
    return (
        <>
            <Nav />
            <div className={styles.projectHeader}>
                <img src="/images/project-img.svg" alt="" className={styles.mainImg}/>
                <div className={styles.description}>
                    <p className={styles.title}>Projects</p>
                    <p>
                        I have used various technologies and tools comprising
                        ReactJs, NextJs, Redux, Hooks, Nodejs, ExpressJs,
                        MongoDB, HTML/CSS, C++, Python, MySQL, Tailwind,
                        Git/Github.
                    </p>
                </div>
            </div>
            <main className={styles.lists}>
                {projects.map((items) => {
                    return <Project projects={items} />;
                })}
            </main>
            <Footer />
        </>
    );
};

export default Projects;
