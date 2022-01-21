import React from 'react'
import styled from 'styled-components'
import AboutUsContent from '../components/AboutUsSections/AboutUsContents/AboutUsContent'
import About from '../components/AboutUsSections/AboutUsLandingPage.js/About'
import Header from '../components/Header/Header'
import Newsletter from '../components/NewsLetter/Newsletter'
import Planning from '../components/Planning/Planning'

const AboutUs = () => {
    return (
        <Container>
            {/* <Planning  /> */}
            <Header />
            <About />
            <AboutUsContent />
            <Newsletter />
        </Container>
    )
}
const Container = styled.div`
/* height:100vh; */
width:100%;
/* overflow-y:scroll; */
overflow-x:hidden;
`

export default AboutUs
