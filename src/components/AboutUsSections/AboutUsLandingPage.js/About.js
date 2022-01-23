import React from 'react'
import './about.scss'
import {
    ArrowDownOutlined 
} from '@ant-design/icons'
const About = () => {
    return (
        <div className='about_landingPage' id='aboutus'>
            <div className="about_landingPage_wrapper">
                <div className="about_landingPage_wrapper_top">
                    <h3>WELCOME</h3>
                    <p>We’re Black Tomato: award-winning creators of unique, perfectly-tailored travel experiences. Perhaps an unlikely name for a travel company, but please keep reading and we’ll explain what it all means.</p>
                </div>
                <div className="about_landingPage_wrapper_bottom">
                    <a
                        className="scrollText"
                        href="/"
                        onClick={e => {
                            let scroll = document.getElementById("scroll");
                            e.preventDefault();  // Stop Page Reloading
                            scroll && scroll.scrollIntoView({ behavior: "smooth", block: "start" })
                        }}
                    >Scroll Down</a>
                    <div className="scroll_bar"><ArrowDownOutlined className='scroll'/></div>
                </div>
            </div>
        </div>
    )
}

export default About
