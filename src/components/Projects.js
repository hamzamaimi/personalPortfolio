import React from "react";
import { useEffect, useState } from "react";
import $ from 'jquery'

const Projects = () => {
    const [SliderAboutHeight, setSliderAboutHeight] = useState(null);
    const [SliderAboutHeightPx, setSliderAboutHeightPx] = useState(null);

    useEffect(() => {
        if (!SliderAboutHeight) {
            // console.log('sliderChild', $('#sliderChild').height())
            // console.log('aboutPage', $('#aboutPage').height())
            // console.log('technologies logo', $('#technologiesLogo').height())
            setSliderAboutHeight($('#sliderChild').height() + $('#aboutPage').height() + $('#technologiesLogo').height());
        }
        if (SliderAboutHeight) {
            if (!SliderAboutHeightPx) {
                localStorage.setItem('sliderAboutHeight', SliderAboutHeight)
                setSliderAboutHeightPx(SliderAboutHeight + 'px')
            }
        }
    }, [SliderAboutHeight])


    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > localStorage.getItem('sliderAboutHeight')) {
                if ($(window).scrollTop() < localStorage.getItem('altezza')) {
                    $('#nav-link-projects').addClass('onElementPage');
                    $('#nav-link-about').removeClass('onElementPage');
                    $('#nav-link-home').removeClass('onElementPage');
                }
            } else {
                $('#nav-link-projects').removeClass('onElementPage');

            }

        });

    });



    if (SliderAboutHeightPx) {
        return (
            <>
                <p id="selettoreProjectsSection"></p>
                <div id="projectsSection" className="container topBottomMargin10">
                    <div className="row">
                        <div className="col text-center">
                            <div id="projectsTitle" className="text-center"> My Projects </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center aboutContent" style={{ margin: '3% 0' }}>
                            <p>Una raccolta dei recenti progetti nei quali sono stato coinvolto</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 projectsColumns" >
                            <div /*id="wedoProject"*/ className="coomingSoon projectsBackGround">
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 projectsColumns">
                            <div /*id="tecchandoProject"*/ className="coomingSoon projectsBackGround">
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 projectsColumns">
                            <div className="projectsBackGround coomingSoon">

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 projectsColumns">
                            <div className="projectsBackGround coomingSoon">

                            </div>
                        </div>
                    </div>
                </div>
                <div id="technologiesProjects" className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-lg-3 text-center verticalMargin5">
                            <img className="technologiesImages" src="images/google.png" />
                        </div>
                        <div className="col-6 col-lg-3 text-center verticalMargin5">
                            <img className="technologiesImages" src="images/adobe.png" />
                        </div>
                        <div className="col-6 col-lg-3 text-center verticalMargin5">
                            <img className="technologiesImages" src="images/java.png" />
                        </div>
                        <div className="col-6 col-lg-3 text-center verticalMargin5">
                            <img className="technologiesImages" src="images/microsoft.png" />
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (<></>)
    }
}

export default Projects