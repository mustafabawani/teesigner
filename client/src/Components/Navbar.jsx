import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined } from "@material-ui/icons"
import Badge from '@mui/material/Badge';
import {mobile} from "../Responsive"
import {logout} from '../features/user'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";

const Container = styled.div`
    height: 60px;
    background-color: yellow;
    ${mobile({backgroundColor:"red"})}
    position:sticky;
    top:0;
    z-index: 3;
    
`
const BorderedAvatar = styled(Avatar)`
border: 0px solid black;
`;
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
const Button=styled.button`
width:20%;
padding:10px;
background-color:yellow;
border:0px;
color:balck;
font-weight:400;
`
const Logo = styled.h1`
    font-weight:bold;
    color:black;
`

export default function Navbar() {
    const dispatch = useDispatch();

    const quantity=useSelector(state => state.cart.quantity);
    const UserloggedIn = useSelector(state => state.user.value.UserloggedIn);
    const VendorloggedIn = useSelector(state => state.user.value.VendorloggedIn);
    // const UserloggedIn=React.useState(localStorage.getItem('UserloggedIn'));
    // const VendorloggedIn=localStorage.getItem('VendorloggedIn');
    const logoutHandler = () => {
        // console.log('e');
            localStorage.setItem('id',0);
            localStorage.setItem('UserloggedIn', false);
            localStorage.setItem('VendorloggedIn',false);
        dispatch(logout());
    };
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
                {(VendorloggedIn)?<Link to="/View"><Logo>Teezigners</Logo></Link>:<Link to="/"><Logo>Teezigners</Logo></Link>}
                </Center>
                <Right>
                    {}
                {(UserloggedIn)?
                (<>
                <Button onClick={logoutHandler}><Link to ="/"><MenuItem>Logout</MenuItem></Link></Button>
                <BorderedAvatar
                    alt="User Avatar"
                    src="https://th.bing.com/th/id/OIP.loKKNQfqb7LzxjKU7CRyiAHaHa?pid=ImgDet&rs=1"
                  />
                </>):
                
                (VendorloggedIn)?
                    (<>
                    <Button onClick={logoutHandler}><Link to ="/"><MenuItem>Logout</MenuItem></Link></Button>
                    <Link to="/CreateProduct"><MenuItem>Create product</MenuItem></Link>
                    <Link to="/View"><MenuItem>Your products</MenuItem> </Link>
                    </>)
                    :
                (<>
                <Link to="/Login"><MenuItem>Login</MenuItem></Link>
                <Link to="/SignUp"><MenuItem>SignUp</MenuItem> </Link>
                </>)
                }
                 {(!VendorloggedIn)?
                 (<>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">  
                            <Link to="/cart"><ShoppingCartOutlined /></Link>                    
                        </Badge>
                    </MenuItem>
                    </>):null}
                </Right>
            </Wrapper>
        </Container>
        // <Switch
    )
}
 