import React from 'react'
import './aboutUsContent.scss'
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from 'react/cjs/react.development';
import Player from '../Player'
import {
    CaretRightFilled
} from '@ant-design/icons'

Aos.init()
const AboutUsContent = () => {
    const [showPlayer, setShowPlayer] = useState(false)

    const handlePlayer = () => {
        switch (showPlayer) {
            case false:
                setShowPlayer(true)
                break;
            case true:
                setShowPlayer(false)
                break;
            default:
                setShowPlayer(false)
        }
    }
    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // });
    return (
        <>
            {
                showPlayer && <Player handlePlayer={handlePlayer} />
            }
            <div className='about_us_contents' id='scroll'>
                <div className='about_us_contents_wrapper'>
                    <div className="about_us_contents_wrapper_top" >
                        <div className="about_us_contents_wrapper_top_section" id='a'>
                            <div className="about_us_contents_wrapper_top_section_img_vid "
                            >
                                <img
                                    className='img_vid'
                                    src='https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="img"
                                    style={{ height: '80vh' }}
                                />
                            </div>
                            <div className="about_us_contents_wrapper_top_section_content">
                                <h3>A BIT ABOUT US</h3>
                                {/* <span>kichbbbbajdghkjakjgdbjabgj</span> */}
                                <p>So who are we? Well, we are a team of people in the know (about travel). And we’re passionate about detail and service. Combine these, and you come out with our one simple, sole purpose – to encourage and indulge your curiosity about the world and to ensure that your time away is perfect.
                                    We know that it’s incredibly important to spend your time off well. We’ve been there. It’s why our founders (who were presented with this exact problem in the early 2000s when trying to plan their own travels) went on to create Black Tomato. So it’s safe to say that your precious time off is safe in our hands, because we understand how every moment counts. You don’t want to miss a single thing – down to the last song before the sun sets, being played on a battered piano in our favourite hidden cave bar in Puglia.</p>
                            </div>
                        </div>
                        <div className="about_us_contents_wrapper_top_section">
                            <div className="about_us_contents_wrapper_top_section_content">
                                <p>So our role is to make sure that your travels are filled with moments like these. With us, you 'll see a destination in a different light -  through the Black Tomato lens - and discover things you won't find out about any other way.
                                    Equally, if you're not sure where to travel but you do feel the need to escape, give yourself a treat or a challenge, or learn something new… we can arrange that too. Our advice is full of insight and inspiration, carefully curated to suit you. So is your bespoke itinerary.</p>
                            </div>
                            <div className="about_us_contents_wrapper_top_section_img_vid">
                                <img
                                    className='img_vid '
                                    src='https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="img"
                                    style={{ height: '40vh' }}
                                />
                                <div className="playerBtn" onClick={handlePlayer}><CaretRightFilled className='icon' /></div>
                                <div className="playerTxt">Play me</div>
                            </div>
                        </div>
                        <div className="about_us_contents_wrapper_top_section">
                            <div className="about_us_contents_wrapper_top_section_img_vid "
                            >
                                <img
                                    className='img_vid'
                                    src='https://images.unsplash.com/photo-1625869209989-058821f6c125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVscyUyMGZvciUyMGNvdXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="img"
                                    style={{ height: '45vh' }}
                                />
                            </div>
                            <div className="about_us_contents_wrapper_top_section_content">
                                <p>Since we began, we have ploughed new furrows with our independent, innovative approach. We’re inspired by our own restless curiosity about the world and our passion for service that’s creatively shaped around individuals. People like you, basically; and like  <br />
                                    We’re on the same page: ready and waiting to start writing your travel story.</p>
                            </div>
                        </div>
                        <div className="about_us_contents_wrapper_top_section">
                            <div className="about_us_contents_wrapper_top_section_content">
                                <h3>THE NEW FACE OF TRAVEL</h3>
                                <p>They went on to launch Black Tomato in 2005 with the aim of building a travel company and brand which exactly reflected the needs, desires and personalities of the potential clients they knew were out there. Basically, they themselves were the prototype client. Not long after they started, Condé Nast Traveller highlighted Black Tomato as being the people who were changing the way we think about travel, and GQ wrote: “Black Tomato are one of the coolest things in the world. Don’t even try to live without them”. People were noticing – and travelling a new way. With us. <br />
                                    Ever since then, it has been the needs of our clients that have shaped our company roadmap. With many of them working in the City of London, we moved to Shoreditch in 2009 as we loved the way it straddled the creative and business communities. Very like us, in fact. We installed a bar, decorated the office with graffiti art and encouraged clients to drop in for a drink and roll out a map. They loved it – it was virtual escapism, followed by an actual escape. We then went on to open an office in New York in 2013, as we began to look after the travel needs of more and more Americans.</p>
                            </div>
                            <div className="about_us_contents_wrapper_top_section_img_vid">
                                <img
                                    className='img_vid'
                                    src='https://images.unsplash.com/photo-1580913709631-8de3edebfd2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vbnVtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="img"
                                    style={{ height: '90vh' }}
                                />
                            </div>
                        </div>
                        <div className="about_us_contents_wrapper_top_section">
                            <div className="about_us_contents_wrapper_top_section_img_vid">
                                <img
                                    className='img_vid'
                                    src='https://images.unsplash.com/photo-1601614064799-7667efadb7ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXhwbG9yaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="img"
                                    style={{ height: '90vh' }}
                                />
                            </div>
                            <div className="about_us_contents_wrapper_top_section_content">
                                {/* <h3>THE NEW FACE OF TRAVEL</h3> */}
                                <p>The scope of what we did evolved from headline-grabbing expeditions to Everest to all kinds of travel experiences. From honeymoons and safaris to gourmet tours and multigenerational trips. Not that we abandoned expeditions – far from it. We launched Epic Tomato to take care of those. And then we started Black Tomato Agency to specialise in groups and adventurous corporate travel and with the subsequent launch of Studio Black Tomato, we have brought our point of view to creative and design projects that are not even necessarily based around travel. So it’s fair to say that in comparison to 2005 the Black Tomato Group looks quite different.</p>
                            </div>
                        </div>
                        <div className="about_us_contents_wrapper_top_section">
                            <div className="about_us_contents_wrapper_top_section_content">
                                <h3>A BRIGHTLY-BURNING PASSION</h3>
                                <p>A company now numbering over 80 employees all over the world, we maintain our pioneering culture. We’re constantly dreaming up exceptional new experiences and innovative services to enhance our clients’ lives. We send staff around the world on recce trips, and we scoop up brilliant information direct from our destinations – all the timely tips you probably won’t find in a guidebook. We know that sound, incisive knowledge is one of the keys to providing the transformative experiences for which we are known and loved.
                                    <br />
                                    To this day we have never produced a printed brochure of fixed itineraries. Everything we do is bespoke, led by the needs and desires of our clients. That said, we have won many awards for ‘best travel website’, and we hope you’ll find it a useful portal for inspiration to start you off. We promise it’s filled with our teams’ ideas and insight and will be a good starting place. Our three co-founders are still fully involved in the business, inspiring everything we do. Through them, our passion burns as brightly as ever.</p>
                            </div>
                            <div className="about_us_contents_wrapper_top_section_img_vid">
                                <img
                                    className='img_vid'
                                    src='https://images.unsplash.com/photo-1617168025020-d300a4b192ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVscyUyMHdpdGglMjBwbGFuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt="img"
                                    style={{ height: '90vh' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bannner">
                    <div className="banner_content_div">
                        <h3>WHY THE NAME?</h3>
                        <p>Well, it was on a trip to Moscow that Tom, James and Matt accidentally alighted on what would become the name of their company. <br />
                            One evening, somewhere in the backstreets, Tom encountered the black tomato on a menu. When he asked about it, a proud Russian local told him he should never pass up the chance to enjoy this ‘rare and wonderful’ tasting experience. <br />
                            Inspired by the moment, Tom relayed this conversation to his friends and they resolved to become the Black Tomato of the travel world: a company offering rare and wonderful experiences. We want your trip to represent exactly that same thing for you: a unique experience so personal and meaningful that you’ll remember it forever.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsContent
