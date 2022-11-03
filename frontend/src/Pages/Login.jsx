import { NavLink} from 'react-router-dom';
import "../assets/css/login.css"


function Login() {
  return (
    <div>           
        <div> 
         <div className="form-container">

            <form id="formulario" className="form-registro">
               <h2 className="form-title">Login</h2>
                <div className="form-container">

                    <div className="form-group">
                    <i className="bi bi-person-fill" />
			            <input type="text" id="user" className="form-input" placeholder="Usuario"></input>
                	    <span className="form-line"></span>
                    </div>
                    <div className="form-group">
                        <input className="form-input" type="password" id="contraseña" placeholder="Contraseña"></input>
                        <span className="form-line"></span>
                    </div>
                </div>      
                <span className="form-line"></span>  
                <div className="d-grid gap-2 col-6 mx-auto">
                <button className="ingresar">Ingresar</button>
      </div>
                <div>
                    <NavLink to="/Registro">Si no tienes cuenta, regístrate</NavLink>
                </div>
                <div>
                    <NavLink to="/Olvide-clave">¿olvidaste tu contraseña?</NavLink>
                </div>
            </form>
        </div>
    </div>
        
    </div>
  )
}

export default Login