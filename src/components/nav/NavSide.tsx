import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { closeSideNav, removeOverlay, removeSideNavActive, openSideNavTopic, closeSideNavTopic } from "../../events";
import Version from "../Version";

const NavSide = (props: any) => {
    let location = useLocation();
    useEffect(() => {
        // console.log(location.pathname);
        closeSideNav()
        removeOverlay()
    }, [])
    return (
        <nav id="NavSide">
            {/* Close Side Nav */}
            <div className="NavSide-div NavSide-div-close">
                <button id="NavSideCloseBtn">&#10094;</button>
            </div>
            {/* Links */}
            <div className="NavSide-div" id="NavSideMenus">
                <div className="NavSide-div-menu" id="NavSideMainMenu">
                    <ul className="NavSide-ul">
                        {/* <li><Link to="/" ><span className="nav-html-icons">&#9881;</span>Home</Link></li> */}
                        <li><Link onClick={removeSideNavActive} to="/" >Home</Link></li>
                        <li><Link onClick={() => openSideNavTopic("NavSideNotes")} to="/notes">Notes</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/projects">Projects</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/books">Books</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                        <li><a href="https://github.com/burhanux"><button type="button">GitHub</button></a></li>
                    </ul>
                </div>
                <div className="NavSide-div-menu right-wing" id="NavSideNotes">
                    <ul className="NavSide-ul" >
                        <li><button onClick={() => closeSideNavTopic("NavSideNotes")}><h2>&#10094;</h2></button></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                        <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
            {/* Version Number */}
            <div className="NavSide-div">
                <Version />
            </div>

        </nav>
    )
}

export default NavSide
