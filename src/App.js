import React from "react";
import $ from 'jquery';


import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import About from "./components/About";

const App = () => {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    return (
        <>
            <NavBar />
            <Slider />
            <About />
        </>
    )
}

export default App