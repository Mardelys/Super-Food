import React from "react";
import './CardProducts.css'
//import {Link } from 'react-router-dom'
import CardProducts from "./CardProducts"

export default function Combos(){
   return (
 <><section className="container-cards-products">
   <CardProducts
    image="combo1"
    title="Combo #1"
    description="1 Hamburguesa y 2 Perros calientes sencillos"
    price="4.0"
  />
  <CardProducts
  image="combo2"
  title="Combo #2"
  description="3 Perros calientes sencillos"
  price="4.0"
/></section>
</>
   )}

   export function Hamburguesas(){
      return (
   
      <CardProducts
       image="combo2"
       title="Hamburguesa"
       description="1 Hamburguesa y 2 Perros calientes sencillos"
       price="4.0"
     />
      )}

      export function Perros(){
         return (
      
         <CardProducts
          image="combo2"
          title="Perros"
          description="1 Hamburguesa y 2 Perros calientes sencillos"
          price="4.0"
        />
         )}
         export function Patacones(){
            return (
         
            <CardProducts
             image="combo2"
             title="Patacones"
             description="1 Hamburguesa y 2 Perros calientes sencillos"
             price="4.0"
           />
            )}
            export function Arepas(){
               return (
            
               <CardProducts
                image="combo2"
                title="Arepa"
                description="1 Hamburguesa y 2 Perros calientes sencillos"
                price="4.0"
              />
               )}
               export function Gya(){
                  return (
               
                  <CardProducts
                   image="combo2"
                   title="Gaseosa"
                   description="1 Hamburguesa y 2 Perros calientes sencillos"
                   price="4.0"
                 />
                  )}
            

   