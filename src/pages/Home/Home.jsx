import React, { useContext } from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Paralla from '../../components/Parallax/Paralla';
import InfoApp from '../../components/InfoApp/InfoApp';
import BookingForm from '../../components/BookingForm/BookingForm';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
import RestaurantMenu from '../../components/RestaurantMenu/RestaurantMenu';
import { AuthContext } from '../../Provider/AuthProvider';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
        return <Loader></Loader>
    }

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