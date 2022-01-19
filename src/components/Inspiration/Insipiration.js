import React, { useState } from 'react'
import './Insp.scss'
import { hotels } from '../../dummydata/hotelsImg'
import {
    ArrowRightOutlined 
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const Insipiration = () => {
    const [num, setNum] = useState(4)
    const navigate = useNavigate()

    const handleClick = () => {
        switch (num) {
            case 4:
                setNum(hotels.length);
                break;
            case hotels.length:
                setNum(4);
                break;
            default:
                setNum(4)
        }
    }

    const Odata = hotels.slice(0, num)

    return (
        <div className='inspiration' id='inspiration'>
            <div className="inspiration_wrapper">
                <h1>Our Destination</h1>
                <div className="destination_div">
                    <div className="destination_div_left">
                        <div className="destination_div_left_video">
                            <img src="https://images.unsplash.com/photo-1631173382799-9684c384ae40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwZGVzdGluYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="country_name">Italy</div>
                        </div>
                    </div>
                    <div className="destination_div_right">
                        <div className="destination_div_right_img">
                            <img src="https://images.unsplash.com/photo-1629892638407-7347f9d93773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            <div className="country_name">dubai</div>
                        </div>
                        <div className="destination_div_right_img">
                            <img src="https://media.istockphoto.com/photos/santorini-greece-picturesq-view-of-traditional-cycladic-santorini-on-picture-id929135598?b=1&k=20&m=929135598&s=170667a&w=0&h=Yv0PerkgkrkB6NcLH2uNzFXgeaw8CViuClYgavM3aiQ=" alt="" />
                            <div className="country_name">france</div>
                        </div>
                    </div>
                </div>
                <h1>Hotels Highlights</h1>
                <div className="hotels_highlight">
                    <div className="hotels_highlights">
                        {
                            Odata.map(i => (
                                <div id={i.id} className="hotel_highlights_card">
                                    <img src={i.img} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="more" onClick={handleClick}>{num===4?"See More..":" See Less.."}</div>
                    <div
                    onClick={()=>navigate('/inspiration')}
                    className="go_to_inspiration_page">
                        see more details about hotels and their description <ArrowRightOutlined className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insipiration
