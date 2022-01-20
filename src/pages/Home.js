import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Insipiration from '../components/Inspiration/Insipiration'
import LandingPage from '../components/LandingPage/LandingPage'
import Membership from '../components/Membership/Membership'
import Newsletter from '../components/NewsLetter/Newsletter'
import Planning from '../components/Planning/Planning'
const Home = () => {
    return (
        <Container>
            <Planning fixed='fixed' />
            <Header margin="70px" />
            <LandingPage />
            <Insipiration />
            <HowItWorks />
            <Membership />
            <Newsletter />
        </Container>
    )
}

const Container = styled.div`

`

export default Home
