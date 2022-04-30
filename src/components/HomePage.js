import React from "react";

import NavBar from "./NavBar";
import Slider from "./Slider";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Slider />
            <About />
            <Projects />
            <ContactMe />
            <Footer />
        </>
    )
}
export default HomePage