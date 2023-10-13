import React, {useEffect, useState} from 'react';
import "./hero.scss"
import Slider from "react-slick";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../../API";

const Hero = ({personId}) => {
    // const [hero, setHero] = useState(1);
    // const getHero = (key) => {
    //     axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
    //         .then(res => setHero(res.data))
    // }
    // useEffect(() => {
    //     getHero(API_KEY)
    // },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section id="hero">
                <Slider {...settings}>
                    <div className="slaider">
                        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/iIvQnZyzgx9TkbrOgcXx0p7aLiq.jpg`} alt="img"/>
                    </div>
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/1syW9SNna38rSl9fnXwc9fP7POW.jpg`} alt="img"/>
                    </div>
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg`} alt="img"/>
                    </div>
                    <div>
                        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/5mzr6JZbrqnqD8rCEvPhuCE5Fw2.jpg`} alt="img"/>
                    </div>
                </Slider>
                <div className="container">

                    <div className="hero">

                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;