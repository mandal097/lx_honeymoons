import React from 'react';
import './trending.scss'
import { places } from '../../../dummydata/inspiration'
const Trending = () => {
    return (
        <div className='trending'>
            <div className="trending_wrapper">
                <div className='h'>trending now</div>
                <div className="trending_cardsdiv">
                    {
                        places.map(i => (

                            <div key={i.id} className="trending_card">
                                <div className="trending_img">
                                    <img src={i.img} alt="" />
                                </div>
                                <div className="place">places | {i.place}</div>
                                <div className="details">{i.about}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Trending;
