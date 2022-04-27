import React from "react";

const Projects = () => {
    return (
        <>
            <p id="selettoreProjectsSection"></p>
            <div id="projectsSection" className="container-fluid projectsVerticalMargin">
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
                    <div className="col-12 col-md-6 col-lg-4"></div>
                    <div className="col-12 col-md-6 col-lg-4"></div>
                    <div className="col-12 col-md-6 col-lg-4"></div>
                    <div className="col-12 col-md-6 col-lg-4"></div>
                </div>
            </div>
        </>
    )
}

export default Projects