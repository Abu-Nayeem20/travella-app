import React from 'react';
import Subscribe from '../../Shared/Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TourPackages from '../TourPackage/TourPackages';
import WhyWe from '../WhyWe/WhyWe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <WhyWe></WhyWe>
            <Reviews></Reviews>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;