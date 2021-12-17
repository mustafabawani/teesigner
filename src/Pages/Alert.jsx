import React from 'react';
import { Link } from "react-router-dom";
import EntryCard from '../Components/EntryCard';
import InputGroup from '../Components/InputGroup';
import Input from '../Components/Input';
import styled from 'styled-components';

const Button=styled.button`
width:50%;
padding:10px;
background-color:black;
color:yellow;
font-weight:600;
`

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
const TitleText=styled.h3`
font-weight:500;
margin:150px 20px 40px;
color:red;
text-color:red;
`


const Login = () => {
    return (
        <EntryPage>
            {/* <Router exact path="/"> */}
            {/* <PageHeader to="/"></PageHeader> */}
            {/* </Router> */}
            <EntryCard>
                <TitleText>order placed sucessfully 
                your order will be delivered within 5 days</TitleText>
                <Link to="/">
                <Button type="submit" full>Continue Shopping</Button>
                </Link>
            </EntryCard>
        </EntryPage>
    );
}
export default Login;
