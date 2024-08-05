import React from "react";
import { Link } from 'react-router-dom';
import mundoImg from '../img/mundo.svg';
import avionImg from '../img/logoavion.svg';
import styles from './Registe.module.css';

const Register = () => {
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
          <input className={styles.input3} type="password" placeholder="Confirma tu contraseña" />
          <button className={styles.btn_rg}>Register</button>
          <div className={styles.help}>
            <Link to="/">Ya tienes una cuenta</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
