import React from 'react'; // se importan las dependencias necesarias,react, estilos, cada uno de los componentes que se necesitan, sobre todo Las rutas de react router dom para poder navegar en la app.
import './App.jsx';
import '../src/styles/App.css'
import MenuBanner from './components/Header-Footer/MenuBanner';
import { Routes, Route } from 'react-router-dom'
//import Footer from './components/Header-Footer/Footer';

function App() {
   return (
<div className="App">
   <Routes>
      <Route path='/' element={<MenuBanner />}>

      </Route>
   </Routes>
      {/*<Footer/>*/}
</div>); 
}
export default App;
