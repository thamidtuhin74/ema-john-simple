import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {

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
            <button className='btn-addToCart'>Add to Cart</button>
        </div>
    );
};

export default SingleProduct;