import { getStoredCart } from "../utilities/fakedb";

export const dataLoaders = async ()=>{
   const res = await fetch('products.json');
   const products = await res.json();

   const savedCart = getStoredCart()
   const initialCart = [];
   for(const id in savedCart){
    // console.log(id);
    const addedProduct = products.find(product =>product.id === id);
    console.log(addedProduct);
    if(addedProduct){
        const quantity = savedCart[id]
        // console.log(id,quantity);
        addedProduct.quantity = quantity
        initialCart.push(addedProduct)
    }
    

   }
   

   return {products, initialCart}
}