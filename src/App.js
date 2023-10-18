import React from "react"
import About from "./components/About"
import Slide from "./components/Slide"
import Links from "./components/Links"

export default function App(){
    return(
        <div className="container">
            <div className="app">
                <Links/>
                <Slide/>
                <About/>
            </div>
        </div>
    )
}