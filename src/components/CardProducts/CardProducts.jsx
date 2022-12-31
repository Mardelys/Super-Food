//import necessary dependencies, paths, components and styles
import React from "react";
import './CardProducts.css'
import {MdShoppingCart} from 'react-icons/md'
//import useSelector and useDispatch from redux
import {useSelector, useDispatch}from 'react-redux'
import { ProductItems} from './Items'


//Two components are created that correspond to the product cards, with their respective props.
const CardProducts = ({id,image, title, description, price}) => {
//Reduce
    const cart = useSelector((state)=>state)
   console.log(cart)
    const dispatch = useDispatch()
   return (
      <div className="container-card">
         <img  className="img-card" src={require(`./images/img-${image}.png`)} alt="" />
         <h2 className="title-card"> {title}</h2>
         <p className="description-card">{description}</p>
         <p className="price-card">{price} $</p>
         <button className="btn-add" onClick={()=>dispatch({type:'ADD',payload:ProductItems.items[id -1]})}>Agregar <MdShoppingCart className="sc-card"/> </button>
      </div>
   
   )}
   export default CardProducts;

export function  CardProductsAd({id,title, price}){
//Reduce
    const cart = useSelector((state)=>state)
   console.log(cart)
    const dispatch = useDispatch()
   return(
      <div className="product-adic">
         <h2 className="title-card"> {title}</h2>
         <p className="price-card1">{price} $</p>
         <button className="btn-add" onClick={()=>dispatch({type:'ADD', payload:ProductItems.items[id -1]})}>Agregar <MdShoppingCart className="sc-card"/> </button>
      </div>
   )
}