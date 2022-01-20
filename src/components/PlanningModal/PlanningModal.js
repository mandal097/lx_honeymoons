import React from 'react'
import styled from 'styled-components'
import {
    CloseOutlined
} from '@ant-design/icons'
const PlanningModal = ({ showModal }) => {
    return (
        <Container >
            <Wrapper>
                <LogoDiv>Logo here</LogoDiv>
                <Cancel onClick={showModal}><CloseOutlined /></Cancel>
                <Top>
                    <H2>Ready to chat?</H2>
                    <Small>Speak to a Travel Expert</Small>
                </Top>
                <Middle>For a free & immediate callback from a Travel Expert, enter your number below and we'll call you back within one minute.</Middle>
                <Input type='number' placeholder='enter your number' />
                <Button>Call me now</Button>
            </Wrapper>
        </Container>
    )
}
const Container = styled.div`
width:100%;
height:100vh;
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
background-color:rgba(0,0,0,0.3);
z-index:1;
display:flex;
align-items:flex-end;
`
const Wrapper = styled.div`
width:32rem;
height:45vh;
background-color:white;
border-radius:2rem;
margin:10rem;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
position:relative;
`
const LogoDiv = styled.div`
position:absolute;
top:-1.2rem;
left:-1.6rem;
width:8rem;
height:8rem;
border-radius:50%;
border:1px solid white;
background-color:  rgb(163, 10, 68);
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
color:white;
font-weight:bold;
`

const Top = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-bottom:4px solid rgb(163, 10, 68);
padding:1rem 0;
`
const H2 = styled.h3`
font-size:2.5rem;
color:black;
`
const Small = styled.small`
font-size:1.6rem;
color:black;
line-height:0.5;
`
const Middle = styled.div`
font-size:1.5rem;
color:grey;
padding:1rem;
`
const Input = styled.input`
width:90%;
border:0.5px solid grey;
height:4rem;
font-size:2rem;
padding:1rem;
`
const Button = styled.button`
padding:1rem 3rem;
width:100%;
font-size:2rem;
background-color:rgb(163, 10, 68);
color:white;
border:none;
border-radius:0 0 2rem 2rem;
`

const Cancel = styled.div`
position:absolute;
right:1rem;
top:-5rem;
font-size:8rem;
cursor:pointer;
color:rgb(163, 10, 68);
`


export default PlanningModal
