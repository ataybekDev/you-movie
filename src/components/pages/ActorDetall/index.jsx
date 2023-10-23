import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API";
import "./index.scss";
import {BiLogoFacebookSquare, BiLogoInstagram, BiLogoTelegram, BiLogoTwitter} from "react-icons/bi";
import ActorMovies from "./ActorMovies";

const ActorDetall = (effect, deps) => {
    const {actorId} = useParams();
    const [actorDetall,setActorDetall] = useState({});
    const [read, setRead] = useState(false)
    const getActorDeall = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`)
            .then(res => setActorDetall(res.data))
    }
    useEffect(() =>{
        getActorDeall(API_KEY)
    },[])
    const handleOpens = () =>{
        setRead(!read)
    }
    console.log(actorDetall)
    const {birthday,name,place_of_birth,profile_path,biography} = actorDetall
    return (
        <>
            <section id="actor-detall">
                <div className="container">
                    <div className="actor-detall">
                        <div className="actor-detall--img">
                            <img src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${profile_path}`} alt=""/>
                            <div className="actor-detall--img__icons">
                                <div className="actor-detall--img__icons--one">< BiLogoTelegram/></div>
                                <div className="actor-detall--img__icons--two"><BiLogoTwitter/></div>
                                <div className="actor-detall--img__icons--there"><BiLogoInstagram/></div>
                                <div className="actor-detall--img__icons--foo"><BiLogoFacebookSquare/></div>
                            </div>
                        </div>

                                <div className="actor-detall--title">
                                    <h1>{name}</h1>
                                    <h3>дата рождения: <span>{birthday}</span></h3>
                                    <h3>Место рождения: <span>{place_of_birth}</span></h3>
                                    <h2>Биография:</h2>
                                    <p>{read ? biography : biography?.slice(0,400)}
                                        {!biography && biography?.length > 400 && (
                                            <button onClick={() => setRead(handleOpens)}>{read ? "еще" : "close"}</button>
                                        )}</p>
                                    <button onClick={() => setRead(handleOpens)}>{read ? "close" : "еще"}</button>
                                </div>



                    </div>
                </div>
            </section>
            <ActorMovies id={actorId}/>
        </>
    );
};

export default ActorDetall;