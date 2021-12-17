import { Add, Remove } from '@material-ui/icons'
import React, {  useEffect, useState } from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import {useParams} from "react-router-dom"
import axios from 'axios'
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
const Subtitle=styled.h3`
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

// const FilterColor=styled.div`
//     width:20px;
//     height:20px;
//     border-radius:50%;
//     background-color: ${props=>props.color};
//     margin:0px 5px;
//     cursor:pointer;
// `

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

  
const ProductDesc = () => {

    let {id} = useParams();
    const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/getOneProduct/" + id.toString()).then((response) => {
      setProduct(response.data);
    });
    
  }, []);
    console.log(product);
    
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.picture_url}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.product_name}</Title>
                    <Subtitle>Designed By:{product.name}</Subtitle>
                    <Desc>T-shirts are generally made of a stretchy, light, and inexpensive fabric and are easy to clean.</Desc>
                    <Price>${product.unit_price}</Price>
                    <FilterContainer>
                        {/* <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter> */}

                        <Filter>
                             <FilterTitle>Size</FilterTitle>
                             <FilterSize>
                                 <FilterSizeOption>S</FilterSizeOption>
                                 <FilterSizeOption>M</FilterSizeOption>
                                 <FilterSizeOption>L</FilterSizeOption>
                             </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>            
        </Container>
    )
}

export default ProductDesc
