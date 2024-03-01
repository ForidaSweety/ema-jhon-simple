import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({ product,handleRemoveFromCart }) => {
    const { _id, img, name, price, quantity } = product;

    return (
        <div className='reviewItem'>
            <img src={img} alt="" />
            <div className='reviewInfo'>
                <p className='productTitle'>{name}</p>
                <p>Price: <span className='text'>${price}</span></p>
                <p>Quantity: <span className='text'>{quantity}</span></p>

            </div>
            <button onClick={()=>handleRemoveFromCart(_id)} className='btn-dlte'><FontAwesomeIcon className='dlte-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;