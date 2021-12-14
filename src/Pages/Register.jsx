import React from 'react'
import styled from "styled-components"
import { useState,useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Email,Password,Name,Address,ConfirmPassword } from '../Validation/Validation'
import * as yup from'yup'

const Container=styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255,
            255,255,0.5),
        rgba(255,255,255,0.5)
    ), url("https://toplinemanagement.com/wp-content/uploads/2017/01/top-line-management-login-background-1.jpg") center;
    background-size:cover;
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
    font-weight:600;
    margin:0px 0px 20px;
    color:black;
`

const TitleText=styled.span`
        font-size:11px;
        font-weight:500;
        margin:0px 0px 10px;
        color:red;
`

const Form=styled.form`
    display:flex;
    flex-direction:  column;
`

const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:15px 10px 15px 0px;
    padding:10px;
`

const Agreement=styled.span`
    font-size:12px;
    margin:10px 0px;
`

const Button=styled.button`
    width:20%;
    border:none
    padding:10px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin:1em;
    top:0;

`

const Register = () => {

    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [nameValid, setNameValid] = useState(true);
    const [addressValid, setAddressValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
    const createUser = async (event) =>{
        event.preventDefault();
        let Data={
            name: event.target[0].value,
            email: event.target[1].value,
            address: event.target[2].value,
            password: event.target[3].value,
            confirmPassword: event.target[4].value,
        };
        console.log(Data);
        setEmailValid(await Email.isValid({email: Data.email}));
        setPasswordValid(await Password.isValid({password: Data.password}));
        setNameValid(await Name.isValid({name: Data.name}));
        setAddressValid(await Address.isValid({address: Data.address}));
        if (Data.password!=Data.confirmPassword)
            setConfirmPasswordValid(false);
    }

    return (
        <Container>
            
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={createUser}>
            <label style={{color: "teal"}}>Name</label>
                <Input placeholder="Enter Name" required="true"/>
                {nameValid ? '' :
                  <TitleText>Invalid Name</TitleText>
                }
            <label style={{color: "teal"}}>Email</label>
                <Input placeholder="email@email.com"required="true"/>
                {emailValid ? '' :
                  <TitleText>Invalid Email</TitleText>
                }
            <label style={{color: "teal"}}>Address</label>    
                <Input placeholder="Enter Address" required="true"/>
                {addressValid ? '' :
                  <TitleText>Invalid Address</TitleText>
                }
            <label style={{color: "teal"}}>Password</label>    
                <Input placeholder="Password"required="true"/>
                {passwordValid ? '' :
                  <TitleText>Invalid Password</TitleText>
                }
            <label style={{color: "teal"}}>Confirm Password</label>
                <Input placeholder="ConfirmPassword"required="true"/>
                {confirmPasswordValid ? '' :
                  <TitleText>Password doesn't match</TitleText>
                }
                <Agreement>Terms And Conditions</Agreement>               
                <Button>Create</Button>   
            </Form>
             
            </Wrapper>
        </Container>
    )
}

export default Register
