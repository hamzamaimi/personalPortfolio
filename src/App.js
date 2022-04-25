import React from "react";
import $ from 'jquery';


import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import Resume from "./components/Resume";

const App = () => {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    return (
        <>
            <NavBar />
            <Slider />
            <Resume />
        </>
    )
}

export default App