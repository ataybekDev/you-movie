import React from 'react';
import "./index.scss"
import {NavLink} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className="container">
            <div className="movieCard">
                <NavLink to={`movie/search/${el.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                </NavLink>


            </div>
        </div>
    );
};

export default MovieCard;