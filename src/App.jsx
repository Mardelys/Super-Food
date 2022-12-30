import React from 'react'; // se importan las dependencias necesarias,react, estilos, cada uno de los componentes que se necesitan, sobre todo Las rutas de react router dom para poder navegar en la app.
import './App.jsx';
import '../src/styles/App.css'
import Menu from './components/Header-Footer/Menu';
import Category from './components/Category/Category';
import ShoppingCar from './components/ShoppingCar/ShoppingCar';
import Home from './components/Home/Home';
import Combos, { Hamburguesas,Perros,Patacones,Arepas, Gya} from './components/CardProducts/Products';
import { Routes, Route} from 'react-router-dom'




function App() {
   return (
   <div className="App">

         <Routes>
            <Route path='/' element={<Menu />}>
               <Route path='/category' element ={<Category />}/>
               <Route path='/' element ={<Home />}/>
               <Route path='/shoppingcar' element ={<ShoppingCar />}/>
               <Route path='/' element ={<Category />} >
                  <Route path='/combos' element={<Combos />}/>
                  <Route path='/hamburguesas' element={<Hamburguesas />}/>
                  <Route path='/perros' element={<Perros />}/>
                  <Route path='/patacones' element={<Patacones />}/>
                  <Route path='/arepas' element={<Arepas />}/>
                  <Route path='/bebidas' element={< Gya/>}/>
               </Route>
            </Route>
            
         </Routes>
      </div>

   
); 
}
export default App;
