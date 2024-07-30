import React from "react";
import { Link } from 'react-router-dom';
import mundoImg from '../img/mundo.svg';
import avionImg from '../img/logoavion.svg';

const Login = () => {
  return (
    <div className="container_principal">
      <div className="container_mundo">
        <img src={mundoImg} alt="mundo" />
      </div>
      <div className="container_bottons">
        <img src={avionImg} alt="avion" />
        <h3><span>Travel</span>App</h3>
        <form className="form">
          <input className="input1" type="email" placeholder="Ingresa tu Email" />
          <input type="password" placeholder="Ingresa tu contraseña" />
          <div className="help">
            <Link to="/">No tienes una cuenta, Regístrate</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
