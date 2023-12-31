import $ from 'jquery'
import { Link } from "react-router-dom";


const NavBar = (props) => {
    function download() {
        if (window.confirm('Vuoi scaricare il mio curriculum?')) {
            collapse();
            var a = document.createElement('a');
            a.setAttribute('href', 'documents/HamzaMaimiCurriculum.pdf');
            a.setAttribute('download', 'HamzaMaimiCurriculum');

            var aj = $(a);
            aj.appendTo('body');
            aj[0].click();
            aj.remove();
        }

        return false;
    }
    const collapse = () => {
        // $('.navbar-collapse').collapse('hide');
        $('#navbarSupportedContent').removeClass('show')
    }


    return (
        <>
            {/* <div className="row sticky-top">
                    <div className="col-xl-2"></div>
                    <span href="#" id="navBarItemBrand" className="col-1 col-xl-1 text-center navBarBrand align-self-center">
                        <img id="navBarLogo" src="images/emptyTag.png" alt="logo image" />
                        <span className="align-self-center" style={{ fontFamily: 'Brush Script MT', fontSize: '2rem' }}>HM</span>
                    </span>
                    <div className="col-1 col-xl-2 text-center"></div>
                    <a href="#" className="col text-center navBarItem align-self-center">Home</a>
                    <a href="#" className="col text-center navBarItem align-self-center">About</a>
                    <a href="#" className="col text-center navBarItem align-self-center">Resume</a>
                    <a href="#" className="col text-center navBarItem align-self-center">Services</a>
                    <a href="#" className="col text-center navBarItem align-self-center">Projects</a>
                    <a href="#" className="col text-center navBarItem align-self-center">My Blog</a>
                    <a href="#" className="col text-center navBarItem align-self-center">Contact</a>
                    <div className="col-xl-2"></div>
                </div> */}

            <nav id="navbarID" className="navbar navbar-expand-lg sticky-top">

                <span href="#" className="navbar-brand text-center align-self-center">
                    {/* <img id="navBarLogo" src="images/emptyTag.png" alt="logo image" /> */}
                    <div id="navbarLogoDescription" className="align-self-center">HM</div>
                </span>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon" /> */}
                    <i style={{ color: 'white' }} className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item text-center">
                            <a onClick={collapse} href="#root" id="nav-link-home" className="nav-link onElementPage">Home</a>
                        </li>
                        <li className="nav-item text-center">
                            <a onClick={collapse} href="#aboutPage" id="nav-link-about" className="nav-link">About</a>
                        </li>
                        {/* <li className="nav-item text-center">
                            <a onClick={collapse} href="#" id="nav-link-services" className="nav-link">Services</a>
                        </li> */}
                        <li className="nav-item text-center">
                            <a onClick={collapse} href="#selettoreProjectsSection" id="nav-link-projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item text-center">
                            <a onClick={collapse} href="#contactMeSelector" id="nav-link-contact" className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item text-center">
                            <a onClick={download} href="#navbarID" className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item text-center">
                            <a href='https://tecchando.it/' onClick={collapse} id="nav-link-myblog" className="nav-link">My Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default NavBar;