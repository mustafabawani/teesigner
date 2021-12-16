import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import { Alert, Snackbar } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

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
            <Products/>  
            <Newsletter/>
            <Footer />
        </div>
    )
}

