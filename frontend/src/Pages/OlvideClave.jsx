import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/css/olvideclave.css"
import EmailIcon from '@mui/icons-material/Email';


function OlvideClave () {
  return (
    <div>
      <div className='contenedor-olvide'>
        
        <form id='formulario' className='form-container-olvide'>
        <div className='icono-olvide'>
          <EmailIcon sx={{fontSize: 45}}></EmailIcon>
        </div>
        <div id='title-olvide'>
          <h1>Recupera tu contraseña</h1>
        </div>
       
          <div className='correo'>
            <input type="text" required/>
            <label>Correo eletronico</label>
          </div>
          <button className="btn-olvide">Enviar</button>
          <div className='enlace'>
            <NavLink to="/Registro">Si no tienes cuenta, regístrate</NavLink>
          </div>
          
          <div className='olvide'>
          </div>
        </form>
      </div>  
    </div>
  );
};

export default OlvideClave