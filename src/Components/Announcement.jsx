import React from 'react';
import styled from 'styled-components'
const Container=styled.div`
    height:30px;
    background-color:black;
    color:white;
    display:flex;
    text-align:center;
    justify-content:center;
    font-size=14px;
    font-weight=500;

`

const Announcement = () => {
    return (
        <Container>
            Super Deal!!
        </Container>
    )
}

export default Announcement
