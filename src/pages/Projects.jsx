/* eslint-disable react/jsx-key */
import Project from "../components/projects/projects";
import Nav from "../components/common/Nav";
import Footer from "../components/common/footer";
import projects from "../components/projects/projects.json";
import project_img from "../components/projects/images/project-img.svg";
import "../components/projects/project.css";

const Projects = () => {
    return (
        <>
            <Nav />
            <div className="project-header">
                <img src={project_img} alt="" />
                <div className="description">
                    <p className="title">Projects</p>
                    <p>
                        I have used various technologies and tools comprising
                        ReactJs, NextJs, Redux, Hooks, Nodejs, ExpressJs,
                        MongoDB, HTML/CSS, C++, Python, MySQL, Tailwind,
                        Git/Github.
                    </p>
                </div>
            </div>
            <main className="lists">
                {projects.map((items) => {
                    return <Project projects={items} />;
                })}
            </main>
            <Footer />
        </>
    );
};

export default Projects;
