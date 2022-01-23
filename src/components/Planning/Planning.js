import React from 'react'
import { NavLink } from 'react-router-dom'
import './planning.scss'
const Planning = ({fixed}) => {
    return (
        <div className='planning' style={{position:`${fixed}`}}>
            <div className="planning_wrapper">
                <div className="planning_left">
                    <div className="logo">Luxury <br /> Honeymoons </div>
                    <span className="contact_no">+91 8826764772</span>
                    <p className='timing'>We're open today until 11.00pm GMT</p>
                </div>
                <div className="planning_right">
                    <NavLink className="button" to='/planning'>start planning here</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Planning
