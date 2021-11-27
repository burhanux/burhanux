import { useEffect } from "react"
import { Link } from "react-router-dom"
import DarkLightSwitch from "../DarkLightSwitch"
import { openSideNav } from "../../events"

const NavTop = () => {
    useEffect(() => {
        openSideNav()
    }, [])
    return (
        <nav id="NavTop">
            <button className="mobile" id="NavTopOpenBtn">&#9776;</button>
            <div className="NavTop-div logo-switch">
                <h2><Link to="/">BURHAN UX<span className="beta">(BETA)</span></Link></h2>
                <DarkLightSwitch />
            </div>
            <div className="NavTop-div desktop">
                <ul className="NavTop-ul">
                    {/* {createMenuLinks()} */}
                    {/* <li><DarkLightSwitch /></li> */}
                    <li><Link to="/notes">Notes</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://github.com/burhanux"><button className="github-btn" type="button">GitHub</button></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavTop
