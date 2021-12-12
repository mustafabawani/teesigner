import React from 'react'
import { useState } from "react";
import styled from "styled-components"
import * as yup from'yup'
import { Email,Password } from '../Validation/Validation'
import { Formik,ErrorMessage } from 'formik';
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

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
       width:30%;
       padding:20px; 
       background-color:white;
`
const Title=styled.h1`
        font-size:24px;
        font-weight:600;
        margin:0px 0px 30px;
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
    margin:10px 0px;
    padding:10px;
`

const Button=styled.button`
    width:40%;
    border:none
    padding:10px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`

const Link =styled.a`
    margin:5px 0px;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`



const Login = () => {
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const createUser = async (event) =>{
        event.preventDefault();
        let Data={
            email: event.target[0].value,
            password: event.target[1].value,
        };
        setEmailValid(await Email.isValid({email: Data.email}));
        setPasswordValid(await Password.isValid({password: Data.password}));
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
            <Form onSubmit={createUser} >
                <label style={{color: "teal"}}>Email</label>
                <Input name='email' placeholder="email@email.com" required="true" />
                {emailValid ? '' :
                  <TitleText>Invalid Email</TitleText>
                }
                <label style={{color: "teal"}}>Password</label>
                <Input name='password'placeholder="Password" required="true"/>
                {passwordValid ? '' :
                  <TitleText>Invalid Password</TitleText>  
                }               
                <Button>Login</Button>
                <Link>Create a new Account</Link>   
            </Form>   
            </Wrapper>
        </Container>
    )
}

export default Login
