import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../../API";
import "./index.scss";

const ActorDetall = (effect, deps) => {
    const {actorId} = useParams();
    const [actorDetal,setActorDetall] = useState({});
    const getActorDeall = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`)
            .then(res => setActorDetall(res.data))
    }
    useEffect(() =>{
        getActorDeall(API_KEY)
    },[])
    console.log(actorDetal)
    const {birthday,name,biography,place_of_birth,profile_path} = actorDetal
    return (
        <>
            <section id="actor-detall">
                <div className="container">
                    <div className="actor-detall">
                        <div className="actor-detall--img">
                            <img src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${profile_path}`} alt=""/>

                        </div>
                        <div className="actor-detall--title">
                            <h1>{name}</h1>
                            <h3>дата рождения: <span>{birthday}</span></h3>
                            <h3>Место рождения: <span>{place_of_birth}</span></h3>
                            <h2>Биография:</h2>
                            <p>{biography}</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ActorDetall;