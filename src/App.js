/* numele functiei incepe cu litera mare pentru a diferentia codul incorporat in html , ex : h1,div , in Html nu va apara <todo> va fi <Todo>*/
 //* this is a jsx code , nu a html code, deci mare grrija ce trimiti ca parametru la jsx*/ 

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import {
      BrowserRouter as Router,
      Routes,
      Route
     } from "react-router-dom";
     import Dictionar from './components/pages/Dictionar'
import Home from './components/pages/Home'
import ShopCafea from './components/pages/ShopCafea'
import ReteteCafea from './components/pages/ReteteCafea'
import Contact from './components/pages/Contact'
import Cont from './components/pages/Cont'
import EchipamenteCafea from './components/pages/EchipamenteCafea'
import Shop from './components/pages/Shop';
import ShopCeai from './components/pages/ShopCeai';
import PaginaProdus from './components/pages/PaginaProdus';
import CursBarista from './components/pages/CursBarista';
import PaginaCurs from './components/pages/PaginaCurs';
import PaginaEchipament from './components/pages/PaginaEchipament';
import Aeropress from './components/pages/Retete/Aeropress'
import Syphon from './components/pages/Retete/Syphon'
import Chemex from './components/pages/Retete/Chemex'
import V60 from './components/pages/Retete/V60'
import Register from './components/Register'
import Profil from './components/Profil'
import Login from './components/Login';
 function App() {
     const name= localStorage.getItem("name")
     console.log('name', name)
  return (
        <Router>
        <div>  
              <div>    <NavBar />   </div>             
        </div>
        <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
              <Route path='/cafea' element={<ShopCafea/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/echipamenteCafea' element={<EchipamenteCafea/>} />
              <Route path='/reteteCafea' element={<ReteteCafea/>} />
              <Route path='/dictionar' element={<Dictionar/>} />
              <Route path='/cont' element={<Cont/>} />
              <Route path='/shop' element={<Shop/>} />
              <Route path='/ceai' element={<ShopCeai/>} />
              <Route path='/produs/:id' element={<PaginaProdus/>} />
              <Route path='/curs' element={<CursBarista />} />
              <Route path='/cursBarista/:id' element={<PaginaCurs />} />
              <Route path='/echipamentCafea/:id' element={<PaginaEchipament />} />
              <Route path='/aeropress' element={<Aeropress/ >} />
              <Route path='/chemex' element={<Chemex/ >} />
              <Route path='/syphon' element={<Syphon/ >} />
              <Route path='/v60' element={<V60/ >} />
              <Route path='/login' element={<Login/ >} />
              <Route path='/register' element={<Register />} />
              <Route path='/profil' element={<Profil name={name}/>} />
        </Routes>

        <div>
        <Footer/>
        </div>
        </Router>
        
  );
}

export default App; /* sa faca functia valabila ,vazuta si de celelalte files*/
