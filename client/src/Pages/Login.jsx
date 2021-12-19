import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Email, Password} from '../Validation/Validation'
import EntryCard from '../Components/EntryCard';
import { useState } from "react";
import InputGroup from '../Components/InputGroup';
import Input from '../Components/Input';
import Button from '../Components/Button';
import styled from 'styled-components';
import axios from "axios";
import { useDispatch } from "react-redux";
import { login} from "../features/user";
import { Alert, Snackbar } from '@mui/material';

const EntryPage = styled.div`
display : flex;
align-items: center;
flex-direction: column;
min-height : 100vh;
background-color: #fbfbfb;
`
const PageHeader = styled(Link)`
font-size: 2rem;
font-weight : 600;
margin: 40px 0;
color: inherit;
`
const TitleText=styled.span`
font-size:11px;
font-weight:500;
margin:0px 0px 0px;
color:red;
text-color:red;
`
const Login = () => {
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);    
    const [RedirectState, setRedirectState] = useState(false);
  
    const [UserloggedIn, setUserloggedIn] = useState(false);  
    const [VendorloggedIn, setVendorloggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [checked, setChecked] = useState(false);
  
    const handleChange = (event) => {
    setChecked(event.target.checked);
  };

    const dispatch=useDispatch();
    const createUser = async (event) => {
        event.preventDefault();
        let Data = {
            email: event.target[0].value,
            password: event.target[1].value,
        };
        setEmailValid(await Email.isValid({ email: Data.email }));
        setPasswordValid(await Password.isValid({ password: Data.password }));
    }
    const Login_customer = () =>{
        
    if(email && password){
    if(!checked){
        console.log("customer");
            axios.post("http://localhost:3001/loginUser", {
                email:email,
                password:password
            }).then((res) => {
            dispatch(login({ id:res.data.id,UserloggedIn: true, VendorloggedIn:false}));
            setRedirectState(res.data.status);
            setUserloggedIn(res.data.status);  
            // setVendorloggedIn(false);
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('UserloggedIn', true);
            localStorage.setItem('VendorloggedIn',false);
                  
        })}
    else{
        console.log("vendor");
            axios.post("http://localhost:3001/loginVendor", {
                email:email,
                password:password
            }).then((res) => {
            dispatch(login({ id:res.data.id ,UserloggedIn: false, VendorloggedIn:true}));
            // ,*{} name: res.data.name, email: email,location: res.data.location
            setRedirectState(res.data.status);
            setVendorloggedIn(res.data.status);
            // setUserloggedIn(false);            
            localStorage.setItem('id', res.data.id);
            localStorage.setItem('UserloggedIn', false);
            localStorage.setItem('VendorloggedIn',true);
                  
        })}}
    };
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
        { (RedirectState && UserloggedIn)  ? 
        (
        <>
        <Navigate to="/" /> 
        </> ): 
        (RedirectState && VendorloggedIn)  ? 
            <Navigate to="/View" />: 
        (<EntryPage>
            <PageHeader to="/">Teezigner</PageHeader>
            {/* </Router> */}
            <EntryCard>
                <h2>Log in</h2>
                <form onSubmit={createUser}>

                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email. com" id="login-email" required="true" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                        {emailValid ? '' :
                            <TitleText>Invalid Email</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor=" login-password">Password</label>
                        <Input type="password" placeholder="Password" id="login-password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        {passwordValid ? '' :
                            <TitleText>Invalid Password</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                    <span><input type="checkbox" placeholder="Select" id="login-check" onChange={handleChange}/>    I am a Vendour</span>                                                
                    </InputGroup>
                    <Button type="submit" full onClick={Login_customer}>Log in</Button>
                </form>
                <span>
                    Don't have an account?
                    <Link to="/signup">Sign up</Link>

                </span>
            </EntryCard>
            </EntryPage>)
                }
                </>
    );
}
export default Login;
