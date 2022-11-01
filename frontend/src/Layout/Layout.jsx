import { Outlet } from  'react-router-dom';

//Componet
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navegacion from '../components/Navegacion';

function Layout () {
  return (
    <>
       <Header/>
       <Navegacion/>
       {/* contenido central  */}
       <div className='main'>
           <Outlet/>
       </div>
       {/* fin contenido central */}
        <Footer/>
    </>
  )
}
export default Layout