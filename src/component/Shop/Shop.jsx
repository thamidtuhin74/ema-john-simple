import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
        
                {
                    products.map(product => <SingleProduct
                        key = {product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></SingleProduct>)
                }
            </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
                <p>Selected Item : {cart.length}</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h3>Grand Total: $1559</h3>
                <button>Clear Cart<FontAwesomeIcon icon={faTrash} /></button>
                <button>Review Cart<FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
        </div>
    );
};

export default Shop;