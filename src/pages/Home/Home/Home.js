import React from 'react';
import Banner from '../Banner/Banner';
import TourPackages from '../TourPackage/TourPackages';
import WhyWe from '../WhyWe/WhyWe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <WhyWe></WhyWe>
        </div>
    );
};

export default Home;