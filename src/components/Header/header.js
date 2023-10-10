import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
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
                        <input type="text" placeholder="search"/>
                        <button>search</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;