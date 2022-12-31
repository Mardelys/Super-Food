import React from "react";
import './Category.css'
import {Outlet,Link } from 'react-router-dom'
import ButtonCategory from "./ButtonCategory";
function Category(){

//
//A component is created where the category button component is used, repeating it for the number of categories that are in the app and its proper props are passed to it, including the routes to which each button directs us
   return (
     <>
       <h1 className="title-category">Categorías</h1>
       <section className="container-six-category">
        <ButtonCategory route="/combos" image="combo" title="Combos"/>
         <ButtonCategory route="/hamburguesas" image="hamburguesa" title="Hamburguesas"/>
         <ButtonCategory route="/perros" image="perro" title="Perros Calientes" />
         <ButtonCategory route="/patacones"image="patacon" title="Patacones" />
         <ButtonCategory route="/arepas"image="arepa" title="Arepitas Cabimeras" />
         <ButtonCategory route="/bebidas"image="gaseosa" title="Bebidas y Adicionales" />
         <Link to="/shoppingcar">
           <button className="btn-product fixed">Finalizar Orden</button>
         </Link>
       </section>
       <Outlet/>
     </>
   );}

   export default Category;