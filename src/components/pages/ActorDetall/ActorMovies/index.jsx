import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../../../API";
import Slider from "react-slick";
import "./index.scss"
import {Link} from "react-router-dom";

const ActorMovies = ({id}) => {
    const [actorMovies, setActorMovies] = useState([])
    const getMoviesActors = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then(res => setActorMovies(res.data.cast))
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500
    };
    useEffect(() =>{
        getMoviesActors(API_KEY)
    },[])
    console.log("ActorMovise",actorMovies)
    return (
        <>
            <section id="actorMovies">
                <div className="container">
                    <div className="actorMovies">
                        <h1>Известность за</h1>
                        <Slider {...settings}>
                            {
                                actorMovies.map(el =>(
                                    <div className="actorMovies--img">
                                        <Link to={`/moviesPages/${el.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${el.backdrop_path}`} alt="img"/>
                                        </Link>
                                            <h2>{el.title}</h2>
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

export default ActorMovies;