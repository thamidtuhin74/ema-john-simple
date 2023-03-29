import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="products-container">
        
                {
                    products.map(product => <SingleProduct
                        key = {product.id}
                        product={product}
                        ></SingleProduct>)
                }
            </div>
            <div className="order-summary">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;