import React from 'react'
import './newsletter.scss'

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaPhone
} from 'react-icons/fa'

const Newsletter = () => {
    return (
        <div className='news_letter'>
            <div className="news_letter_wrapper">
                <div className="news_letter_wrapper_left">
                    <h3>CURIOUS ABOUT TRAVEL?</h3>
                    <p>Inspiring travel content and advice from our experts delivered straight to your inbox.</p>
                    <div className="news_letter_email_div">
                        <form action="">
                            <input type="text" placeholder='email address here*' />
                            <button type='submit'> Sign up</button>
                        </form>
                    </div>
                    <div className="news_letter_socialhandles">
                        <h3>FOLLOW US ON SOCIAL</h3>
                        <div className="icons_div">
                            <div className="icons"><FaInstagram /></div>
                            <div className="icons"><FaFacebookF /></div>
                            <div className="icons"><FaYoutube /></div>
                        </div>
                    </div>
                </div>
                <div className="news_letter_wrapper_right">
                    <div className="news_letter_wrapper_right_left">
                        <span className="links">Credentials</span>
                        <span className="links">Memberships</span>
                        <span className="links">Planning </span>
                    </div>
                    <div className="news_letter_wrapper_right_right">
                        <h3>Reach Us</h3>
                        <span><FaPhone className='phone' /> (+91) 9899699991</span>
                        <span><FaPhone className='phone'/> (+91) 9810006187</span>
                        <span className='at'>© 2012-2013 by Luxury Honeymoons.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
