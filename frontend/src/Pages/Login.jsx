import { NavLink} from 'react-router-dom';
import "../assets/css/login.css"
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';


function Login() {
  return (
    <div>           
        <div className='title-menu'>
            <h1>Menú</h1>
        </div>
        <div className='pre-menu'>
            <div id='card-menu' className="card" style={{width: '18rem'}}>
                <img src="..\src\assets\img\menu1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn-menu">Go somewhere</a>
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div id='card-menu' className="card" style={{width: '18rem'}}>
                <img src="..\src\assets\img\menu1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn-menu">Go somewhere</a>
                </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div id='card-menu' className="card" style={{width: '18rem'}}>
                <img src="..\src\assets\img\menu1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn-menu">Go somewhere</a>
                </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;
            <div id='card-menu' className="card" style={{width: '18rem'}}>
                <img src="..\src\assets\img\menu1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn-menu">Go somewhere</a>
                </div>
            </div>
        </div>

        <div className='contenedor-login'>
        
            <form id='formulario' className='form-container-login'>
                <div className='icono-login'>
                    <AccountCircleTwoToneIcon sx={{fontSize: 45}}></AccountCircleTwoToneIcon>
                </div>
                <div id='title-login'>
                    <h1>Inicia sesión</h1>
                </div>
        
                <div className='username'>
                    <input type="text" required/>
                    <label>Usuario</label>
                </div>
                <div className='password'>
                    <input type="password" required/>
                    <label>Contraseña</label>
                </div>

                <div className='enlace-login'>
                    <NavLink to="/Olvide-clave">¿Olvidaste tu contraseña?</NavLink>
                </div>

                <button className="btn-login">Enviar</button>
                <div className='enlace-login'>
                    <NavLink to="/Registro">¿No tienes cuenta? regístrate</NavLink>
                </div>
                
                <div className='olvide'>

                </div>
            </form>
            <hr />
        </div>
    </div>
  )
}

export default Login