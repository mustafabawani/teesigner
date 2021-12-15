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

const EditProduct = () => {
    const [nameValid, setNameValid] = useState(true);
    const [costValid, setCostValid] = useState(true);
    const editProduct = async (event) => {
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
                <h2>Edit Product</h2>
                <form onSubmit={editProduct}>

                    <InputGroup>
                        <label htmlFor="edit-product">ProductName</label>
                        <Input type="text" placeholder="Enter Product Name..." id="edit-product" required="true"/>
                        {nameValid ? '' :
                            <TitleText>Invalid Product Name</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="edit-desc">Product Description</label>
                        <Input type="text" placeholder="Enter Product Description..." id="login-desc" />
                        {nameValid ? '' :
                            <TitleText>Invalid Product Description</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor=" edit-cost">Cost</label>
                        <Input type="number" placeholder="Enter Cost" id="edit-cost" required="true" />
                        {costValid ? '' :
                            <TitleText>Invalid Cost</TitleText>
                        }
                    </InputGroup>
                    <Button type="submit" full>Edit</Button>
                </form>
                
            </EntryCard>
        </EntryPage>
    )
}

export default EditProduct