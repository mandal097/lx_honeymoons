import React from 'react'
import './planningheader.scss'
import { NavLink } from 'react-router-dom'
const Planningheader = () => {
    return (
        <div className='planning_header'>
            <div className="planning_header_wrapper">
                <NavLink to='/' className="logo">Luxury Honeymoons</NavLink>
                <div className="right_side">
                    <p>CALL US: WE'RE OPEN UNTIL 11.00PM TODAY</p>
                    <div className="contact_number">+91 8826764772</div>
                </div>
            </div>
        </div>
    )
}

export default Planningheader
