import React from 'react';
import './App.css';
import mundoImg from './img/mundo.png';
import avionImg from './img/logoavion.png'  

const ImagenMundo = () => {
  return (
    <div className='login-card'>
      <img className='login-img' src={mundoImg} alt="Mundo" />
      <div className='login-content'>
      <img className='avion' src={avionImg} alt="Avion" />
      <h2 class='titulo'>
          <span class='bold'>Travel</span><span class='normal'>App</span>
      </h2>
        <button className='login-btn'>Log in</button>
        <button className='login-btn btn2'>Register</button>
        <a href='hola' className='help'>Need Help?</a>
      </div>  
    </div>
  );
}

export default ImagenMundo;
