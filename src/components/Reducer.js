
//a constant reducer is created that takes cart as parameters or properties, this will handle the total functionality of the shopping cart
const Reducer = (cart=[], action) => {
   if (action.type === 'ADD'){
       let tempcraft=cart.filter((ProductItems)=>ProductItems.id===action.payload.id)
       if(tempcraft < 1){
           return [...cart, action.payload]
       } else{
           return cart;
       }
   }
   //This constant is made up of conditionals, it contains the add, remove, subtract and add functions, and everything with respect to the array of objects, which determines the number of products we have in ecommerce
   if (action.type === 'REMOVE'){
       return cart.filter((ProductItems) => ProductItems.id !== action.payload.id);
   }
   if(action.type ==='INCREASE'){
       let tempcart = cart.map((ProductItems) => {
           if(ProductItems.id === action.payload.id){
               return {...ProductItems, quantity: ProductItems.quantity+1};
           }   return ProductItems
       })
       return tempcart;
   }
   if(action.type ==='DECREASE'){
       let tempcart = cart.map((ProductItems) => {
           if(ProductItems.id === action.payload.id){
               return {...ProductItems, quantity: ProductItems.quantity-1};
           }   return ProductItems
       })
       return tempcart;
   }
   return cart;
}
export default Reducer;