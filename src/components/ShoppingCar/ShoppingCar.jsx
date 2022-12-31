import React from "react";
import './ShoppingCar.css'
import { IoMdRemoveCircle, IoMdAddCircle, IoMdTrash } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import ReactWhatsapp from "react-whatsapp";

//
//defines acomponent that contains the cart and esye uses different redux functions such as dispatch we can say that to communicate with the store we must use dispatch.
const ShoppingCar = () => {
   const cart = useSelector((state) => state)
   
   const dispatch = useDispatch()
//a constant is created that is in charge of the operation of adding the prices of the cart,
   const addition = (acc, currentValue) => {
      return acc + currentValue.price * currentValue.quantity
   }
   const total = cart.reduce(addition, 0)

   let totalItems = 0;
   //Total

   //A map is used to determine how many products are in the cart, and the quantity of them, a fundamental basis to be able to fill the cart
   cart.map((ProductItems) => { totalItems += ProductItems.quantity });
   
   return (
      <>
      <div className="cars-shopping">
         <h1 className="title-car">Orden</h1>
         
            <div className="car-shopping" >
               
               <div className="carshopping_center">
                  {cart.map((ProductItems) =>//This function returns the jsx code that will draw the selected products in the cart, with the specifications and props that we determine are necessary to make the use of this cart interactive and understandable.
                  <div className="carshopping_item" key={ProductItems.id}>
                     <img className="img-shopṕing" src={require(`../CardProducts/images/img-${ProductItems.image}.png`)} alt="" />
                     <div>
                        <h3>{ProductItems.title}</h3>
                        <p className="price">{ProductItems.price * ProductItems.quantity}$</p>
                     </div>
                     <div className="n-items-select">{/* This event on click evaluates us a conditional where we can observe the word remove(eliminate) and decrease(decrease) in this context it is understood that this event decreases the quantity of products or if it is the case when there are no more to decrease it eliminates the item */}
                        <button onClick={() => {
                           if (ProductItems.quantity > 1) {
                              dispatch({ type: 'DECREASE', payload: ProductItems })
                           } else {
                              dispatch({ type: 'REMOVE', payload: ProductItems })
                           }
                        }}><IoMdRemoveCircle className="ico" /></button>
                        <p className="n-items">{ProductItems.quantity}</p>{/**
this element takes the quantity from the json, by default it is 1 but in this section the change of state of this property will only be reflected through the events of the decrease and increase buttons,There is also the event of increasing items that is described in the following onclick, playload, playload refers to what redux needs to work correctly. For example, the on click remove button specifies that the Productitems are needed, this is the array of products*/}
                         <button onClick={()=>dispatch({type: 'INCREASE',payload: ProductItems })}><IoMdAddCircle className="ico" /></button>
                     </div>
                     <div className="remove_item">
                     <button onClick={() => dispatch({ type: 'REMOVE', payload: ProductItems })} className='delete-product'><IoMdTrash className="ico" /></button>

                     </div>
                  </div>)}
               </div>
               <div className="carshopping_total">{/*refers to the total number of items selected by the user,*/ }
                  <h5>{`Productos seleccionados: ${totalItems}`}</h5>
                  <h3>{total} $</h3>{/* react whatsapp is imported to be able to redirect the purchase of the products, thus putting the customer in contact with the seller*/ }
                  <ReactWhatsapp number="57-301-649-8367" message={`Hola Lilimar, espero estés bien, me interesa hacerte el pedido de los siguientes productos:${cart.map((ProductItems) => "_____ "+ ProductItems.quantity +
                     "   " + ProductItems.title + "   " +  " "+ "   "  + "   " + "Precio/u: " + "   "  + ProductItems.price + "$" + ""
  )}   -.TOTAL COMPRA.- : $${total}`} > <button className="btn btn-buy">Confirmar pedido</button></ReactWhatsapp>
               </div>
            </div>
         <p className="p-info">*Esta aplicación no posee pasarela de pagos, por lo tanto al confirmar su pedido será puesto en contacto con el propietario del negocio vía Whatsapp.</p>
      </div></>

   )
}

   

export default ShoppingCar;