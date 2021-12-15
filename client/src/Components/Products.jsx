import styled from 'styled-components';
import Product from './Product';
import React, {  useEffect, useState } from "react";
import axios from 'axios';

const Container =styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/showAllProducts").then((response) => {
      setProductList(response.data);
    });
    
  }, []);
    return (
        <Container>
            {productList.map((item)=>(
                <Product item={item} key={item.product_id}/>
            ))}
        </Container>
    )

}

export default Products
