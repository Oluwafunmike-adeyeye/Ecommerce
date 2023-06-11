import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductBenefit from '../components/ProductBenefit';
import Testimonial from '../components/Testimonial';
import Popular from '../components/Popular';
import ProductList from './ProductList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <ProductList />
            <ProductBenefit />
            <Testimonial />
            <Popular />
            <Footer />
        </div>
    )
}

export default Home;