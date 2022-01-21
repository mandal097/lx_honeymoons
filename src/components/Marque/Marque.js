import React from 'react';
import './marque.scss'
import Marquee from 'react-fast-marquee'
const Marque = () => {
    return <div className='marque'>
        <div className="marque_wrapper">
            <Marquee
                className='marquee'
                style={{
                    height: '100%',
                    width: '100%',
                    overflow: 'hidden'
                }}
                gradient={false}
                pauseOnHover={false}
                speed={80}
                loop={0}
                delay={0}
            >
                <div className="marq_div">
                    <img src="https://zircog.com/wp-content/uploads/2018/04/logo2.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="	https://zircog.com/wp-content/uploads/2018/04/logo1.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="	https://zircog.com/wp-content/uploads/2018/04/logo3.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="https://zircog.com/wp-content/uploads/2018/04/logo4.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="	https://zircog.com/wp-content/uploads/2018/04/logo3.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="https://zircog.com/wp-content/uploads/2018/04/logo2.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="	https://zircog.com/wp-content/uploads/2018/04/logo1.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="	https://zircog.com/wp-content/uploads/2018/04/logo3.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="https://zircog.com/wp-content/uploads/2018/04/logo4.png" alt="" />
                </div>
                <div className="marq_div">
                    <img src="	https://zircog.com/wp-content/uploads/2018/04/logo3.png" alt="" />
                </div>
            </Marquee>
        </div>
    </div>;
};

export default Marque;
