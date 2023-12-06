import { Link } from "react-router-dom"
import {faBars,faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../common/nav.css"
function Nav(){
    return (
        <nav>
            <Link className="logo" to={'/'}>Muneeb</Link>
            <ul className="navlist">
                <li className="navitems"><Link className="navlinks" to={'/'}>Home</Link></li>
                <li className="navitems"><Link className="navlinks" to={'/experience'}>Experience</Link></li>
                <li className="navitems"><Link className="navlinks" to={'/projects'}>Projects</Link></li>
                <li className="navitems"><Link className="navlinks" to={'/about'}>Contact Me</Link></li>
            </ul>
            <section className="menu">
                <div className="menu-icon">
                    <FontAwesomeIcon className="icons" icon={faBars} style={{color: "#282833",}} size="2x" />
                </div>
                <div className="head">
                    <Link className="navlinks" to={'/'}>Muneeb</Link>
                    <FontAwesomeIcon icon={faXmark} style={{color: "#282833",}} size="2x" />
                </div>
                <ul className="menu-list">
                    <li className="navitems"><Link className="navlinks" to={'/'}>Home</Link></li>
                    <li className="navitems"><Link className="navlinks" to={'/experience'}>Experience</Link></li>
                    <li className="navitems"><Link className="navlinks" to={'/projects'}>Projects</Link></li>
                    <li className="navitems"><Link className="navlinks" to={'/about'}>Contact Me</Link></li>
                </ul>
            </section>
        </nav>
    )
}
export default Nav