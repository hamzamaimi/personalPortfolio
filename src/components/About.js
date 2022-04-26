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
            setScreenHeightNoNavbarCss({ maxHeight: localStorage.getItem('screenHeightNoNavbar') + 'px' })
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
                            <img id="aboutImage" src="images/developer.png" alt="developer" />
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="row">
                                <div id="aboutTitle" className="col-12 verticalMargin5">
                                    About Me
                                </div>
                                <div style={{ marginBottom: '5%' }} className="col-12 aboutContent">
                                    little description
                                </div>
                                <div className="col-4 verticalMargin2 font-weight-bold">Name:</div>
                                <div className="col-8 aboutContent verticalMargin2">Hamza Maimi</div>
                                <div className="col-4 verticalMargin2 font-weight-bold">Date of birth:</div>
                                <div className="col-8 aboutContent verticalMargin2">March 28, 1999</div>
                                <div className="col-4 verticalMargin2 font-weight-bold">Address</div>
                                <div className="col-8 aboutContent verticalMargin2">Modena 41059 Italy</div>
                                <div className="col-4 verticalMargin2 font-weight-bold">Zip code:</div>
                                <div className="col-8 aboutContent verticalMargin2">41053</div>
                                <div className="col-4 verticalMargin2 font-weight-bold">Email:</div>
                                <div className="col-8 aboutContent verticalMargin2">hamzamaimi@gmail.com</div>
                                <div className="col-4 verticalMargin2 font-weight-bold">Phone</div>
                                <div className="col-8 aboutContent verticalMargin2">+39 3392579431</div>
                                <div className="col-12 verticalMargin5" id="downlaodButtonAbout" >
                                    <form method="get" action="documents/HamzaMaimiCurriculum.pdf">
                                        <button style={{ borderRadius: '15px' }} type="button" className="btn btn-primary">
                                            <a id="downloadAnchorAbout" href="documets/HamzaMaimiCurriculum.pdf" download style={{ fontWeight: 'bold', fontSize: '12px', color: 'white' }}>DOWNLOAD CV</a>
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>

                </div>
                <div className="container-fluid verticalMargin5">
                    <div className="row">
                        <div className="col-6 col-lg-3 text-center">
                            <i className="fa-brands fa-java" style={{ fontSize: '100px' }} />
                        </div>
                        <div className="col-6 col-lg-3 text-center">
                            <i className="fa-brands fa-js" style={{ fontSize: '100px' }} />
                        </div>
                        <div className="col-6 col-lg-3 text-center">
                            <i className="fa-brands fa-html5" style={{ fontSize: '100px' }} />
                        </div>
                        <div className="col-6 col-lg-3 text-center">
                            <i className="fa-brands fa-css3-alt" style={{ fontSize: '100px' }} />
                        </div>
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