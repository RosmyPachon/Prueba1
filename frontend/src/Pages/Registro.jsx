import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/registro.css"


function Registro() {
  return (
    <div><div>           
    <div> 
     <div className="form-container">

        <form id="formulario" className="form-registro">
           <h2 className="form-title-registro">Registro</h2>
            <div className="form-container-registro">

                <div className="form-group-registro">
                  <i className="bi bi-person-fill" />
                  <input type="text" id="user" className="form-input" placeholder="Nombre"></input>
                  <span className="form-line-registro"></span>
                </div>
                <div className="form-group-registro">
                  <i className="bi bi-person-fill" />
                  <input type="text" id="user" className="form-input" placeholder="Correo eletrónico"></input>
                  <span className="form-line-registro"></span>
                </div>
                <div className="form-group-registro">
                    <input className="form-input" type="password" id="contraseña" placeholder="Nueva contraseña"></input>
                    <span className="form-line-registro"></span>
                </div>
            </div>  
            <div>
                <Link to="/Olvide-clave">¿olvidaste tu contraseña?</Link>
            </div>    
            <span className="form-line-registro"></span>  
            <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn-registro">Registrar</button>
  </div>
            <div>
                <Link to="/">¿Ya tienes cuenta? Inicia sesión</Link>
            </div>
            
        </form>
    </div>
</div>
    
</div></div>
  )
}

export default Registro