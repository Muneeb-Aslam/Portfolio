import styles from  "./home.module.css"

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.title}>What I Do?</div>
      <main>
        <div className={styles.mern}>Front End Development</div>
        <ul className={styles.description}>
          <li className={styles.points}>✨Building responsive websites using React.js | HTML/CSS</li>
          <li className={styles.points}>✨Creating Single page rendering applications using Redux</li>
          <li className={styles.points}>✨Creating Websites with TailwindCSS and CSS for sleek designs</li>
          <li className={styles.points}>✨Committed to writing clean code following best practices in development.</li>
        </ul>
        <div className={styles.languages}>
          <div className={styles.heading}>Languages</div>
          <ul className={styles.skillslist}>
              <li className={styles.point}>Javascript</li>
              <li className={styles.point}>C++</li>
              <li className={styles.point}>Python</li>
              <li className={styles.point}>HTML</li>
          </ul>
        </div>
        <div className={styles.tools}>
          <div className={styles.heading}>Tools  & Technologies</div>
          <ul className={styles.skillslist}>
              <li className={styles.point}>Git</li>
              <li className={styles.point}>Linux</li>
              <li className={styles.point}>MERN</li>
              <li className={styles.point}>React</li>
              <li className={styles.point}>Redux</li>
              <li className={styles.point}>ExpressJS</li>
              <li className={styles.point}>NodeJS</li>
              <li className={styles.point}>RestAPI</li>
              <li className={styles.point}>TailwindCSS</li>
              <li className={styles.point}>CSS</li>
          </ul>
        </div>
      </main>
    </section>
  )
}

export default About