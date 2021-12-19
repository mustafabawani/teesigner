import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import styled from "styled-components"
import Footer from '../Components/Footer'
import {Edit, Delete } from '@material-ui/icons'
import { Link } from "react-router-dom";
import React, {  useEffect, useState } from "react";
import axios from 'axios';

const Container=styled.div``

const Wrapper=styled.div`
    padding:20px;
    // width:100px;
`

const Title=styled.h1`
    font-weight:300;
    text-align:center;
`

const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`



const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
`

const Info=styled.div`
    flex:3;
`
const Product=styled.div`
    display:flex;
    justify-content:space-between;
`

const ProductDetail=styled.div`
    flex:1;
    display:flex;
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    
`


const Image=styled.img`
    width:10%;
    height:20%;
    margin-bottom:5px;
`

const Details=styled.div`
    padding:30px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:70%;
`

const ProductName=styled.span``

const ProductID=styled.span``

const ProductPrice=styled.div`
`
const Hr=styled.hr`
    background-color:gray;
    border:none;
    height:1px;
`
const Icons = styled.a`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:50px;
`

const View = () => {
        const [productList, setProductList] = useState([]);
        const [VendorDetails, setVendorDetails] = useState([]);
        const earned=0;
        const id = localStorage.getItem('id');
        // console.log(id);
        useEffect(() => {
          axios.get("http://localhost:3001/showVendorProduct/"+ id.toString()).then((response) => {
            setProductList(response.data);

          });
          
        }, []);
        useEffect(() => {
            axios.get("http://localhost:3001/VendorDetails/"+ id.toString()).then((response) => {

              setVendorDetails(response.data.earned);
            //   earned=response.data.earned;
            });
            
          }, []);
        const deleteProduct = (id) => {
            console.log("abe yar");
            axios.delete("http://localhost:3001/deleteProduct/"+ id.toString());
        };
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Wrapper>
                <Title>Product View</Title>
                <Top>
                    {/* <h3>Money Earned:{earned}</h3> */}
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail >
                            {productList.map((item) => (
                                <>
                                <Image src={item.picture_url}/>
                                <Details>
                                    <ProductName><b>Product:</b>{item.product_name}</ProductName>
                                    <ProductID><b>ID:</b>{item.product_id}</ProductID>
                                    <ProductPrice><b>Cost:</b> {item.unit_price}</ProductPrice>
                                <Hr/>

                                </Details>
                                <Icons><Link to={'/EditProduct/' + item.product_id}><button> <Edit/></button></Link>
                                <br/>
                                <button onClick={()=>{deleteProduct(item.product_id)}}> <Delete/></button>
                                </Icons>
                                </>
                            ))}
                            </ProductDetail>
                            
                              
                            
                        </Product>
                        
                        
                    </Info>
                    
                </Bottom>
            </Wrapper>

            <Footer/>
        </Container>
    )
}

export default View