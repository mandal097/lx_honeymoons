import React from 'react'
import './landingpage.scss'
import { NavLink } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='landing_page'>
            <div className="background">
                <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzJTIwbHV4dXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="landing_page_wrapper">
                <div className="landing_page_content">
                    <h3>Your personal travel assistant.</h3>
                    <p>Origin teams the warmth of human experts with the efficiency <br /> of tech to create seamless, original travel.</p>
                    {/* <button>inspire me</button> */}
                    <NavLink className="button" to='/planning'>start planning here</NavLink>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
