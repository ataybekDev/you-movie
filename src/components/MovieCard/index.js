import React from 'react';

const MovieCard = ({el}) => {
    return (
        <div id="movieCard">
            <div className="movieCard">
                <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                <h2>{el.title}</h2>
            </div>
        </div>
    );
};

export default MovieCard;