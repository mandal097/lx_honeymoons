import React from 'react'
import styled from 'styled-components'
import {
    CloseOutlined
} from '@ant-design/icons'
import ReactPlayer from 'react-player'

const Player = ({ handlePlayer }) => {
    let url = 'https://youtu.be/x2VR8k6F2w0'
    return (
        <Container>
            <Cancel onClick={handlePlayer}><CloseOutlined /></Cancel>
            <Wrapper>
                <ReactPlayer
                    url={url}
                    className='react-player'
                    width='100%'
                    height='100%'
                    playing={true}
                    controls={true}
                />
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
width:100%;
height:100vh;
background-color:black;
display:flex;
align-items:center;
justify-content:center;
position:fixed;
top:0;
z-index:1000;
`
const Wrapper = styled.div`
width:85%;
height:90vh;
display:flex;
align-items:center
justify-content:center;
position:relative;
.react-player {
  position: absolute;
  top: 0;
  left: 0;
}
`
const Cancel = styled.div`
position:absolute;
top:-6rem;
right:2rem;
font-size:10rem;
color:white;
cursor:pointer;
`

export default Player