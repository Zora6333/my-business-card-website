import React from "react";
import { Link } from 'react-router-dom';
import "../Footer/Footer.css";


const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Navigechion">
          <p className="WaterSign">
            Georgei Shevchenko
            <br />
            +375445369301
          </p>
          <nav className="NavFooter">
            <ul className="UlFooter">
              <Link  id="LINK" to='/MasterClass' className="LiFooter">Мастер-классы</Link>
              <Link id="LINK" to='/Contacts'>Контакты</Link>
              <Link  id="LINK" to='/Politics' className="LiFooter">Политика кофиденциальности</Link>
              <Link id="LINK" to='/Customfur'>Мебель на заказ</Link>
              <Link id="LINK" to="/AboutUs">О нас</Link>
              <Link id="LINK" className="LiFooter">Договор оферты</Link>
            </ul>
          </nav>
          <div className="IconsFooter">
            <a href="https://t.me/IIHELLHOUNDII">
              <img src="./public/free-icon-telegram-2111646.png" />
            </a>
            <a href="https://www.instagram.com/_6real_unreal9_/">
              <img src="./public/free-icon-instagram-2111463.png" />
            </a>
            <a href="https://vk.com/sheva_fox">
              <img src="./public/free-icon-vk-2504953.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;