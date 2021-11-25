import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { closeSideNav, removeOverlay, removeSideNavActive } from "../../events";
import Version from "../Version";

const NavSide = (props: any) => {
    let location = useLocation();
    useEffect(() => {
        // console.log(location.pathname);
        closeSideNav()
        removeOverlay()
    }, [])
    return (
        <nav id="nav-side">
            {/* Close Side Nav */}
            <div className="nav-side-div nav-side-menu-close-container">
                <button id="nav-side-menu-close">&#10094;</button>
            </div>
            {/* Links */}
            <div className="nav-side-div">
                <ul className="nav-side-ul nav-side-main-topics">
                    {/* <li><Link to="/" ><span className="nav-html-icons">&#9881;</span>Home</Link></li> */}
                    <li><Link onClick={removeSideNavActive} to="/" >Home</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/notes">Notes</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/projects">Projects</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/books">Books</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    <li><a href="https://github.com/burhanux"><button type="button">GitHub</button></a></li>
                </ul>
            </div>
            {/* Version Number */}
            <Version />
        </nav>
    )
}

export default NavSide
