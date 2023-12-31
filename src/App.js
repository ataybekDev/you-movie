
import './App.scss';
import Hero from "./components/Hero/hero";
import Header from "./components/Header/header";
import { Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home/home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import DetallPages from "./components/pages/DetallPages";
import ActorDetall from "./components/pages/ActorDetall";
import "./components/TopRated";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
     <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/popular"} element={<Popular/>}/>
            <Route path={"/topRated"} element={<TopRated/>}/>
            <Route path={"/moviesPages/:movieId"} element={<DetallPages/>}/>
            <Route path={"/ActorDetall/:actorId"} element={<ActorDetall/>}/>
        </Routes>
      <Hero/>
    </>
  );
}

export default App;
