import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import Ciudadanos from './Ciudadanos';
import CrearUsuarios from './CrearUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        <div className='col-2 bg-white vh-100'>
          <Sidebar/>   
        </div>  
        <div className='col'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Ciudadanos/>}></Route>
              <Route path='/create' element={<CrearUsuarios/>}></Route>
            </Routes>
          </BrowserRouter>  
        </div>
      </div>                 
    </div>
  );
}

export default App;
