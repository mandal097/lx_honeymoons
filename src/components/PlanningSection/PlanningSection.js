import React from 'react'
import './plannningsection.scss'
const PlanningSection = () => {
    return (
        <div className='planningSection'>
            <div className="planningSection_wrapper">
                <p>We'll be in touch within 24 hours after you submit the form, matching you with a Travel Expert and setting up a time to talk – over email, phone or video call.</p>
                    <div className="trip_enquiry">
                        <div className="trip_enquiry_left">
                            <div className="trip_enquiry_left_top">
                                <span>YOUR TRIP</span>
                                <div className="right">Excellent</div>
                            </div>
                            <form action="">
                                <div className="input_div">
                                    <label htmlFor="">Where would you like to go?</label>
                                    <input type="text" placeholder='' />
                                </div>
                            </form>
                        </div>
                        <div className="trip_enquiry_right"></div>
                    </div>
            </div>
        </div>
    )
}

export default PlanningSection
