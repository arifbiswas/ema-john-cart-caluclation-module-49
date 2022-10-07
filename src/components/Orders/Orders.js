import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {products,initialCart} = useLoaderData();
    const [cart ,setCart] = useState(initialCart)
    const deleteHandle = (id)=>{
        // console.log(id);
        const restItem = cart.filter(product =>product.id !== id);
        setCart(restItem)
        removeFromDb(id)
    }
    // console.log(products);
    return (
    <div className='shop-container'>
        <div className="review-container" style={{margin:20,}}>
        {
                    cart.map(product=><ReviewItem 
                        key={product.id}
                        product={product}
                        deleteHandle={deleteHandle}
                        ></ReviewItem>)
         }
        </div>
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>
    </div>
    );
};

export default Orders;