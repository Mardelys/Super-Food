import React from "react";
import './CardProducts.css'
import {MdShoppingCart} from 'react-icons/md'

function CardProducts({image, title, description, price}){
   return (
      <div className="container-card">
         <img  className="img-card" src={require(`./images/img-${image}.png`)} alt="" />
         <h2 className="title-card"> {title}</h2>
         <p className="description-card">{description}</p>
         <p className="price-card">{price} $</p>
         <button className="btn-add">Agregar <MdShoppingCart className="sc-card"/> </button>
      </div>
   )}

   export default CardProducts;

export function  CardProductsAd({title, price}){
   return(
      <div className="product-adic">
         <h2 className="title-card"> {title}</h2>
         <p className="price-card1">{price} $</p>
         <button className="btn-add">Agregar <MdShoppingCart className="sc-card"/> </button>
      </div>
   )
}