import React from "react";

import Slider from "./components/Slider";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            <Slider navBar={<NavBar />} />
        </>
    )
}

export default App