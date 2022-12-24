import React from "react"
import Info from"../../myReactProfile/src/components/Info";
import About from"../../myReactProfile/src/components/About";
import Interests from "../../myReactProfile/src/components/Interests";
import Footer from "../../myReactProfile/src/components/Footer";


 function App(){
    return(
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App