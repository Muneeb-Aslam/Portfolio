/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from "./experience.module.css"
const ExperienceComponent = (props) => {
  const {logo,title,name,duration,location,description} = props.items
  return (
    <section className={styles.experience}>
      <img src={logo} alt="" />
      <section>
        <div>
          <h3>{title}</h3>
          <h3>{duration}</h3>
        </div>
        <div>
          <h3>{name}</h3>
          <h3>{location}</h3>
        </div>
        <div>
          {description.map((item)=>{
            return <p>- {item}</p>
          })}
        </div>
      </section>
    </section>
  )
}

export default ExperienceComponent