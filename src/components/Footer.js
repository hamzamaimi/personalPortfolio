import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div id="footer" className="container-fluid">
                <div className="row" style={{ color: 'white' }}>
                    <div className="col-12 verticalMargin5 col-lg-4">
                        <div className="row paddingAboutFooter" >
                            <div className="col-12 bottomMargin10 footerTitles">About</div>
                            <div className="col-12 footerText">
                                Hamza Maimi,<br /> web developer e appassionato di informatica.
                                Si proprio cosi, programmare e acquisire nuove conoscenze legate all’ IT mi diverte, anche molto!
                                Questo è un piccolo esempio dei lavoretti che faccio nel tempo libero.
                                Il sito è basato sul framework reactJS e potete consultarne il codice su git
                                <a id="repoLink" style={{ display: 'block', textAlign: 'center' }} href="https://gitlab.com/hamzamaimi/myportfolio">Repository </a>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-3 col-lg-3 verticalMargin5 text-center">
                                <a href="https://www.linkedin.com/in/hamza-maimi-37415620b">
                                    <img style={{ borderRadius: '50%', height: '50px' }} src="images/linkedinIcon.gif" />
                                </a>
                            </div>
                            <div className="col-3 col-lg-1"></div>
                            <div className="col-3 col-lg-3 verticalMargin5 text-center">
                                <a href="https://twitter.com/Hamza_Maimi">
                                    <img style={{ borderRadius: '10%', height: '50px' }} src="images/twitterIcon.gif" />
                                </a>
                            </div>
                            <div className="col-1"></div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 verticalMargin5 col-lg-4">
                        <div className="row paddingAboutFooter">
                            <div className="col-12 bottomMargin10 footerTitles">Links</div>
                            <ul className="ulFooter">
                                <li>
                                    <a href="#" className="footerText">
                                        <i className="fa-solid fa-arrow-right" style={{ marginRight: '10px' }} />
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#aboutPage" className="footerText">
                                        <i className="fa-solid fa-arrow-right" style={{ marginRight: '10px' }} />
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#selettoreProjectsSection" className="footerText">
                                        <i className="fa-solid fa-arrow-right" style={{ marginRight: '10px' }} />
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#contactMeSelector" className="footerText">
                                        <i className="fa-solid fa-arrow-right" style={{ marginRight: '10px' }} />
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <Link to="/blog" className="footerText">
                                        <i className="fa-solid fa-arrow-right" style={{ marginRight: '10px' }} />
                                        My Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 verticalMargin5 col-lg-4">
                        <div className="row">
                            <div className="col-12 text-center bottomMargin10 footerTitles">Have a Question?</div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col text-center footerText">
                                        <i style={{ fontSize: '18px', color: 'white', marginRight: '15px' }} className="fa-solid fa-location-dot "></i>
                                        Modena 41059 ITALY
                                    </div>
                                </div>
                                <div className="row marginTop10">
                                    <div className="col-11 text-center footerText">
                                        <i style={{ fontSize: '18px', color: 'white', marginRight: '15px', marginLeft: '8%' }} className="fa-solid fa-phone"></i>
                                        <a className="footerText" href="tel:+39-3392579431">+39 339-2579431</a>
                                    </div>
                                </div>
                                <div className="row marginTop10">
                                    <div className="col-11 text-center footerText">
                                        <i style={{ fontSize: '18px', color: 'white', marginRight: '15px', marginLeft: '12%' }} className="fa-solid fa-envelope"></i>
                                        <a className="footerText" href="mailto:hamzamaimi@gmail.com">hamzamaimi@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-12">
                                <div className="row">
                                    <div className="col-1 align-self-center">
                                        <i style={{ fontSize: '18px' }} className="fa-solid fa-location-dot"></i></div>
                                    <div className="col-11 footerText">Modena 41059 ITALY</div>
                                </div>
                                <div className="row marginTop10">
                                    <div className="col-1 align-self-center"><i style={{ fontSize: '18px' }} className="fa-solid fa-phone"></i></div>
                                    <div className="col-11 footerText">
                                        <a className="footerText" href="tel:+39-3392579431">+39 339-2579431</a>
                                    </div>
                                </div>
                                <div className="row marginTop10">
                                    <div className="col-1 align-self-center"><i style={{ fontSize: '18px' }} className="fa-solid fa-envelope"></i></div>
                                    <div className="col-11 footerText">
                                        <a className="footerText" href="mailto:hamzamaimi@gmail.com">hamzamaimi@gmail.com</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer; 