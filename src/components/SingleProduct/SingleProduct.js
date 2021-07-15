import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
const SingleProduct = () => {
    const {key}=useParams();
    const ProductResult = fakeData.find(x=> x.key === key);
    console.log(ProductResult)
    return (
        <div>
            <Product addToCart={false} product={ProductResult}></Product>
        </div>
    );
};

export default SingleProduct;