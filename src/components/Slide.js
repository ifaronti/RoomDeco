import React, {useState } from "react";
import useStyleMediaQuery from './UseQuery'
import slideData from './slideData'

export default function Slide(){
    let [current, setCurrent] = useState(0)
    let length = slideData.length

    const { matches: isMobile } = useStyleMediaQuery({ mixOrMax: 'max', widthOrHeight: 'width', value: 768 });
    const { matches: isBigger } = useStyleMediaQuery({ mixOrMax: 'min', widthOrHeight: 'width', value: 900 });

    function nextImg(){
        setCurrent(current === length -1 ? 0: current + 1)
    }
    function prevImg(){
        setCurrent(current === 0 ? length -1: current - 1)
    }

    return(
        <div className="herosection">
            <div className="sliderBtn">
                <button onClick={prevImg} className="leftBtn allBtn"><img src={`${process.env.PUBLIC_URL}/asset/images/left.svg`} alt="" /></button>
                <button onClick={nextImg} className="rightBtn allBtn"><img src={`${process.env.PUBLIC_URL}/asset/images/right.svg`} alt="" /></button>
            </div>
            {slideData.map((slide, index) =>{
                return(
                    <div className="topSection">
                        {index === current && 
                            <div className="pics_description">
                                {isMobile && <img className="heroImg" src={slide.mobileImage} alt=""/>}
                                {isBigger && <img className="heroImg" src={slide.image} alt=""/>}
                                <div className="descriptionDiv">
                                    <h1 className="heroH1 heros">{slide.header}</h1>
                                    <p className="heroP heros">{slide.description}</p>
                                    <p className="shop heros">SHOP NOW <img src={`${process.env.PUBLIC_URL}/asset/images/arrow.svg`} alt="" /></p>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}