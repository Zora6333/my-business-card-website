import React from "react";
import { Link } from 'react-router-dom';
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <div className="Header">
        <p>made by https://github.com/Zora6333
   <br/>Georgei sevchenko
        </p>
        <nav className="NavHeader">
          <ul className="UlHeader">
            <Link id="LINK" to='/About_me'><p>About me</p></Link>
            <Link id="LINK" to="/"><p className="High">Heorhi Shauchenko</p></Link>
            <Link id="LINK" to='/Contacts_for'><p>Contacts</p></Link>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
