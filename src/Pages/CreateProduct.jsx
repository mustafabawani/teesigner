import React from 'react'
import { Link } from "react-router-dom";
import { Name,Cost } from '../Validation/Validation'
import EntryCard from '../Components/EntryCard';
import { useState } from "react";
import InputGroup from '../Components/InputGroup';
import Input from '../Components/Input';
import Button from '../Components/Button';
import styled from 'styled-components';

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
margin: 5px 0;
color: inherit;
`
const TitleText=styled.span`
font-size:11px;
font-weight:500;
margin:0px 0px 0px;
color:red;
text-color:red;
`
const Profit=styled.span`
    width:400px;
    margin:10px 30px 10px 10px;
`
const InputPicture=styled.input`
    width: 100%;
    outline: none;
    padding: 0px 0px;
    // border: 1px solid #e0e6e8;
    // border-radius: 4px;
    font-size: 1rem;
    color: #888888;
    transition: box-shadow 0. 2s ;
    &::placeholder {
    color : #dedede;
    }
    &:focus {
    box-shadow: 0 0 0 2px rgb( 169, 172, 255, 0.5) ;
    }
`

const CreateProduct = () => {
    const [nameValid, setNameValid] = useState(true);
    const [costValid, setCostValid] = useState(true);
    const createUser = async (event) => {
        event.preventDefault();
        let Data = {
            name: event.target[0].value,
            cost: event.target[1].value,
        };
        setNameValid(await Name.isValid({ name: Data.name }));
        setCostValid(await Cost.isValid({ cost: Data.cost }));
    }
    return (
        <EntryPage>
            <PageHeader to="/">Teezigner</PageHeader>
            <EntryCard>
                <h2>Create Product</h2>
                <form onSubmit={createUser}>

                    <InputGroup>
                        <label htmlFor="login-product">ProductName</label>
                        <Input type="text" placeholder="Enter Product Name..." id="login-product" required="true" />
                        {nameValid ? '' :
                            <TitleText>Invalid Product Name</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="login-desc">ProductDesc</label>
                        <Input type="text" placeholder="Enter Product Description..." id="login-desc" />
                        {nameValid ? '' :
                            <TitleText>Invalid Product Description</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor=" login-cost">Cost</label>
                        <Input type="number" placeholder="Enter Cost" id="login-cost" required="true" />
                        {costValid ? '' :
                            <TitleText>Invalid Cost</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor=" login-picture" >Picture</label>
                        <InputPicture type="file" placeholder="Enter Picture" id="login-picture" required="true"/>
                        {costValid ? '' :
                            <TitleText>Invalid Cost</TitleText>
                        }
                    </InputGroup>

            
                    <Profit>The Company takes 60% of the profits on each sale.</Profit>
                    <Button type="submit" full>Upload</Button>
                </form>
                
            </EntryCard>
        </EntryPage>
    )
}

export default CreateProduct