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
        console.log(sliderHeight)
    }, [sliderHeight])

    if (sliderHeight) {
        return (
            <>
                <div style={sliderHeight} id="sliderChild" className="container-fluid">
                    <div className="row align-self-center">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 text-center">metà centro</div>
                        <div className="col-lg-4"></div>
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