import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Cart  = () => {
    return (
        <div>
            <Navbar />
            <div className="text-center">
                <h3 className="text-center">Your Cart Items</h3>
                <Link to="/" className='text-success'>
                    Back to shopping
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Cart;