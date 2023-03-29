import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import Cart from '../Cart/Cart';
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;