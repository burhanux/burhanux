import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { closeSideNav, removeOverlay } from '../events';

const MainContent = () => {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return (
        <main className="main-content">
            <Routes>
                <Route path="/notes" element={<Notes />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/books" element={<Books />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}


// Test Components below
function Home() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>HOME</h1>;
}

function About() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>About</h1>;
}

function Contact() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Contact</h1>;
}

function Notes() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Notes</h1>;
}

function Projects() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Projects</h1>;
}

function Books() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Books</h1>;
}

function NotFound() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Not Found 404</h1>;
}



export default MainContent
