// Index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import mundoImg from './img/mundo.svg';
import avionImg from './img/logoavion.svg';

const Index = () => {
  return (
    <div className="container_principal">
      <div className="container_mundo">
        <img src={mundoImg} alt="mundo" />
      </div>
      <div className="container_bottons">
        <img src={avionImg} alt="avion" />
        <h3><span>Travel</span>App</h3>
        <div className="bottons">
        <Link to="/login" className="btn-login">Log in</Link>
          <button className="btn-register"><Link to="/register" className='a'>Register</Link></button>
          <div className="help">
            <Link to="/help">Need Help?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
