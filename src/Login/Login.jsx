import React from "react";
import { Link } from 'react-router-dom';
import mundoImg from '../img/mundo.svg';
import avionImg from '../img/logoavion.svg';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container_principal}>
      <div className={styles.container_mundo}>
        <img src={mundoImg} alt="mundo" />
      </div>
      <div className={styles.container_bottons}>
        <img src={avionImg} alt="avion" />
        <h3><span>Travel</span>App</h3>
        <form className={styles.form}>
          <input className={styles.input1} type="email" placeholder="Ingresa tu Email" />
          <input className={styles.input2} type="password" placeholder="Ingresa tu contraseña" />
          <button className={styles.btn_rg}>Log In</button>
          <div className={styles.help}>
            <Link to="/" className={styles.link_button}>No tienes una cuenta, Regístrate</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
