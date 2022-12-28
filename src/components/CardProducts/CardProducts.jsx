import React from "react";
import './CardProducts.css'
//import {Link } from 'react-router-dom'

function CardProducts({image, title, description, price}){
   return (
      <div className="container-card">
         <img  className="img-card" src={require(`./images/img-${image}.png`)} alt="" />
         <h2 className="title-card"> {title}</h2>
         <p className="description-card">{description}</p>
         <p className="price-card">{price} $</p>
      </div>
   )}

   export default CardProducts;