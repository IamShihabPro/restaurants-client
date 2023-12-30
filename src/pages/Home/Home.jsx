import React from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Paralla from '../../components/Parallax/Paralla';
import InfoApp from '../../components/InfoApp/InfoApp';
import BookingForm from '../../components/BookingForm/BookingForm';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
import RestaurantMenu from '../../components/RestaurantMenu/RestaurantMenu';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <Paralla></Paralla>
            <RestaurantMenu></RestaurantMenu>
            <InfoApp></InfoApp>
            <BookingForm></BookingForm>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;