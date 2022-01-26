import React, { useEffect, useState } from 'react'
import './header.scss'
import styled from 'styled-components'
import { NavLink  } from 'react-router-dom'

const Header = ({ margin, black,position }) => {
    const [bg, setBg] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBg(true)
            } else {
                setBg(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })

    }, [])
    return (
        <Container className='header' b={bg} style={{ marginTop: `${margin}`, backgroundColor: `${black}`, position:`${position}` }}>
            <div className='header_wrapper'>
                <NavLink to='/' className="left_header"> Luxury Honeymoons</NavLink>
                <div className="right_header">
                    {/* <a className='navs'
                        href="/"
                        onClick={e => {
                            let inspiration = document.getElementById("inspiration");
                            e.preventDefault();  // Stop Page Reloading
                            inspiration && inspiration.scrollIntoView({ behavior: "smooth", block: "center"});
                        }}
                    >Inspiration</a> */}
                    <NavLink to='/inspiration' className="navs">Inspiration</NavLink>
                    <a href='#' className="navs">Honeymoons</a >
                    <a href='#' className="navs">Travel with Kids</a >
                    <a href='#' className="navs">Wellness Escapes</a >
                    <NavLink to='/aboutus' className="navs">About Us</NavLink >
                </div>
            </div>
        </Container>
    )
}


const Container = styled.div`
  width: 100%;
  height: 8rem;
  color: black;
  font-family: "Baloo 2", cursive;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition:all 300ms linear;
  background-color: ${props => props.b ? "black" : 'none'};
`

export default Header
