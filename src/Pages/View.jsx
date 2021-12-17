import React from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import styled from "styled-components"
import Footer from '../Components/Footer'
import { Add, Remove,EditIcon, Edit, Delete } from '@material-ui/icons'
import { categories } from '../data'

const Container=styled.div``

const Wrapper=styled.div`
    padding:20px;
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

const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${(props)=>props.type==="filled" && "none"};
    background-color:${(props)=>props.type==="filled" ? "black" : "transparent"};    
    color:${(props)=>props.type==="filled" && "yellow"};
`
const TopTexts=styled.div`
    
`

const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
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
    width:200px;

`

const Details=styled.div`
    padding:30px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width:60%;
`

const ProductName=styled.span``

const ProductID=styled.span``

const ProductColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props=>props.color}
`

const ProductSize=styled.div``

const PriceDetail=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`

const ProductAmount=styled.div`
    font-size:24px;
    margin:5px;

`

const ProductPrice=styled.div`

`
const Hr=styled.hr`
    background-color:gray;
    border:none;
    height:1px;
`

const Summary=styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:50vh;

`
const SummaryTitle=styled.h1`
    font-weight:200;

`

const SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type==="total" && "500"};
    font-size:${props=>props.type==="total" && "24px"};
`

const SummaryItemText=styled.span``

const SummaryItemPrice=styled.span``

const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:yellow;
    font-weight:600;
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
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Wrapper>
                <Title>Product View</Title>
                <Top>
                    {/* <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton> */}
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail >
                            {categories.map((item) => (
                                
                                <>
                                <Image src={item.img}/>
                                <Details>
                                    <ProductName><b>Product:</b>{item.title}</ProductName>
                                    <ProductID><b>ID:</b>{item.id}</ProductID>
                                    <ProductPrice><b>Cost:</b> ${item.cost}</ProductPrice>
                                    <Hr/>                                   
                                </Details>
                                
                                <Icons href="/EditProduct">  <Edit/><br/> <Delete/></Icons>
                                
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
