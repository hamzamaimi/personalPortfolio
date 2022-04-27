import React from "react";
import $ from 'jquery';


import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    return (
        <>
            <NavBar />
            <Slider />
            <About />
            <Footer />
        </>
    )
}

export default App