import React from 'react'
import Cards from '../MembersipCards/Cards'
import './membership.scss'
const Membership = () => {
    return (
        <section className='membership'>
            <div className="membership_wrapper">
                <h1>One membership, a whole world of travel.</h1>
                <div className="membership_card_div">
                    <Cards
                     img='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' 
                     h='Unlimited trip planning'
                     p='Long vacations, short trips, or business travel – just let us know and we make it happen.'
                     />                 
                    <Cards 
                    img='https://media.istockphoto.com/photos/woman-using-laptop-on-the-terrace-of-resort-hote-picture-id1196030674?b=1&k=20&m=1196030674&s=170667a&w=0&h=563BEijPwQe8qFIFRa5zvacS_dV7e9ww36fBSabZlGk='
                    h='24/7 curator support'
                    p='Origin travel curators are always there when you need support, inspiration or recommendations.'
                   />                 
                    <Cards
                    img='https://media.istockphoto.com/photos/view-of-melia-santiago-de-cuba-hote-picture-id1311439551?b=1&k=20&m=1311439551&s=170667a&w=0&h=PCa6HmR8MmzWJxc4m7qm3C2dfXQMtai3MpBoHabK3FI='
                    h='Hassle-free travel'
                    p='Flights, accommodation, experiences and more – we’ll arrange it all, with our end-to-end service.'
                    />                 
                </div>
            </div>
        </section>
    )
}

export default Membership
