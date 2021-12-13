import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info=styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;
`

const Container =styled.div`
    flex:1;
    display:flex; 
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #f5fbfd;
    position:relative;
    &:hover ${Info}{
        opacity:1; 
    }
    z-index:1;
`
const Circle=styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`

const Image=styled.img`
    height:100%;
    width:100%;
    z-index:2;
    background-size:cover;
`



const Icon=styled.div`

    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition: all 0.5s ease; 

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }

`
const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.picture_url} />
            <a href='/Product'><Info>
                <Icon>
                    <ShoppingCartOutlined / >
                </Icon>
                <Icon>
                    <SearchOutlined / >
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined / >
                </Icon>
            </Info></a>
        </Container>
    )
}

export default Product
