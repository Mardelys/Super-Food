import React from "react";
import './Category.css'
import {Link } from 'react-router-dom'
function ButtonCategory({image, title, route}){
   return (
      <>
      <div className="category-circle">
      <Link to={route}>
      <div className="button-category-deg">
         <img  className="img-category" src={require(`./images/img-${image}.png`)} alt="" />
         
      </div>
     </Link>
     <h2 className="title-cat-especify">{title}</h2>
     </div>
      </>
   )}
   
   export default ButtonCategory;