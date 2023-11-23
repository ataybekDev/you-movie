import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {
    const [search,setSearch] = useState("");
    const nav = useNavigate();
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <h1>You <span>Movie</span> </h1>
                    <div className="header--nav">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/popular"}>Popular</NavLink>
                        <NavLink to={"/topRated"}>Top Rated</NavLink>
                    </div>
                    <div className="header--search">
                        <input type="text" placeholder="search" onChange={(event) =>{
                            setSearch(event.target.value)
                        }}/>
                        <button onClick={() => nav(`movie/search/${search}`)}>search</button>
                        <div className="header--search__dark">
                            <button className="header--search__dark--btn" >Dark</button>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;