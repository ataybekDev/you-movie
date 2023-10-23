import React from 'react';
import "./telefon.scss"

const Telefon = () => {
    return (
        <>
            <section id="telefon">
                <div className="container">
                    <div className="telefon">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className="telefon--img" alt=""/>
                        <div className="telefon--title">
                            <h1>Загружайте <br/> сериалы для <br/> просмотра офлайн</h1>
                            <h2>Сохраняйте видео в избранном, и у вас <br/> всегда будет, что посмотреть.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Telefon;