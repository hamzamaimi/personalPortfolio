import React from "react";
import { useEffect, useState } from "react";
import $ from 'jquery'



const About = () => {
    const [screenHeightCss, setScreenHeightCss] = useState(null);
    const [navbarHeight, setnavbarHeight] = useState(null);
    const [screenHeightNoNavbar, setScreenHeightNoNavbar] = useState(null);
    const [screenHeightNoNavbarCss, setScreenHeightNoNavbarCss] = useState(null);
    const [marginTopCssRule, setMarginTopCssRule] = useState(null);

    useEffect(() => {
        const height = localStorage.getItem('screenHeightInPx');
        if (!screenHeightCss) {
            setScreenHeightCss({ height: `${height}` })
        }
        if (!screenHeightNoNavbar) {
            setScreenHeightNoNavbar(localStorage.getItem('screenHeightNoNavbar'))
            setScreenHeightNoNavbarCss({ height: localStorage.getItem('screenHeightNoNavbar') + 'px' })
        }
        if (!navbarHeight) {
            setnavbarHeight(localStorage.getItem('navbarHeight'))
            console.log('navbar height!', localStorage.getItem('navbarHeight'))
            setMarginTopCssRule({ marginTop: $("#navbarID").height() + 'px' })
        }
    }, [screenHeightCss, screenHeightNoNavbar, navbarHeight, marginTopCssRule])

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > screenHeightNoNavbar) {
                if (window.innerWidth > 991) {
                    // console.log(screenHeightNoNavbar)
                    $('#navbarID').css('background', 'white');
                }
            }
            else if ($(window).scrollTop() < screenHeightNoNavbar) {
                if (window.innerWidth > 991) {
                    $('#navbarID').css('background', 'linear-gradient(90deg, #ecf0ff 50%, #ffffff 50%)')
                }
            }

            // //WTF?!?!?!
            // //cosa la variabile non è valorizzata finche non si scrolla oltre la misura di essa
            // if ($(window).scrollTop() > screenHeightNoNavbar) {
            //     console.log('dentro', screenHeightNoNavbar)
            //     $('#nav-link-about').addClass('onElementPage');
            // }
            // //cosi la variabile screenHeightNoNavBar è valorizzata
            // if ($(window).scrollTop() < screenHeightNoNavbar) {
            //     console.log(screenHeightNoNavbar)
            //     $('#nav-link-about').addClass('onElementPage');
            // }

            if ($(window).scrollTop() > localStorage.getItem('screenHeightNoNavbar')) {
                $('#nav-link-about').addClass('onElementPage');
                $('#nav-link-home').removeClass('onElementPage');
            } else if ($(window).scrollTop() < localStorage.getItem('screenHeightNoNavbar')) {
                $('#nav-link-about').removeClass('onElementPage');
                $('#nav-link-home').addClass('onElementPage');
            }
        });

    });

    if (marginTopCssRule && screenHeightNoNavbarCss) {
        return (
            <>
                <div id="aboutPage" style={screenHeightNoNavbarCss} className="container-fluid">
                    <div style={marginTopCssRule} id="aboutPageContent" className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <img id="aboutImage" src="images/developer.png" alt="developer image" />
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="row">
                                <div className="col-12">
                                    About Me
                                </div>
                                <div className="col-12">
                                    little description
                                </div>
                                <div className="col-4">Name:</div>
                                <div className="col-8">Hamza Maimi</div>
                                <div className="col-4">Date of birth:</div>
                                <div className="col-8">March 28, 1999</div>
                                <div className="col-4">Address</div>
                                <div className="col-8">Modena 41059 Italy</div>
                                <div className="col-4">Zip code:</div>
                                <div className="col-8">41053</div>
                                <div className="col-4">Email:</div>
                                <div className="col-8">hamzamaimi@gmail.com</div>
                                <div className="col-4">Phone</div>
                                <div className="col-8">+39 3392579431</div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }

}

export default About