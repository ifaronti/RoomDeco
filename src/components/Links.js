import React, {useState} from "react"

export default function Links(){
    let [toShow, setToShow] = useState(false)

    function showLinks(){
        setToShow(prevToShow => !prevToShow)
    }

    return(
        <div className="links">
            <div className={toShow ? 'links_nav': 'nav_links'}>
                <p className="room linkP">room</p>
                <p className="linkP">home</p>
                <p className="linkP">shop</p>
                <p className="linkP">about</p>
                <p className="linkP">contact</p>
            </div>
            <div onClick={showLinks} className='theBars'>
                <div  className={toShow ? 'bars':"flipBars"}></div>
                <div  className={toShow ? 'bars':"flipBars"}></div>
                <div  className={toShow ? 'bars':"flipBars"}></div>
            </div>
        </div>
    )
}