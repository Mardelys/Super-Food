import React from "react";
import  LogoPrincipal from './images/Logo.jpeg'
import './MenuBannerFooter.css'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'


function Footer() {
   return (
      <footer>
      <img src={LogoPrincipal} className="img-logo" alt="Logo Marde" />
      <div className="contacto_footer">
      
         <span>Grupo #1. Desarrollo web Sena </span>
         <p>(301)-6498367</p>
         <p>By Mardelys, Juan, Ana y Carolina Team</p>
      </div>
      <div className="container-icon">
         <a href='https://wa.link/2ecc6b'><IoLogoWhatsapp className='icon'/></a>
         <a href='https://www.instagram.com/gustososovejitos_/?hl=es'><AiFillInstagram className='iconI'/></a>
      </div>
   
   
      </footer>
   )}

   export default Footer;