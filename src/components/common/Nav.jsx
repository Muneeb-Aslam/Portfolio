import { Link } from "react-router-dom"
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./nav.module.css"

function Nav(){
    const handleClick = ()=>{
        let menu = document.getElementById("menu")
        menu.classList.add="open"
        menu.style.display="block"
    }
    const handleCross = ()=>{
        let menu = document.getElementById("menu")
        menu.style.display="none"
    }
    return (
        <nav>
            <Link className={styles.logo} to={'/'}>Muneeb</Link>
            <ul className={styles.navlist}>
                <li className={styles.navitems}><Link className={styles.navlinks} to={'/'}>Home</Link></li>
                <li className={styles.navitems}><Link className={styles.navlinks} to={'/experience'}>Experience</Link></li>
                <li className={styles.navitems}><Link className={styles.navlinks} to={'/projects'}>Projects</Link></li>
                <li className={styles.navitems}><Link className={styles.navlinks} to={'/about'}>Contact Me</Link></li>
            </ul>
            <div className={styles.menuIcon} onClick={handleClick}>
                <FontAwesomeIcon className={styles.icons} icon={faBars} style={{color: "#282833",}} size="2x" />
            </div>
            <section className={styles.menu} id="menu">
                <div className={styles.head}>
                    <Link className={styles.navlinks} to={'/'}>Muneeb</Link>
                    <FontAwesomeIcon icon={faXmark} style={{color: "#282833",}} size="2x" onClick={handleCross}/>
                </div>
                <ul className={styles.menuList}>
                    <li className={styles.navitems}><Link className={styles.navlinks} to='/'>Home</Link></li>
                    <li className={styles.navitems}><Link className={styles.navlinks} to={'/experience'}>Experience</Link></li>
                    <li className={styles.navitems}><Link className={styles.navlinks} to={'/projects'}>Projects</Link></li>
                    <li className={styles.navitems}><Link className={styles.navlinks} to={'/about'}>Contact Me</Link></li>
                </ul>
            </section>
        </nav>
    )
}
export default Nav