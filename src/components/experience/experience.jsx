/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from "./experience.module.css"
const ExperienceComponent = (props) => {
  const {logo,title,name,duration,location,description} = props.items
  return (
    <section className={styles.experience}>
      <img src={logo} alt="" />
      <section className={styles.details}>
        <div className={styles.first}>
          <h3 className={styles.title}>{title}</h3>
          <h4>{duration}</h4>
        </div>
        <div className={styles.second}>
          <h3>{name}</h3>
          <h4>{location}</h4>
        </div>
        <div className={styles.third}>
          {description.map((item)=>{
            return <p>- {item}</p>
          })}
        </div>
      </section>
    </section>
  )
}

export default ExperienceComponent