import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import MovieCard from "../MovieCard";
import "./style.scss"
import axios from "axios";
import {API_KEY} from "../../API";

const MovieResult = ({el}) => {
    const [result,setResult] = useState([])
    const [pages,setPages] = useState(1)
    const getResult = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pages}`)
            .then((res) => setResult(res.data.results))
    }
    useEffect(() =>{
        getResult(API_KEY)
    },[pages])
    return (
        <>
            <div className="container">
                <div className="movieResult">

                            <NavLink to={`/moviesPages/${el.id}`}>
                                    <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                    <h2>{el.title}</h2>

                            </NavLink>
                </div>

            </div>

        </>
    );
};

export default MovieResult;