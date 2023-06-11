import React from "react";
import imgimg1 from "./images/imgimg1.jpg";
import imgimg2 from "./images/imgimg2.jpg";
import imgimg3 from "./images/imgimg3.png";
import star from "./images/star.png";
import star2 from "./images/star2.png";


function Testimonial() {
    return(
        <div className="test py-5" style={{backgroundColor:"rgba(86, 178, 128, 0.1)", paddingLeft:"30px"}}>
            <div className="container text-center pt-4">
                <h2 className="pb-2">Testimonials</h2>
                <p className="pb-3" style={{color:"#5E6E89"}}>Some quotes from our happy customers</p>
            </div>

            <div className="d-flex justify-content-around">
                <div className="card text-center mb-5" style={{width: "350px", height:"295px"}}>
                    <img src={imgimg3} className="img-fluid mx-auto d-block mt-3" style={{width: "84px", height:"84px"}} />
                    <img src={star} alt="" className="img-fluid mx-auto d-block mt-3" style={{width: "145px", height: "24px"}}/>
                    <div className="card-body">
                        <h6 className="card-text">“I love it! No more air<br /> freshener”</h6>
                        <p style={{color:"#7C8087"}}>Mart</p>
                    </div>
                </div>

                <div className="card text-center" style={{width: "350px", height:"295px"}}>
                    <img src={imgimg2} className="img-fluid mx-auto d-block mt-3" style={{width: "84px", height:"84px"}} />
                    <img src={star2} alt="" className="img-fluid mx-auto d-block mt-3" style={{width: "145px", height: "24px"}}/>
                    <div className="card-body">
                        <h6 className="card-text">“Recommended for <br />everyone”</h6>
                        <p style={{color:"#7C8087"}}>Edoardo</p>
                    </div>
                </div>

                <div className="card text-center" style={{width: "350px", height:"295px"}}>
                    <img src={imgimg1} className="img-fluid mx-auto d-block mt-3" style={{width: "84px", height:"84px"}} />
                    <img src={star} alt="" className="img-fluid mx-auto d-block mt-3" style={{width: "145px", height: "24px"}}/>
                    <div className="card-body">
                        <h6 className="card-text">“Looks very natural, the <br />smell is awesome”</h6>
                        <p style={{color:"#7C8087"}}>Luisa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;