import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import InspirationLandingPage from '../components/InsiparationCompo/InspirationLandingPage/InspirationLandingPage'
import Trending from '../components/InsiparationCompo/Trending/Trending'
import TrendigVid from '../components/InsiparationCompo/TrendingVid/TrendigVid'
import Newsletter from '../components/NewsLetter/Newsletter'
import Planning from '../components/Planning/Planning'
const Inspiration = () => {
    return (
        <Container>
            <Header position='absolute' />
            <InspirationLandingPage />
            <Trending />
            <TrendigVid />
            <Planning />
            <Newsletter />
        </Container>
    )
}


const Container = styled.div`
/* height:100vh; */
width:100%;
/* overflow-y:scroll; */
overflow-x:hidden;
position:relative;
`

export default Inspiration
