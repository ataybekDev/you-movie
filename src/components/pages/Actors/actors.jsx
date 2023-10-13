
import React, {useState,useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../../API";
import UserImg from "../../img/user.png"
import Slider from "react-slick";
import {Link} from "react-router-dom";

const Actors = ({id}
) => {
    const [actors,setActors] = useState([])
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then(res => setActors(res.data.cast))
    }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 500
    };
    const User = (img) =>{
        actors.filter(el => {
            if (el.profile_path === false){
                <img src={img} alt=""/>
            }
        })
    }

    useEffect(() =>{
        getActors(API_KEY)
        User(UserImg)
    },[])

    return (
        <section id="actors">
            <div className="container">
                <div className="actors">
                    <h1>Actors</h1>
                    <div className="actors--title">

                        <Slider {...settings}>

                        {
                            actors.map(el =>(
                                <div className="actors--title__imges">
                                    <Link to={`/ActorDetall/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${el.profile_path}`} alt="img"/>
                                        <h1>{el.name}</h1>
                                    </Link>
                                </div>
                            ))
                        }

                        </Slider>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Actors;