import React, { useState } from 'react'
import './plannningsection.scss'
import { FiPhoneCall } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import PlanningModal from '../PlanningModal/PlanningModal'
const PlanningSection = () => {
    const [show, setShow] = useState(false)

    const showModal = () => {
        switch (show) {
            case false:
                setShow(true);
                break;
            case true:
                setShow(false);
                break;
            default:
                setShow(false)
        }
    }

    return (
        <div className='planningSection'>
            {
                show &&
                <PlanningModal showModal={showModal} />
            }
            <div className="planningSection_wrapper">
                <p>We'll be in touch within 24 hours after you submit the form, matching you with a Travel Expert and setting up a time to talk – over email, phone or video call.</p>
                <div className="trip_enquiry">
                    <form className="trip_enquiry_left">
                        <div className="form">
                            <div className="trip_enquiry_left_top">
                                <span>YOUR TRIP</span>
                                <div className="right">Excellent</div>
                            </div>
                            <div className="input_div">
                                <label htmlFor="">Where would you like to go?</label>
                                <input type="text" placeholder='Write  the place where you want to visit' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">When would you like to go?</label>
                                <input className='half'  type="text" placeholder='Write  the place where you want to visit' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">How long for?</label>
                                <input className='half' type="text" placeholder='duration of trip' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">How many people are travelling?</label>
                                <input className='half' type="text" placeholder='Number of people wants to travel' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">Any other comments or requests?</label>
                                <textarea type="text" placeholder="Eg. special occasion , any must dos (or dont's)" ></textarea>
                            </div>
                        </div>
                        <div className="form">
                            <div className="trip_enquiry_left_top">
                                <span>YOUR DETAILS</span>
                                {/* <div className="right">Excellent</div> */}
                            </div>
                            <div className="input_div">
                                <label htmlFor="">Your name*</label>
                                <input type="text" placeholder='Write  your full name' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">Email address*</label>
                                <input type="text" placeholder='example@gmail.com' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">Confirm email address*</label>
                                <input type="text" placeholder='example@gmail.com' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">Telephone*</label>
                                <input className='half'  type="text" placeholder='Phone Number' />
                            </div>
                            <div className="input_div">
                                <label htmlFor="">How did you hear about us?</label>
                                <select name="" id="">
                                    <option value="">select an option</option>
                                    <option value="friend and family">Friend or family</option>
                                    <option value="i have enquired you before">I have enquired you before</option>
                                    <option value="i have travelled you before">I have travelled you before</option>
                                    <option value="newspaper or magazine">newspaper or Magazine</option>
                                    <option value="social media">Social Media</option>
                                    <option value="website or blog">Website or Blog</option>
                                    <option value="search engine"> Search Engine eg., google</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <small>Sign up for our newsletter and receive exclusive access to The Conversation - our regular interview series with the world's greatest travellers</small>
                            <div className="input_div">
                                <button>click to agree</button>
                            </div>
                            <div className="input_div">
                                <button className='submit_button'>submit enquiry</button>
                            </div>
                        </div>
                    </form>
                    <div className="trip_enquiry_right">
                        <div className="trip_enquiry_right_top">
                            <div className="icon_div"><FiPhoneCall /></div>
                            <span className="call">CALL US TODAY</span>
                            <span className='numb'>+44 808 280 8259</span>
                            <span className='span'>Call us today until 11.00pm</span>
                            <div className="icon_div"><BiTimeFive /></div>
                            <span className="call">OFFICE HOURS</span>
                            <span className='numb'>+44 808 280 8259</span>
                            <span className="timings">Monday - Friday | 9am - 11.00pm GMT
                                (excluding national holidays)</span>
                        </div>
                        <div className="trip_enquiry_right_top relative">
                            <div className="circle">
                                <img src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            </div>
                            <span >Flexible booking terms – including 100% refunds up to 30 days before departure</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_div">
                <p>Package holidays are sold by Black Tomato as an agent for Hays Tour Operating Ltd, ATOL 10531. <br />
                    Please see our booking conditions for more information. © 2022 Black Tomato.</p>
                <div className="callback" onClick={showModal}>Call Me <br /> Back</div>
            </div>
        </div>
    )
}

export default PlanningSection

