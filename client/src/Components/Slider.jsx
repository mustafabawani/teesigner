import React, {useState} from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems } from '../data'

const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:white;
    position:relative;
    overflow:hidden;
    
`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color: #fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left:${props=>props.direction === "left" && "10px"};
    right:${props=>props.direction === "right" && "10px"};
    cursor:pointer;
    opacity:0.8;
    z-index:2;
`
const Wrapper= styled.div`
    height: 100%;
    display:flex;
    transition: 1s all ease;
    transform:translateX(${(props) => props.slideIndex *-210}vh);
    
`
const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    //background-color:#${props=>props.bg};
`
const ImageContainer=styled.div`
    height:100%;
    flex:1;
`

const Image=styled.img`
height:80%;
`

const InfoContainer=styled.div`
    flex:1;
    padding:50px;
`
const Title = styled.h1`
    font-size:70px;

`
const Description = styled.p`
    margin:50px 0px;
    font-size:20;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.a`
    padding:10px;
    font-size:20px;
    margin:20px;
    background-color:yellow;
    color:gray;
    cursor:pointer;
`
const Slider = () => {
        const [slideIndex,setSlideIndex] =  useState(0)
        const handleClick = (direction) =>{
            if(direction==="left")
            {
                setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1)
            }
            else
            {
                setSlideIndex(slideIndex < 1 ? slideIndex+1 : 0)
            }


        }
        // const History=useHistory();
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer> 
                    <Image src = {item.img} />
                </ImageContainer>
                <InfoContainer> 
                    <Title>{item.title} </Title>
                    <Description>{item.desc}</Description>
                    <Button href="/ProductList">Shop Now</Button>
                    <Button href="/ProductList">Sell Tshirts</Button>
                </InfoContainer>
                </Slide>
                ))}    
            </Wrapper>

            <Arrow direction="right"  onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider