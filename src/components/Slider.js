import React from "react";
import { useEffect, useState } from "react";
import $ from 'jquery'

const Slider = () => {
    let [sliderHeight, setSliderHeight] = useState(null);

    useEffect(() => {
        const navbarHeight = $("#navbarID").height();
        const screenHeight = window.innerHeight;

        const height = screenHeight - navbarHeight + "px";
        if (!sliderHeight) {
            setSliderHeight({ height: `${height}` })
        }
        localStorage.setItem('screenHeightInPx', height)
        localStorage.setItem('navbarHeight', navbarHeight)
        localStorage.setItem('screenHeightNoNavbar', screenHeight - navbarHeight)

    }, [sliderHeight])


    //                  non funziona da mobile!! window.load non viene triggerato 
    // var TxtType = function (el, toRotate, period) {
    //     this.toRotate = toRotate;
    //     this.el = el;
    //     this.loopNum = 0;
    //     this.period = parseInt(period, 10) || 2000;
    //     this.txt = '';
    //     this.tick();
    //     this.isDeleting = false;
    // };

    // TxtType.prototype.tick = function () {
    //     var i = this.loopNum % this.toRotate.length;
    //     var fullTxt = this.toRotate[i];

    //     if (this.isDeleting) {
    //         this.txt = fullTxt.substring(0, this.txt.length - 1);
    //     } else {
    //         this.txt = fullTxt.substring(0, this.txt.length + 1);
    //     }

    //     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    //     var that = this;
    //     var delta = 200 - Math.random() * 100;

    //     if (this.isDeleting) { delta /= 2; }

    //     if (!this.isDeleting && this.txt === fullTxt) {
    //         delta = this.period;
    //         this.isDeleting = true;
    //     } else if (this.isDeleting && this.txt === '') {
    //         this.isDeleting = false;
    //         this.loopNum++;
    //         delta = 500;
    //     }

    //     setTimeout(function () {
    //         that.tick();
    //     }, delta);
    // };
    // window.onload = function () {
    //     var elements = document.getElementsByClassName('typewrite');
    //     for (var i = 0; i < elements.length; i++) {
    //         var toRotate = elements[i].getAttribute('data-type');
    //         var period = elements[i].getAttribute('data-period');
    //         if (toRotate) {
    //             new TxtType(elements[i], JSON.parse(toRotate), period);
    //         }
    //     }
    //     // INJECT CSS
    //     var css = document.createElement("style");
    //     css.type = "text/css";
    //     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    //     document.body.appendChild(css);
    // };

    if (window.matchMedia("(pointer: coarse)").matches) {
        var typeEffect = () => {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        }

        $(document).ready(function () {
            typeEffect()
        });
    } else {
        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
    }
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 30) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 4; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };





    if (sliderHeight) {
        return (
            <>
                <div style={sliderHeight} id="sliderChild" className="container-fluid">
                    <div className="row h-100">
                        <div className="col-1 col-lg-4 col-xl-2"></div>
                        <div id="sliderContent" className="col-10 col-lg-4 col-xl-8 text-center align-self-center">
                            <div id="sliderGreetening" className="text-center">HEY! I AM</div>
                            <div id="sliderMyName" className="text-center">Hamza Maimi</div>
                            <span > <h2 id="testoFisso">I'm a </h2></span>
                            <span id="testoVariabile" href="#" className="typewrite" data-period="100" data-type='[ "Frontend Developer!", "Backend Developer!", "Blogger!", "Coding Lover!" ]'>
                                <span className="wrap"></span>
                            </span>
                            {/* <span id="testoVariabilePhone">Web Developer!</span> */}
                        </div>
                        <div className="col-1 col-lg-4 col-xl-2"></div>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>

            </>
        )
    }
}

export default Slider