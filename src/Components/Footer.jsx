import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    display:flex;
`
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo=styled.h1`

`
const Desc=styled.p`
    margin:20px 0px;
`

const SocialContainer=styled.div`
    display:flex;
`

const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color: #${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`

const Center=styled.div`
    flex:1;
    padding:20px;
`
const Title=styled.h3`
    margin-bottom:30px;

`

const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right=styled.div`
    flex:1;    
    padding:20px;
`
const ContactItem=styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Teezigners</Logo>
                <Desc>Launch New Direct-To-Consumer Channels Quickly And Grow Your Business. With An Intelligent Selling Platform That Optimizes Your Storefront For Every Customer</Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>
                    National Highway, Fast
                </ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}}/>
                    090078601
                </ContactItem>
                <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                    Teezigners@gmail.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
