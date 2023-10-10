import React from 'react';
import {useState,useEffect} from "react"
import {API_KEY} from "../../API";
import axios from "axios";
import MovieCard from "../MovieCard";
import {Link} from "react-router-dom";

const Popular = () => {
    const [popular,setPopular] = useState([])
    const [pages,setPages] = useState(1)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${pages}`)
        .then((res) => setPopular(res.data.results))
    }
    useEffect(() =>{
        getPopular(API_KEY)
    },[pages])
    console.log(popular)
    return (
        <div id="popular">
            <h1 className="text">Popular</h1>
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el)=>(
                            <Link to={`/moviesPages/${el.id}`}>
                                <div className="popular--box">
                                    <MovieCard el={el}/>
                                </div>
                                </Link>
                                ))
                    }
                    <div className="popular--btn">
                        <button onClick={() => setPages(pages === 0 ? pages  : pages-1)} className="popular--btn__back">Back</button>
                        <h4>{pages}</h4>
                        <button onClick={() => setPages(pages+1)} className="popular--btn__next">Next</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Popular;