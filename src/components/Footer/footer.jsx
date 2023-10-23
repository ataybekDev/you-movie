import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="line"></div>
                <div className="container">
                    <div className="footer">
                        <div className="footer--title">
                            <h2>Есть вопросы ? Свяжитесь с нами</h2>
                            <h3>Распространнение вопросы</h3>
                            <h3>Для инвестров</h3>
                            <h3>Конфиденцияальность</h3>
                            <h3>проверка скорости</h3>
                        </div>
                        <div className="footer--text">
                            <h3>Центр поддержки</h3>
                            <h3>Вакансии</h3>
                            <h3>Настройки файл cookie</h3>
                            <h3>Юрудические уведемление</h3>
                        </div>
                        <div className="footer--text">
                            <h3>Акунд</h3>
                            <h3>Способы просмотра</h3>
                            <h3>Корпоравтивная информация</h3>
                            <h3>Толька на Movie You</h3>
                        </div>
                        <div className="footer--text">
                            <h3>Медиацентр</h3>
                            <h3>Правила использование</h3>
                            <h3>Свяжитесь с нами</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;