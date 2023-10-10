import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
const TopRated = () => {
    const [topRated,setTopRated] = useState([])
    const [pages,setPages] = useState(1);
    const getTopRated = (key) => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${pages}`)
            .then((res) => setTopRated(res.data.results))
    }
    useEffect( () => {
        getTopRated(API_KEY)
    },[pages])
    console.log(topRated)
    return (
        <div id="topRated">

            <div className="container">
                <h1 className="text">Top Raited</h1>
                <div className="topRated">
                    {
                        topRated.map((el) =>(
                            <Link to={`/moviesPages/${el.id}`}>
                            <div className="topRated--box">
                                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                                    <h2 > {el.title}</h2>
                            </div>
                            </Link>
                        ))
                    }
                    <div className="topRated--btn">
                        <button onClick={() => setPages(pages === 0 ? pages  : pages-1)} className="topRated--btn__back">Back</button>
                        <h4>{pages}</h4>
                        <button onClick={() => setPages(pages+1)} className="topRated--btn__next">Next</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TopRated;