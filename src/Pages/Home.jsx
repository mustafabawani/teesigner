import React from 'react';
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement';
import Slider from '../Components/Slider';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <div>
            <Announcement/>
            <Navbar />
            <Slider/>
            {/* <Categories/> */}
            <Products/>  
            <Newsletter/>
            <Footer />
        </div>
    )
}

