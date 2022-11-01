import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Layout
import Layout from './Layout/Layout';

//paginas
import Login from './Pages/Login';
import OlvideClave from './Pages/OlvideClave';
import Registro from './Pages/Registro';
import Contactos from './Pages/Contactos';
import AcercaDe from './Pages/AcercaDe';

function App() {

  return (
    <BrowserRouter>
    {/* Rutas publicas */}
    <Routes>
     <Route path='/' element={<Layout/>}>
          <Route index element={<Login/>}/>
          <Route path='acerca-de' element={<AcercaDe/>}/>
          <Route path='contactos' element={<Contactos/>}/>
          <Route path='olvide-clave' element={<OlvideClave/>}/>
          <Route path='registro' element={<Registro/>}/>
     </Route>
    </Routes>
    {/* Rutas privadas */}
 </BrowserRouter>
  )
}

export default App
