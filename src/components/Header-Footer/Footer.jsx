import React from "react";
import  LogoPrincipal from './images/Logo.png'
import './MenuBannerFooter.css'
import {IoLogoWhatsapp} from 'react-icons/io'


function Footer() {
   return (
      <footer>
      <img src={LogoPrincipal} className="img-logo" alt="Logo Marde" />
      <div>
      
         <span>Lilimar Gonzalez </span>
         <p>(0412)075-91-07</p>
         <p>By Mardelys Torres</p>
      </div>
      <div>
         <a href='https://wa.link/2ecc6b'><IoLogoWhatsapp className='icon'/></a>
      </div>
   
   
      </footer>
   )}

   export default Footer;