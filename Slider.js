import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sliderImage1 from '../images/home3.jpg';
import sliderImage2 from '../images/home2.jpg';
import sliderImage3 from '../images/home1.jpg';


function Slider() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide slim-slider" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={sliderImage1} className="d-block w-100 slim-image" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src={sliderImage2} className="d-block w-100 slim-image" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src={sliderImage3} className="d-block w-100 slim-image" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;