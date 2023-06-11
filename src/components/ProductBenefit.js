import React from "react";
import imagecandle from './images/imagecandle.jpg';



function ProductBenefit() {
    return(
        <div classname='container'>
            <div className="d-flex mt-5 px-5 py-5" style={{backgroundColor: "#F7F8FA"}}>
                <div className="px-5 mt-5" style={{letter:"-0.9px"}}>
                    <h2>Clean and <br />fragrant soy wax</h2>
                    <p className="text-success mt-4 mb-4">Made for your home and for your wellness</p>
                    <ul>
                        <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                        <li>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                        <li>Handmade: All candles are craftly made with love.</li>
                        <li>Long burning: No more waste. Created for last long.</li>
                    </ul>
                    <button className="mx-5 px-4 py-1" style={{backgroundColor: "#56B280", color:"white", borderRadius:"4px", border:"none"
                }}>Learn more</button>
                </div>

                <div classname='candleimage pb-5'>
                    <img className="px-5 py-5 mx-5"
                    src={imagecandle}
                    style={{width:"540px"}}
                    />
                </div>

                <div>

                </div>
            </div>
        </div>
    );
}

export default ProductBenefit;