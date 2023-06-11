import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import imageproduct from '../components/images/imageproduct.png';



const ProductDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="product text-center mb-5">
                <div clasName="row">
                    <div className="col-md col-6 mt-5">
                        <img src={imageproduct} style={{backgroundColor: "#F7F8FA"}} />
                        <p className="mt-3">All hand-made with natural soy wax, Candleaf is <br />made for your pleasure moments.</p>
                        <span className='mt-3 fw-bold mb-5' style={{color:"#56B280"}}>🚚 FREE SHIPPING</span>
                    </div>

                    <div className="col-md col-6 mt-5">
                            <div className="col-4">
                                <h4>$9.99</h4>
                            </div>
                            <div className="col-8">
                                
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails;