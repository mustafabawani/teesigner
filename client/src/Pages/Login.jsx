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

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const createUser = async (event) => {
        event.preventDefault();
        let Data = {
            email: event.target[0].value,
            password: event.target[1].value,
        };
        setEmailValid(await Email.isValid({ email: Data.email }));
        setPasswordValid(await Password.isValid({ password: Data.password }));
    }
        const Login_customer = () => {
            axios.post("http://localhost:3001/loginUser", {
                email:email,
                password:password
            }).then((res) => {
            setRedirectState(res.data.status);
            console.log(res.data);           
        })};


    return (
        <>
        { RedirectState ? <Navigate to="/" /> : 
        (<EntryPage>
            {/* <Router exact path="/"> */}
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
