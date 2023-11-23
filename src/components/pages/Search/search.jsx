import React, {useEffect, useState} from 'react';
import "./search.scss"
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API";
import Popular from "../../Popular";
import MovieResult from "../../MovieResult";
import MovieCard from "../../MovieCard";

const Search = () => {
    const {movieName} = useParams();
    const [ser,setSer] = useState([]);
    const getSer = (key) =>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => setSer(res.data.results))
    }
    useEffect(() =>{
        getSer(API_KEY)
    },[ser])
    console.log("search"+ser)
    return (
        <>
            <div className="container">
                <div className="search">
                    {
                        ser.map((el) => <MovieResult key={el.id} el={el}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default Search;