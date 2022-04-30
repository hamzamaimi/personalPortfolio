import React from "react";
import $ from 'jquery';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Blog from "./components/Blog";
import HomePage from "./components/HomePage"

const App = () => {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/blog" element={<Blog />} />
                    <Route path="" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App