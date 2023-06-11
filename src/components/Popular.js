import React from 'react';
import Product from "./Product";
import { Link } from 'react-router-dom';


function Popular() {
    return(
        <div className="pop mt-5">
            <div className="text-center pt-5">
                <h2 className="pb-2">Popular</h2>
                <p className="pb-3" style={{color:"#5E6E89"}}>Our top selling product that you may like</p>
            </div>

            <div className="row" style={{marginLeft:"40px", marginRight:"40px"}}>
                <div className='col-md'>
                    <Link to="/productdetails" className='text-decoration-none text-black'>
                        <Product imageUrl="https://res.cloudinary.com/oluwaloni/image/upload/v1666781218/imagethe.png" productName="Strawberry" price="$10.90" />
                    </Link>
                </div>

                <div className='col-md'>
                    <Link to="/productdetails" className='text-decoration-none text-black'>
                        <Product imageUrl="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image1_.png" productName="Mango" price="$11.80" />
                    </Link>
                </div>

                <div className='col-md'>
                    <Link to="/productdetails" className='text-decoration-none text-black'>
                        <Product imageUrl="https://res.cloudinary.com/oluwaloni/image/upload/v1666781140/image11.png" productName="Banana" price="$11.20" /> 
                    </Link>
                </div>

            </div>      
        </div>
    );
}

export default Popular;