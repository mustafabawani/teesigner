import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import { addProduct } from '../Redux/cartRedux'
import { useDispatch } from 'react-redux';

const Container=styled.div`

`
const Wrapper=styled.div`
    padding:50px;
    display:flex;

`
const ImgContainer=styled.div`
    flex:1;

`
const Image=styled.img`
    width:100%;
    height:90vh;
    object-fit:cover;   
`
const InfoContainer=styled.div`
    flex:1;
    padding:0px 50px;
`
const Title=styled.h1`
    font-weight:200;

`
const Desc=styled.p`
    margin:20px 0px;

`
const Price=styled.span`
    font-weight:100;
    font-size:40px;
`
const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
`

const Filter=styled.div`
    display:flex;
    align-items:center;
`

const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`


const FilterSize=styled.select`
    margin-left:10px;
    padding:5px;
`

const FilterSizeOption=styled.option``

const AddContainer=styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;

`

const Amount=styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;

`

const Button=styled.button`
    padding:15px;
    border:2px solid yellow;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
    }
`

const Product = () => {
    const [product,setProduct]=useState({});
    const [quantity, setQuantity] = useState(1);
    const[size,setSize]=useState("null");
    const dispatch=useDispatch();
    const handleQuantity=(type)=>{
        if(type==="dec")
        {
            if(quantity>0)
                setQuantity(quantity-1);
            else
            setQuantity(0);
        }
        else
        {
            setQuantity(quantity+1);
        }
    };
    const handleClick = ()=>{
        //update cart
        dispatch(addProduct({...product,quantity,size}));
    }
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://cdn.shopify.com/s/files/1/1520/5960/products/F19P101003_TS_ForestGreen_Front_1194x.jpg?v=1626822996.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>T-Shirts</Title>
                    <Desc> T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>

                        <Filter>
                             <FilterTitle>Size</FilterTitle>
                             <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                 <FilterSizeOption>S</FilterSizeOption>
                                 <FilterSizeOption>M</FilterSizeOption>
                                 <FilterSizeOption>L</FilterSizeOption>
                             </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>            
        </Container>
    )
}

export default Product
