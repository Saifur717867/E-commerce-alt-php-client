import { useEffect, useState } from "react";

import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Pages/Products/Card";

const CaroselSlider = () => {



    const [products, setProducts] = useState([]);
    // console.log(products);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="w-[80%] mx-auto my-6 hidden md:hidden lg:block">
            <h3 className="text-2xl text-center font-bold mb-10">Categories</h3>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        products.map((item) => <Card key={item.id} item={item}></Card>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default CaroselSlider;