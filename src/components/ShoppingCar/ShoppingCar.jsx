import React from "react";
import './ShoppingCar.css'
import { IoMdRemoveCircle, IoMdAddCircle, IoMdTrash } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
//import { ProductItems } from "../CardProducts/Items";

const ShoppingCar = () => {
   const cart = useSelector((state) => state)
   console.log("Estamos en el carrito de compras ", cart)
   const dispatch = useDispatch()

   const addition = (acc, currentValue) => {
      return acc + currentValue.price * currentValue.quantity
   }
   const total = cart.reduce(addition, 0)

   let totalItems = 0;
   //Total
   cart.map((ProductItems) => { totalItems += ProductItems.quantity });
   // const [carshopping, setCarshopping] = value.carshopping
   
   return (
      <div className="cars-shopping">
         <h1 className="title-car">Orden</h1>
         
            <div className="car-shopping" >
               
               <div className="carshopping_center">
                  {cart.map((ProductItems) =>
                  <div className="carshopping_item" key={ProductItems.id}>
                     <img className="img-shopṕing" src={require(`../CardProducts/images/img-${ProductItems.image}.png`)} alt="" />
                     <div>
                        <h3>{ProductItems.title}</h3>
                        <p className="price">{ProductItems.price * ProductItems.quantity}$</p>
                     </div>
                     <div className="n-items-select">
                        <button onClick={() => {
                           if (ProductItems.quantity > 1) {
                              dispatch({ type: 'DECREASE', payload: ProductItems })
                           } else {
                              dispatch({ type: 'REMOVE', payload: ProductItems })
                           }
                        }}><IoMdRemoveCircle className="ico" /></button>
                        <p className="n-items">{ProductItems.quantity}</p>
                         <button onClick={()=>dispatch({type: 'INCREASE',payload: ProductItems })}><IoMdAddCircle className="ico" /></button>
                     </div>
                     <div className="remove_item">
                     <button onClick={() => dispatch({ type: 'REMOVE', payload: ProductItems })} className='delete-product'><IoMdTrash className="ico" /></button>

                     </div>
                  </div>)}
               </div>
               <div className="carshopping_total">
                  <h5>{`Productos seleccionados: ${totalItems}`}</h5>
                  <h3>{total} $</h3>
                  <button className="btn btn-buy">Confirmar pedido</button>

               </div>
            </div>
         <p className="p-info">*Esta aplicación no posee pasarela de pagos, por lo tanto al confirmar su pedido será puesto en contacto con el propietario del negocio vía Whatsapp.</p>
      </div>

   )
}

export default ShoppingCar;