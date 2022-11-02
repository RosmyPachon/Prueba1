import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../assets/css/olvideclave.css"


function OlvideClave () {
  return (
    <div>
      <div className='contenedor'>
        <h1>Recupera tu contraseña</h1>
        <form id='formulario' className='form-container'>
          <div className='username'>
            <input type="text" required/>
            <label>Nombre de usuario</label>
          </div>
          <div className='contraseña'>
            <input type="password" required/>
            <label>Contraseña</label>
          </div>
          <NavLink to="/Registro">Si no tienes cuenta, regístrate</NavLink>
          <input type="submit"/>
          <div className='inicio'>
            Quiero volver a <Link to="/">Iniciar sesión</Link>
          </div>
        </form>
      </div>  
    </div>
  );
};

export default OlvideClave