import React from "react";
import './CardProducts.css'
//import {Link } from 'react-router-dom'
import CardProducts, {CardProductsAd} from "./CardProducts"


export default function Combos(){
   return (
 <>
 <h1 className="titulo-section">Combos</h1>
 <section className="container-cards-products">
   <CardProducts
    image="combo1"
    title="Combo #1"
    description="1 Hamburguesa y 2 Perros calientes sencillos"
    price="4.0"/>
  <CardProducts
  image="combo2"
  title="Combo #2"
  description="3 Perros calientes sencillos"
  price="4.0"/>
   <CardProducts
  image="combo3"
  title="Combo #3"
  description="4 Hamburguesas sencillas y 2 Perros calientes sencillos"
  price="8.0"/>
   <CardProducts
  image="combo4"
  title="Combo #4"
  description="4 Hamburguesas sencillas y 1 refresco"
  price="8.0"/>
   <CardProducts
  image="combo5"
  title="Combo #5"
  description="5 Perros calientes sencillos y 1 refresco"
  price="8.0"/>
   <CardProducts
  image="combo6"
  title="Combo #6"
  description=" 2 Hamburguesas sencillas, 3 Perros calientes sencillos y 1 refresco"
  price="8.0"/>
</section>
</>
   )}

   export function Hamburguesas(){
      return (
         <>
         <h1 className="titulo-section">Hamburguesas</h1>
         <section className="container-cards-products">
         <CardProducts
         image="gustosa1"
         title="H. Sencilla de Carne"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, carne, lechuga, tomate y papitas. "
         price="2.5"/>

         <CardProducts
         image="gustosa1"
         title="H. Sencilla de Pollo"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, Pollo, lechuga, tomate y papitas. "
         price="3.5"/>

         <CardProducts
         image="gustosa1"
         title="H. Sencilla de Lomito"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, Lomito, lechuga, tomate y papitas. "
         price="3.5"/>

         <CardProducts
         image="gustosa"
         title="H. Gustosa de Carne"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, Carne, tocineta, lechuga, tomate, queso de mano, papitas y papas fritas. "
         price="5.0"/>

         <CardProducts
         image="gustosa"
         title="H. Gustosa de Pollo"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, Pollo, tocineta, lechuga, tomate, queso de mano, papitas y papas fritas. "
         price="6.0"/>

         <CardProducts
         image="gustosa"
         title="H. Gustosa de Lomito"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, Lomito, tocineta, lechuga, tomate, queso de mano, papitas y papas fritas. "
         price="6.0"/>

         <CardProducts
         image="gustosa1"
         title="H. Ovejitos 2 carnes"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, (Carne, pollo o Lomito), tocineta, lechuga, tomate, queso de mano, papitas y papas fritas. "
         price="8.5"/>

         <CardProducts
         image="gustosa1"
         title="H. Ovejitos 3 carnes"
         description="Ingredientes: Mayonesa, mostaza, salsa de tomate, (Carne, pollo o Lomito), tocineta, lechuga, tomate, queso de mano, papitas y papas fritas. "
         price="10.0"/>
      </section>
      </>

      )}

export function Perros(){
   return (
      <>
     <h1 className="titulo-section">Perros Calientes</h1>
      <section className="container-cards-products">
         <CardProducts
         image="perro"
         title="Perro Caliente Sencillo"
         description="Ingredientes: Salchicha, papitas, mayonesa, salsa de tomate, mostaza, ensalada y queso rallado."
         price="2.0"/>

         <CardProducts
         image="perro"
         title="Perro Caliente Especial"
         description="Ingredientes: Salchicha, papitas, mayonesa, salsa de tomate, mostaza, ensalada, queso rallado, queso de mano, jamón ahumado y huevo."
         price="2.5"/>
   </section>
   </>
)}


export function Patacones(){
   return (
      <>
      <h1 className="titulo-section">Patacones</h1>
   <section className="container-cards-products">
      <CardProducts image="patacon"
         title="Patacón Carne mechada"
         description="Ingredientes: Patacón platano verde x2, carne mechada, verduras, queso de mano, jamón ahumado, queso rallado, mayonesa, salsa de tomate, mostaza y salsa de aguacate"
         price="8.0"/>
      
      <CardProducts
         image="patacon1"
         title="Patacón de Pollo"
         description="Ingredientes: Patacón platano verde x2, Pollo, verduras, queso de mano, jamón ahumado, queso rallado, mayonesa, salsa de tomate, mostaza y salsa de aguacate"
         price="9.5"/>

      <CardProducts
         image="patacon1"
         title="Patacón de Lomito"
         description="Ingredientes: Patacón platano verde x2, Lomito, verduras, queso de mano, jamón ahumado, queso rallado, mayonesa, salsa de tomate, mostaza y salsa de aguacate"
         price="9.5"/>
   </section></>
)}



export function Arepas(){
   return (
      <>
   <h1 className="titulo-section">Arepitas Cabimeras</h1>
      <section className="container-cards-products">
         
         <CardProducts
         image="arepa"
         title="Arepa de Carne Mechada"
         description="Ingredientes: Arepa,Carne mechada, ensalada(repollo,zanahoria), huevo, jamón ahumado,queso rallado, salsa de tomate, mayonesa, mostaza y salsa de aguacate"
         price="4.0"/>

         <CardProducts
         image="arepa"
         title="Arepa de Pollo"
         description="Ingredientes: Arepa, Pollo, ensalada(repollo,zanahoria), huevo, jamón ahumado,queso rallado, salsa de tomate, mayonesa, mostaza y salsa de aguacate"
         price="6.0"/>

        <CardProducts
         image="arepa"
         title="Arepa de Lomito"
         description="Ingredientes: Arepa,Lomito, ensalada(repollo,zanahoria), huevo, jamón ahumado,queso rallado, salsa de tomate, mayonesa, mostaza y salsa de aguacate"
         price="6.0"/>

        <CardProducts
         image="arepa"
         title="Arepa Mixta doble"
         description="Ingredientes: 2 Arepas,Carne mechada, pollo o lomito, ensalada(repollo,zanahoria), huevo, jamón ahumado,queso rallado, salsa de tomate, mayonesa, mostaza y salsa de aguacate"
         price="8.0"/>
      </section>
      </>
)}
export function Gya(){
   return (
   <>

 <h1 className="titulo-section">Gaseosas y Adicionales</h1>
   <section className="container-cards-products">
       <CardProducts
      image="refresco1"
      title="Refresco pequeño(Personal)"
      price="0.8"/>
      <CardProducts
      image="refresco2"
      title="Refresco retornable 1.25L"
      price="1.6"/>
      <CardProducts
      image="refresco3"
      title="Refresco 1.5L"
      price="2.5"/>
   </section>
  <div className="container-card-adic">
  <CardProductsAd title="Huevo"
      price="0.3"/>
   <CardProductsAd title="Papas Fritas"
      price="2.5"/>
   <CardProductsAd title="Queso de mano"
      price="1.0"/>
<CardProductsAd title="Arepa"
      price="0.5"/>
<CardProductsAd title="Salsas"
      price="0.5"/>
<CardProductsAd title="Tocineta"
      price="1.0"/>
   <CardProductsAd title="Salsa de Aguacate"
      price="1.0"/>
   <CardProductsAd title="Tajadas"
      price="0.5"/>
  </div>
   </>
               
                  )}
            

   