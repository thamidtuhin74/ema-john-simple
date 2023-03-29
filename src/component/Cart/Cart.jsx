import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    // console.log(props.carts);
    // const cart = props.cart;
    // const {cart} = props;
    console.log(cart);

    let totalPrice = 0 ;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity===0)
        {
            product.quantity=1
        }
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
        quantity = quantity + product.quantity ;
    }
    const tax  =  (totalPrice*7)/100;//7% Tax
    const grandTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
                <p>Selected Item : {quantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
                <button>Clear Cart<FontAwesomeIcon icon={faTrash} /></button>
                <button>Review Cart<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Cart;