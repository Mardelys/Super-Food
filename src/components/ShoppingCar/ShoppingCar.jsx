import React from "react";
import './ShoppingCar.css'
import {IoMdRemoveCircle, IoMdAddCircle,IoMdTrash} from 'react-icons/io'



const ShoppingCar = () => {

  // const [carshopping, setCarshopping] = value.carshopping
   return (
      <div className="cars-shopping">
         <h1 className="title-car">Orden</h1>
         <div className="car-shopping">
            
            <div className="carshopping_center">
               <div className="carshopping_item">
                  <p>imagen</p>
                  <div>
                     <h3>H. Sencilla de Lomito</h3>
                     <p className="price">4.0$</p>
                  </div>
                  <div className="n-items-select">
                     <IoMdRemoveCircle className="ico"/>
                     <p className="n-items">1</p>
                     <IoMdAddCircle className="ico" />
                  </div>
                  <div className="remove_item">
                     <IoMdTrash className="ico"/>

                  </div>
               </div>
            </div>
            <div className="carshopping_total">
               <h3>Total: $4545</h3>
               <button className="btn btn-buy">Confirmar pedido</button>

            </div>
         </div>
         <p className="p-info">*Esta aplicación no posee pasarela de pagos, por lo tanto al confirmar su pedido será puesto en contacto con el propietario del negocio vía Whatsapp.</p>
      </div>
      
   )}

   export default ShoppingCar;