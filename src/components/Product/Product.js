import React from 'react';
import './Product.css';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { img, name, price, stock, seller,key } = props.product;
    
    return (
        <div className="container-wrap">
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <Link to={'/product/'+key}><h2>{name}</h2></Link>
                <div className="pd-des">
                    <p>by {seller}</p>
                    <h4>Price: {price}</h4>
                    <h5>Only {stock} left in stock - order soon</h5>
                    {props.addToCart && <button onClick={()=>{props.addProductBtn(props.product)}}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
                </div>
                <div className="product-review">

                </div>
            </div>
        </div>
    );
};

export default Product;