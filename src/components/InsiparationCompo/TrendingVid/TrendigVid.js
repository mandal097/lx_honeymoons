import React, { useState } from 'react';
import './trendingvid.scss'
import {
    CaretRightFilled
} from '@ant-design/icons'
import Player from '../../Player';
const TrendigVid = () => {
    const [showPlayer, setShowPlayer] = useState(false)
    const [url, setUrl] = useState('')

    const handleFirst = () => {
        setShowPlayer(true)
        setUrl('https://youtu.be/67OESjTjF10')
    }
    const handleSecond = () => {
        setShowPlayer(true)
        setUrl('https://youtu.be/bavCPvWhLGU')
    }
    const handleThird = () => {
        setShowPlayer(true)
        setUrl('https://youtu.be/5Vc9wQIOkew')
    }
    return (
        <div className='trending_vid'>
            {
                showPlayer && <Player setShowPlayer={setShowPlayer} url={url} />
            }
            <div className="trending_vid_wrapper">
                <div className="trending_vid_wrapper_top">
                    <h3>videos</h3>
                    <p>Browse the videos created by our team of constant travellers and some favourites we've discovered along the way.</p>
                </div>
                <div className="trending_vid_wrapper_bottom">
                    <div className="trending_bottom_card" onClick={handleFirst}>
                        <img src="https://images.unsplash.com/file-1635809686961-0440cea0b2fdimage" alt="" />
                        <div className="controls_button">
                            <div className="controls_icon"><CaretRightFilled className='icon' /></div>
                        </div>
                    </div>
                    <div className="trending_bottom_card" onClick={handleSecond}>
                        <img src="https://images.unsplash.com/photo-1641820395583-c8e22c4ca9e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJzJTIwZXhwZXJpYW5jZSUyMGZvciUyMGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="controls_button">
                            <div className="controls_icon"><CaretRightFilled className='icon' /></div>
                        </div>
                    </div>
                    <div className="trending_bottom_card" onClick={handleThird}>
                        <img src="https://images.unsplash.com/photo-1641819515634-ee9bab247951?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJzJTIwZXhwZXJpYW5jZSUyMGZvciUyMGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className="controls_button">
                            <div className="controls_icon"><CaretRightFilled className='icon' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default TrendigVid;
