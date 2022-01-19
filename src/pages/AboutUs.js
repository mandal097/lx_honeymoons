import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Planning from '../components/Planning/Planning'

const AboutUs = () => {
    return (
        <Container>
            <Planning fixed='fixed'/>
            <Header />
        </Container>
    )
}
const Container = styled.div`
height:100vh;
width:100%;
overflow-y:scroll;
overflow-x:hidden;
`

export default AboutUs
