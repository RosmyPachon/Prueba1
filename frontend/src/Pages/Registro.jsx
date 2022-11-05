import React from 'react'
import { NavLink } from 'react-router-dom'
import "../assets/css/registro.css"
import HowToRegIcon from '@mui/icons-material/HowToReg';


function Registro() {
  return (
    <div>
      <div className='contenedor-registro'>
        
        <form id='formulario' className='form-container-registro'>
        <div className='icono-registro'>
          <HowToRegIcon sx={{fontSize: 45}}></HowToRegIcon>
        </div>
        <div id='title-registro'>
          <h1>Regístrate</h1>
        </div>
          <div className='nombre'>
            <input type="text" required/>
            <label>Nombre completo</label>
          </div>
          <div className='correo-registro'>
            <input type="text" required/>
            <label>Correo eletronico</label>
          </div>
          <div className='telefono'>
            <input type="number" required/>
            <label>Número de telefono</label>
          </div>
          <div className='fecha-nacimiento'>
            <h1>Fecha nacimiento</h1>
          </div>
          <div className='input-fecha'>
            <input type="date" required/>
          </div>
            <button className="btn-registro">Enviar</button>
          <div className='enlace'>
            <NavLink to="/">¿Ya tienes cuenta? Inicia sesión</NavLink>
          </div>
          
        </form>
      </div>  
    </div>
  )
}

export default Registro