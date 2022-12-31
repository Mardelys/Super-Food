//dependencies are imported
import React from "react";
import './Category.css'
import {Link } from 'react-router-dom'

//a small component is defined which will have the routes defined by means of a route props, this button corresponds to each category, when clicked it shows the filtered cards by corresponding category
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