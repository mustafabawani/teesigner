import { Link } from "react-router-dom";
import { Name,Cost } from '../Validation/Validation'
import EntryCard from '../Components/EntryCard';
import React, {  useEffect, useState } from 'react' 
import axios from "axios";
import InputGroup from '../Components/InputGroup';
import Input from '../Components/Input';
import Button from '../Components/Button';
import styled from 'styled-components';
import {useParams,Navigate} from "react-router-dom"

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

const EditProduct = () => 
{ 
    let {id} = useParams();
    const [product, setProduct] = useState({});
    const [nameValid, setNameValid] = useState(true);
    const [costValid, setCostValid] = useState(true);
    
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [unit_price, setUnit_price] = useState(0);
    const [RedirectState, setRedirectState] = useState(false);
    const editProduct = async (event) => {
        event.preventDefault();
        let Data = {
            name: event.target[0].value,
            cost: event.target[1].value,
        };
        setNameValid(await Name.isValid({ name: Data.name }));
        setCostValid(await Cost.isValid({ cost: Data.cost }));
    }
    useEffect(() => {
        axios.get("http://localhost:3001/getOneProduct/" + id.toString()).then((response) => {
          setProduct(response.data);
        setProductName(response.data.product_name);
        setUnit_price(response.data.unit_price);
        setProductDesc(response.data.product_desc);
        console.log(response.data);
        //   settextBoxState(response.data.product_name);

        });
      }, []);
      const updateProduct = () => {  
          if(product.productName!==productName || product.product_desc!==productDesc || product.unit_price!==unit_price){
            axios.post("http://localhost:3001/updateProduct",{
                productName:productName,
                productDesc:productDesc,
                unit_price:unit_price,
                id:id,
            }).then((res)=>{
                setRedirectState(res.data.status);
            })
        }
    };
    
    return (
        <> { 
        (RedirectState )  ? 
        (<>
            <Navigate to="/View" /> 
            </>):
        (<EntryPage>
            <PageHeader to="/">Teezigner</PageHeader>
            <EntryCard>
                <h2>Edit Product</h2>
                <form onSubmit={editProduct}>

                    <InputGroup>
                        <label htmlFor="edit-product">ProductName</label>
                        <Input type="text" value={productName} onChange={(e) => setProductName(e.target.value)}></Input>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="edit-desc">Product Description</label>
                        <Input type="text" value={productDesc} id="login-desc" onChange={(e) => {setProductDesc(e.target.value)}} />
                        {nameValid ? '' :
                            <TitleText>Invalid Product Description</TitleText>
                        }
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor=" edit-cost">Cost</label>
                        <Input type="number" placeholder="Enter Cost" id="edit-cost" value={unit_price} required="true" onChange={(e) => {
                            setUnit_price(e.target.value);
                        }}/>
                        {costValid ? '' :
                            <TitleText>Invalid Cost</TitleText>
                        }
                    </InputGroup>
                    <Button type="submit" onClick={updateProduct} full>Edit</Button>
                </form>
                
            </EntryCard>
        </EntryPage>)}
                </>
    )
}

export default EditProduct;