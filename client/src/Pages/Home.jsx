import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Alert, Snackbar } from '@mui/material';
import styled from 'styled-components';

export default function Home() {
    const loggedIn = (state => state.user.value.loggedIn);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (loggedIn !== undefined) {
            setOpen(open => true);
        }
    }, []);
const Image=styled.img`
display:block;
margin-left: auto;
margin-right: auto;
`

    return (
        <div>
            <Announcement/>
            <Navbar />
            { loggedIn ? <></> : 
            (<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  You're logged in!
                </Alert>
              </Snackbar>)
            }
            <Slider/>
            <Image  src="https://res.cloudinary.com/fast123/image/upload/v1639934192/homeImg_tqnm0w.png"/>
            <Products/>  
            <Newsletter/>
            <Footer />
        </div>
    )
}

