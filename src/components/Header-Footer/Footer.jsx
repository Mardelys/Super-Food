import React from "react";
import  LogoPrincipal from './images/Logo.png'
import './MenuBannerFooter.css'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'


function Footer() {
   return (
      <footer>
      <img src={LogoPrincipal} className="img-logo" alt="Logo Marde" />
      <div className="contacto_footer">
      
         <span>Lilimar Gonzalez </span>
         <p>(0412)075-91-07</p>
         <p>By Mardelys Torres</p>
      </div>
      <div className="container-icon">
         <a href='https://wa.link/2ecc6b'><IoLogoWhatsapp className='icon'/></a>
         <a href='https://www.instagram.com/gustososovejitos_/?hl=es'><AiFillInstagram className='iconI'/></a>
      </div>
   
   
      </footer>
   )}

   export default Footer;