import React from 'react'
import styled from "styled-components"

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255,
            255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("https://toplinemanagement.com/wp-content/uploads/2017/01/top-line-management-login-background-1.jpg") center;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Wrapper=styled.div`
       width:50%;
       padding:20px; 
       background-color:white;
`
const Title=styled.h1`
        font-size:24px;
        font-weight:300;

`

const Form=styled.form`
    display:flex;
    flex-wrap:  wrap;
`

const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`

const Agreement=styled.span`
    font-size:12px;
    margin:20px 0px;
`

const Button=styled.button`
    width:40%;
    border:none
    padding:10px;
    background-color:teal;
    color:white;
    cursor:pointer;

`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="user name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>Terms And Conditions</Agreement>
                       
            </Form>
            <Button><b>Create</b></Button> 
            </Wrapper>
        </Container>
    )
}

export default Register
