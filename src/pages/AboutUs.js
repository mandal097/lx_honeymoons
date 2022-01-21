import React from 'react'
import styled from 'styled-components'
import AboutUsContent from '../components/AboutUsSections/AboutUsContents/AboutUsContent'
import About from '../components/AboutUsSections/AboutUsLandingPage.js/About'
import Header from '../components/Header/Header'
import Newsletter from '../components/NewsLetter/Newsletter'

const AboutUs = () => {

    return (
        <>
            <Container>
                <Header position='absolute'/>
                <About />
                <AboutUsContent />
                <Newsletter />
            </Container>
        </>
    )
}
const Container = styled.div`
height:100vh;
/* width:100%; */
overflow-y:scroll;
overflow-x:hidden;
position:relative;
`


export default AboutUs
