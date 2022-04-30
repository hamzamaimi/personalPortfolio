import React from "react";
import { useEffect, useState } from "react";
import $ from 'jquery'

const ContactMe = () => {
    const [pageHeight, setPageHeight] = useState(null);
    const [pageHeightPx, setPageHeightPx] = useState(null);

    useEffect(() => {
        // localStorage.setItem('height', $('#sliderChild').height() + $('#aboutPage').height() + $('#technologiesLogo').height() + $('#projectsSection').height() + $('#technologiesProjects').height());
        if (!pageHeight) {
            // console.log(localStorage.getItem('sliderAboutHeight'))
            setPageHeight(localStorage.getItem('sliderAboutHeight'));
        }
    }, [pageHeight])

    $(document).ready(function () {
        let sliderAboutHeight = null;

        $(window).scroll(function () {
            if (!sliderAboutHeight) {
                sliderAboutHeight = parseFloat(localStorage.getItem('sliderAboutHeight'))
                localStorage.setItem('altezza', sliderAboutHeight + $('#projectsSection').height() + $('#technologiesProjects').height());
                // console.log(sliderAboutHeight + $('#projectsSection').height() + $('#technologiesProjects').height())
            }
            if ($(window).scrollTop() > parseFloat(localStorage.getItem('altezza'))) {
                // console.log('dentro', parseFloat(localStorage.getItem('altezza')))
                $('#nav-link-contact').addClass('onElementPage');
                $('#nav-link-projects').removeClass('onElementPage');
                $('#nav-link-about').removeClass('onElementPage');
            } else {
                $('#nav-link-contact').removeClass('onElementPage');
            }
        });

    });

    return (
        <>
            <div id="contactMeSelector"></div>
            <div className="container topBottomMargin10">
                <div className="row text-center">
                    <div className="col-12" id="contactTitle">Contact Me</div>
                    <div className="col-12 aboutContent" style={{ margin: '3% 0' }}>
                        Per qualsiasi informazioni non esitate a contattarmi
                    </div>
                    <div className="col-12 verticalMargin5">
                        <div className="row">
                            <div className="col-12 col-sm-6" style={{ height: '300px' }}>
                                <div className="contactDivs text-center">
                                    <i style={{ fontSize: '68px', color: '#3F64FF', marginTop: '10%' }} className="fa-solid fa-location-dot"></i>
                                    <div style={{ marginTop: '3%', fontSize: '20px', fontWeight: '600' }}>Address</div>
                                    <div className="aboutContent contentContactMe">
                                        Modena 41059 Italy
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6" style={{ height: '300px' }}>
                                <div className="contactDivs text-center">
                                    <i style={{ fontSize: '68px', color: '#3F64FF', marginTop: '10%' }} className="fa-solid fa-mobile"></i>
                                    <div style={{ marginTop: '3%', fontSize: '20px', fontWeight: '600' }}>Phone</div>
                                    <div className="aboutContent contentContactMe">
                                        <a className="aboutContent" href="tel:+39-3392579431" >+39 3392579431</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-sm-6" style={{ height: '300px' }}>
                                <div className="contactDivs text-center">
                                    <i style={{ fontSize: '68px', color: '#3F64FF', marginTop: '10%' }} className="fa-solid fa-at"></i>
                                    <div style={{ marginTop: '3%', fontSize: '20px', fontWeight: '600' }}>Email</div>
                                    <div className="aboutContent contentContactMe">
                                        <a className="aboutContent" href="mailto:hamzamaimi0901@gmail.com" >hamzamaimi@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6" style={{ height: '300px' }}>
                                <div className="contactDivs text-center">
                                    <i style={{ fontSize: '68px', color: '#3F64FF', marginTop: '10%' }} className="fa-brands fa-chrome"></i>
                                    <div style={{ marginTop: '3%', fontSize: '20px', fontWeight: '600' }}>Site</div>
                                    <div className="aboutContent contentContactMe">
                                        <a className="aboutContent" href="#" >My site</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe;