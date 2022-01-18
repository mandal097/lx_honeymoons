import React from 'react'
import './cards.scss'

const Cards = ({ h, img, p }) => {
    return (
        <div className="cards">
            <img src={img} alt="" />
            <span>{h}</span>
            <p>{p}</p>
        </div>
    )
}

export default Cards
