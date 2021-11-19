import React from 'react';
import styled from "styled-components";

const Container = styled.div`
width: 320px;
height: 400px;
border-radius: 37px;
background-image:
    linear-gradient(0.81deg, #EB3C34 -4.05%, rgba(235, 60, 52, 0) 124.49%),
    url(${props=>props.src});
background-size: cover;
overflow: hidden;
`
const Text = styled.div`
padding: 250px 60px 10px 20px;
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 35px;
line-height: 117%;
color: #FFFFFF;
`

const Cards = (props) => {
    return (
        <Container src={props.src}>
            <Text>
                {props.text}
            </Text>
        </Container>  
    )
}

export default Cards;
