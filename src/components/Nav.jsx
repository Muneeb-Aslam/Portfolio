import { Link } from "react-router-dom"
function Nav(){
    return (
        <nav>
            <div className="name">Muneeb</div>
            <ul className="navlist">
                <li className="navitems"><Link className="navlinks" to={'/'}>Home</Link></li>
                <li className="navitems"><Link className="navlinks" to={'/experience'}>Experience</Link></li>
                <li className="navitems"><Link className="navlinks" to={'/projects'}>Projects</Link></li>
                <li className="navitems"><Link className="navlinks" to={'/about'}>Contact Me</Link></li>
            </ul>
        </nav>
    )
}
export default Nav