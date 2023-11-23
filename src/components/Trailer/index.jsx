import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick";
import { BiX } from "react-icons/bi";
const Trailer = ({id}) => {
    const [trailer,setTrailer] = useState([]);
    const [read,setRead] = useState(false)
    const handleOpens = () => setRead(true);
    const handleLides = () => setRead(false);
    const getTrailer = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res => setTrailer(res.data.results) )
    }

    useEffect(()=>{
        getTrailer(API_KEY)
    },[])
    console.log("trailer", trailer)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <section id="trailer">
                <div className="container">
                    <div className="trailer">
                        <h1 className="trailer--title">Trailer</h1>
                        <Slider {...settings} >
                        {
                            trailer.splice(0,10).map((el) =>(
                                <div onClick={() => setRead(handleOpens)} className="trailer--slider" >
                                    <iframe width="300" height="250"
                                            src={`https://www.youtube.com/embed/${el.key}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>
                                    </iframe>
                                    <div style={{
                                        display: read ? "block" : "none"
                                    }} className="trailer--modal">
                                        <h1 onClick={() => setRead(handleLides)} >
                                            <BiX/>
                                        </h1>
                                        <div>
                                            <iframe width="500" height="350"
                                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                                    title="YouTube video player" frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen>

                                            </iframe>
                                            <div className="trailer--modal__icons">

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))
                        }
                        </Slider>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Trailer;