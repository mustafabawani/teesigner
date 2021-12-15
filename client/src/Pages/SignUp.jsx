import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Email, Password, Name, Address, ConfirmPassword } from '../Validation/Validation'
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
const TitleText = styled.span`
        font-size:11px;
        font-weight:500;
        margin:0px 0px 10px;
        color:red;
`
const Agreement = styled.span`
    font-size:12px;
    margin:10px 0px;
`
function SignUp() {
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [nameValid, setNameValid] = useState(true);
    const [addressValid, setAddressValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [RedirectState, setRedirectState] = useState(false);

    const createUser = async (event) => {
        event.preventDefault();
        let Data = {
            name: event.target[0].value,
            email: event.target[1].value,
            address: event.target[2].value,
            password: event.target[3].value,
            confirmPassword: event.target[4].value,
        };
        console.log(Data);
        setEmailValid(await Email.isValid({ email: Data.email }));
        setPasswordValid(await Password.isValid({ password: Data.password }));
        setNameValid(await Name.isValid({ name: Data.name }));
        setAddressValid(await Address.isValid({ address: Data.address }));
        setConfirmPasswordValid(await ConfirmPassword.isValid({ confirmPassword: Data.confirmPassword }));
    }
    const Register_customer = () => {
            if(name && email && password && location){
        axios.post("http://localhost:3001/register_customer", {
            name: name,
            email:email,
            password: password,
            location: location,
        }).then((res) => {
            setRedirectState(res.data.status);
          console.log(res.data);
        //   const navigate = useNavigate();
        //    navigate('/',{state:'true'});
        //  }
           
            })};
    };
    
    return (
        <>
        { RedirectState ? <Navigate to="/" /> : 
        (<EntryPage>
            <PageHeader to="/">Teezigner</PageHeader>
            <EntryCard>
                <h2>Sign up</h2>
                <form onSubmit={createUser}>

                    <InputGroup>
                        <label htmlFor="signup-name">Full Name</label>
                        <Input type="text" placeholder="John Doe" id="signup-name" onChange={(e) => {
                            setName(e.target.value);
                        }} />
                        {nameValid ? '' :
                            <TitleText>Invalid Name</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-email">Email Address</label>
                        <Input type="text" placeholder="nameaemail. com" id="signup-email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                        {emailValid ? '' :
                            <TitleText>Invalid Email</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-email">Address</label>
                        <Input type="text" placeholder="Enter Address" id="signup-email" onChange={(e) => {
                            setLocation(e.target.value);
                        }} />
                        {addressValid ? '' :
                            <TitleText>Invalid Address</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-signup-password">Password</label>
                        <Input type="password" placeholder="Password" id="signup-password" />
                        {passwordValid ? '' :
                            <TitleText>Invalid Password</TitleText>

                        }
                    </InputGroup>

                    <InputGroup>
                        <label htmlFor="signup-signup-password">Password</label>
                        <Input type="password" placeholder="Confirm Password" id="signup-password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        {passwordValid ? '' :
                            <TitleText>Invalid Password</TitleText>

                        }
                    </InputGroup>
                    {confirmPasswordValid ? '' :
                        <TitleText style="{color: red;}">Password doesn't match</TitleText>
                    }
                    <Agreement>Terms And Conditions</Agreement>
                    <Button type="submit" onClick={Register_customer} full>Sign up</Button>
                </form>
                <span>
                    Already have an account?
                    <Link to="/login" >Log in</Link>

                </span>
            </EntryCard>
        </EntryPage>)
                }
                </>
    );
}
export default SignUp;
