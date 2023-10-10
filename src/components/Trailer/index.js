import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick";
import { BiX } from "react-icons/bi";
const Trailer = ({id}) => {
    const [trailer,setTrailer] = useState([]);
    const [modal,setModal] = useState(false);
    const handleOpens = () => setModal(true);
    const handleLides = () => setModal(false);
    const getTrailer = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res => setTrailer(res.data.results) )
    }

    useEffect(()=>{
        getTrailer(API_KEY)
    },[])
    // console.log("trailer", trailer)
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
                            trailer.splice(0,10).map(el =>(
                                <div onClick={() => setModal(handleOpens)} className="trailer--slider">
                                    <iframe width="300" height="250"
                                            src={`https://www.youtube.com/embed/${el.key}`}
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen>
                                    </iframe>

                                </div>
                            ))
                        }

                        </Slider>

                            <div style={{
                                display: modal ? "block" : "nome"
                            }} className="trailer--modal">
                                <iframe width="900" height="450"
                                        src={`https://www.youtube.com/embed/${trailer.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen>
                                </iframe>
                                <div className="trailer--modal__icons">
                                    <h1 onClick={() => setModal(handleLides)} >
                                        <BiX/>
                                    </h1>
                                </div>

                            </div>


                    </div>
                </div>
            </section>
        </>
    );
};

export default Trailer;