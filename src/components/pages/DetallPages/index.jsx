import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API";
import {BiCollapse, BiLeftIndent} from 'react-icons/bi';
import { BiSolidHeart } from 'react-icons/bi';
import { BiBookmark } from 'react-icons/bi';
import { BiCalendarX } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';
import { BiSolidRightArrow } from 'react-icons/bi';
import Actors from "../Actors/actors";
import Trailer from "../../Trailer";


const DetallPages = () => {
    const {movieId} = useParams()
    const [detall, setDetall] = useState({});
    const  [modal,setModal] = useState(false);
    const handleOpen = () => setModal(true);
    const handleLide = () => setModal(false);
    const getDetall = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(res => setDetall(res.data))
    }
    useEffect(() => {
       getDetall(API_KEY)
    },[])
    console.log(detall)
    return (
        <>
            <section id="detall" style={{
                background:`url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detall.backdrop_path})`,
                backgroundPosition:"center",
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                minHeight:"80vh"
            }}>
                <div className="container">
                    <div className="detall">

                        <div onClick={() => setModal(handleOpen)} className="detall--imges">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${detall.poster_path}`} alt=""/>
                            <div className="detall--imges__group">
                                <h2><BiCollapse/> Расшиирть</h2>
                            </div>
                        </div>
                        <div style={{
                            display: modal ? "block" : "none"
                        }} className="detall--modal" >
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${detall.poster_path}`} alt=""/>
                            <div className="detall--modal__text">
                                <h3>{detall.title}</h3>
                                <h4>{detall.release_date}</h4>
                            </div>
                            <div className="detall--modal__title">
                                <h1 onClick={() => setModal(handleLide)}><BiCalendarX/></h1>
                            </div>
                        </div>
                        <div className="detall--title">
                            <div className="detall--title__one">
                                <h1>{detall.title}</h1>
                                <h4>({detall.release_date})</h4>
                            </div>
                            <div className="detall--title__text">
                                <h3>{detall.tagline}</h3>
                                <h2>{Math.floor(detall.runtime / 60)}h {Math.round(detall.runtime /10)}m</h2>
                            </div>
                            <div className="detall--title__circle">
                                <div className="detall--title__circle--one">
                                    <h1>{Math.floor(detall.vote_average * 10)} <span>%</span></h1>
                                </div>
                                <h3>Рейтинг</h3>
                                <div className="detall--title__circle--tho">
                                    <BiLeftIndent/>
                                </div>
                                <div className="detall--title__circle--tho">
                                    <BiSolidHeart/>
                                </div>
                                <div className="detall--title__circle--tho">
                                    <BiBookmark/>
                                </div>
                                <div className="detall--title__circle--tho">
                                    <AiFillStar/>
                                </div>
                                <div className="detall--title__circle--three">
                                    <BiSolidRightArrow/>
                                    <h2>Воспроизвести трейлер</h2>
                                </div>


                            </div>
                            <h1>Обзор</h1>
                            <p>{detall.overview}</p>

                        </div>

                    </div>
                </div>
            </section>
            <Actors id={movieId}/>
            <Trailer id={movieId}/>
        </>
    );
};

export default DetallPages;