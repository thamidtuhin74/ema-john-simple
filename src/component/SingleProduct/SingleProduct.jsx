import React from 'react';
import './SingleProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const SingleProduct = (props) => {

    const handleAddToCart = props.handleAddToCart;
    
    const {name, price , seller, ratings, img} = props.product;
    return (
        <div className='single-product'>
            <div className="product-info">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price : {price}</h4>
                <p>Manufacture : {seller}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button className='btn-addToCart' onClick={()=>handleAddToCart(props.product)}>
                Add to Cart
                <FontAwesomeIcon icon={faCartShopping} />
                </button>
        </div>
    );
};

export default SingleProduct;