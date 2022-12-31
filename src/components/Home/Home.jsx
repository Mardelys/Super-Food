import React from "react";//
//dependencies are imported
import './Home'
import Imglogos from './images/imglogo.jpg'
import  LogoPrincipal from './images/Logo.png'
import { Outlet, Link } from 'react-router-dom'
import './Home.css'


//se crea un componente home el cual no tiene funcionaliudad solo nos muestra información acerca del negocio
function Home() {
   return (
      <>
      <Outlet />
      <section className="container-about-us">
         <h1 className="title-home">Gustosos Ovejitos</h1>
         <div className="about-us">
            <p className="p-home">       Gustosos ovejitos es un negocio de comida rápida con una gran historia detrás, inicialmente llevaba como nombre “Date un gusto” era el sitio preferido de muchas personas para compartir con familia y amigos, pero se decidió hacer una fusión con otro gran exponente de comida rapida en Cabimas, conocido como “Ovejo’s Burguer” de allí nació Gustosos Ovejitos.
            </p>

            <img src={Imglogos} className="logo_fusion" alt="Logo Gustosos Ovejitos" />
            <div className="p-logo">
               <p className="p-home">Somos más que un puesto de comida rápida, el objetivo es brindar calidad, excelente atención al cliente y sobre todo momentos inolvidables.
               Prueba nuestros productos y deleitate con el mejor sabor de Cabimas y sobre todo al mejor precio.</p>
            
               <img src={LogoPrincipal} className="lgfusion" alt="Logo Gustosos Ovejitos" />
            </div>
         </div>
         
            <h2 className="title-2">¡Bienvenido, Disfruta de nuestros produtos.!</h2>
         <div className="container-img">
         <img  className="img-food" src={require("./images/home1.png")} alt="" />
         <img  className="img-food" src={require("./images/home2.png")} alt="" />
         <img  className="img-food" src={require("./images/home3.png")} alt="" />
         
         </div>
         {/*<h2 className="title-2">Ambiente Familiar, no te lo pierdas contactanos</h2>
         <div className="container-img">
            <img  className="img-food" src={require("./images/instagram.jpeg")} alt="" />
   </div>*/}
         <Link to="/combos"><button className='btn-product fixed'>Haz tu Pedido</button></Link>
      </section>
      </>
   )}

   export default Home;