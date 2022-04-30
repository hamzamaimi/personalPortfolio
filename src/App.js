import React from "react";
import $ from 'jquery';


import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const App = () => {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


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

export default App