import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer';
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
    return (
        <div>
            <div className="container">
                <h5 className="last-updated last-updated-home">Updated: {new Date().toLocaleString()}</h5>
                <h1>Hello There and Welcome,</h1>
                <p>My name is Burhan (like "bur" as in being cold and "han" as in "Han Solo"). I'm glad you're visiting my site.</p>
                <p>Let me first say that this site was orginally built as somewhat of a CV and to tell you who I am, and to be honest I thought that would be a little too boring. So, I decided make a site where it can be a win-win situation. In other words, I made site to tell you a little bit about myself and as educational for any one to learn through my notes and experiences.</p>
                <p>If you just want to get to the point and find out who this <i>"Burhan"</i> guy is - <Link to="/about">Click Here</Link> </p>
                <p>I built this app to help anyone wanting to learn coding, but also to help myself. Psychology 101, when you learn a skill, thats great, but when you learn new skills while not practicing things you’ve learned before, it tends to athrophy(you start to forget). Thus, keeping notes and returning back to these notes are imporant.</p>
                <p>I will place some of my notes I accumulated over the years in lamen terms so any one can learn, while also showing my skill and knoweldge set.</p>
            </div>
        </div>
    )
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
