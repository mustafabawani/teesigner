import React from 'react'
import styled from 'styled-components'
import { Search,  ShoppingCartOutlined } from "@material-ui/icons"
import Badge from '@mui/material/Badge';
import {mobile} from "../Responsive"


const Container = styled.div`
    height: 60px;
    background-color: yellow;
    ${mobile({backgroundColor:"red"})}
    position:sticky;
    top:0;
    z-index: 3;
    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    
`
const Language = styled.span`
    font-size: 12px;
    cursor: pointer;
    flex=1;
    
`
const Left = styled.div`
     flex:1;
     display:flex;
`
const Center = styled.div`
    flex:1;
    text-align:center;
    color: black;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    flex=1;
    margin-left: 30px;
    color:black;
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`
const SearchContainer = styled.div`
    border: 1px solid black;
    display:flex;
    flex=1;
    alligned-items:center;
    justify-content: space_between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: ${props => (props.barOpened ? "30rem" : "10rem")};
    padding: 0.3rem;
    height: 1.2rem;
    border-radius: 2rem;
    cursor: pointer;
`
const Input = styled.input`
    flex:1;
    display:flex;
    border: 0px solid transparent;
    background-color: transparent;
    margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
    transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus,
    &:active {
        outline: none;
    }
`
const Logo = styled.h1`
    font-weight:bold;
    color:black;
`

export default function Navbar() {

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language></Language>
                    <SearchContainer>
                        <Input style={{color:"black",fontSize:14}}
                            //onChange={e => setInput(e.target.value)}
                            //ref={inputFocus}
                            //value={input}
                            //barOpened={barOpened}
                            placeholder="Search Items..."
                        />
                        <Search></Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <a color="black" href="/"><Logo>Teezigners</Logo></a>
                </Center>
                <Right>
                <a href="/Register"><MenuItem>Register</MenuItem> </a>
                <a href="/LoginTemp"><MenuItem>Sign In</MenuItem></a>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <a href="/Cart"><ShoppingCartOutlined /></a>                    
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}
