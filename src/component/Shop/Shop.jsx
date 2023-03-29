import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {

    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        console.log('storedCart: ',storedCart);
        const savedCart = [];
        //step-1: get id
        for(const id in storedCart){
            //step-2: get product details using id
            const addedProduct = products.find(product=>product.id===id);
            //step-3: set no of quantity that is added to cart 
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step-4: Add the addedProduct to the savedProduct
                savedCart.push(addedProduct);
            }
            console.log('addedProduct: ',addedProduct);
            console.log('savedCart: ',savedCart);
        }
        //step-5: set the cart
        setCart(savedCart)
    },[products])
    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);
        
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