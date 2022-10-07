import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product,deleteHandle }) => {
    // console.log(product);
    const { name, img, price, quantity, shipping,id
    } = product;
    return (
        <div className='item-container'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="review-products-item">
                <div className="review-product">
                    <p>{name}</p>
                    <p><small>Price : ${price}</small></p>
                    <p><small>shipping
                        : ${shipping
                        }</small></p>
                    <p><small>Quantity : {quantity}</small></p>

                </div>
                <div className="review-button">
                    <button onClick={()=>deleteHandle(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-review' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;