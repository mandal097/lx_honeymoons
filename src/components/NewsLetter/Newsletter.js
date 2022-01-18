import React from 'react'
import './newsletter.scss'

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube
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
                    <img src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Newsletter
