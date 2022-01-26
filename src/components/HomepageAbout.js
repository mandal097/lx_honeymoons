import React from 'react';
import styled from 'styled-components'
const HomepageAbout = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Img src='https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='img' />
                </Left>
                <Right>

                </Right>
            </Wrapper>
        </Container>
    )
};

const Container = styled.div`
width:100%;
height:80vh;
`
const Wrapper = styled.div`
width:1200px;
height:100%;
margin:0 auto;
display:flex;
align-items:center;
justify-content:space-between;
`
const Left = styled.div`
width:48%;
height:100%;
background-color:red;
`
const Img = styled.img`
width:100%
height:100%;
object-fit:cover;
`

const Right = styled.div`
width:48%;
height:100%;
`

export default HomepageAbout;
