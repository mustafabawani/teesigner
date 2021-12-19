import React,{useState} from 'react'
import Announcement from '../Components/Announcement'
import Navbar from '../Components/Navbar'
import styled from "styled-components"
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import axios from 'axios'

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
    flex:2;
    display:flex;
`


const Image=styled.img`
    width:200px;
    margin bottom:5px;

`

const Details=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

const ProductName=styled.span`
font-size:20px;
`
const ProductSize=styled.div`
font-size:20px;
`

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
    font-size:20px;
    margin:5px;

`

const ProductPrice=styled.div`
    font-size:30px;
    font-weight:200;

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

const Cart = () => { 
    const [RedirectState, setRedirectState] = useState(false);
    const cart=useSelector(state=>state.cart);
    const customer_id=localStorage.getItem('id');
    const UserloggedIn = useSelector(state => state.user.value.UserloggedIn);
    console.log(UserloggedIn);
    const placeOrder=()=>{
        // if(cart.length>0){
            axios.post("http://localhost:3001/order",{
                products:cart.product,
                customer_id:customer_id,
                quantity:cart.quantity,
                total:cart.total
            }).then((res)=>{
                setRedirectState(res.data.status);
            })
        // }
    }

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <Link to="/">
                    <TopButton>Continue Shopping</TopButton></Link>
                    {/* <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts> */}
                    {/* <TopButton type="filled">Checkout Now</TopButton> */}
                </Top>
                <Bottom>
                    <Info>
                        {cart.product.map((item) => (
                        <>
                        {console.log(item)}
                        {/* {getProduct(item)} */}
                            <Product>
                            <ProductDetail>
                                <Image src={item.product.picture_url}/>
                                <Details>
                                    <ProductName><b>Product:</b>{item.product.product_name}</ProductName>
                                    {/* <ProductID><b>ID:</b>{item.product_id}</ProductID> */}
                                    <ProductSize><b>Size:</b>{item[0]}</ProductSize>
                                    <ProductAmount><b>Quatity:</b>{item.quantity} </ProductAmount>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    {/* <Add/> */}
                                    {/* <Remove/> */}
                                </ProductAmountContainer>
                                <ProductPrice><b>Rs</b>{item.product.unit_price}</ProductPrice>
                            
                            </PriceDetail>
                            
                        </Product>
                        <Hr/></>))}
                        
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rs{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>Rs500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>ShippingDiscount</SummaryItemText>
                            <SummaryItemPrice>0</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>Rs{cart.total+500}</SummaryItemPrice>
                        </SummaryItem>
                        { (UserloggedIn)  ? 
                        (<>
                            <Link to="/Alert">
                            <Button onClick={placeOrder}>Checkout Now</Button>
                            </Link>
                        </>)
                        :
                        (<>
                        <Link to="/SignUp">
                            <Button>Checkout Now</Button>
                            </Link>
                            </>
                        )}

                    </Summary>

                </Bottom>
            </Wrapper>

            <Footer/>
        </Container>
    )
}

export default Cart