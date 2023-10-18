export default function About(){
    return(
        <div className="about">
            <img className="aboutDark" src={`${process.env.PUBLIC_URL}/asset/images/aboutDark.jpg`} alt="" />
            <div className="about_description">
                <h3 className="aboutH1 aboutFur">ABOUT OUR FURNITURE</h3>
                <p className="aboutP">
                    Our multinational collection blends design and function 
                    to suit your individual taste. Make each room unique, or
                    pick a cohesive theme that best express your intrests and
                    what inspires you. Find the furniture pieces you need, from 
                    traditional to contemporary styles or anything in between. 
                    Product specialists are available to help you create your 
                    dream space.
                </p>
            </div>
            <img className="aboutLight" src={`${process.env.PUBLIC_URL}/asset/images/aboutLight.jpg`} alt="" />
        </div>
    )
}