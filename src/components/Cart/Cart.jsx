import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

//const Cart = (props) => {
const Cart = ({ cart,handleClearCart,children }) => {
    //const cart = props.cart ;   option-1
    //const {cart} = props; // option-2

    //calculate product price and shipping
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // option-1
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // option-2
        //product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    // 7% tax calculation
    const tax = totalPrice * 7 / 100;

    //final amount
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={handleClearCart} className='btn-clear'><span>Clear Cart </span><FontAwesomeIcon icon= {faTrashAlt} /></button>
            {children}
        </div>
    );
};

export default Cart;