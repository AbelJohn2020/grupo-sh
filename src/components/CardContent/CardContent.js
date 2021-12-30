import React from 'react';
import ProductsInProducts from '../ProductsInProducts/ProductsInProducts';
import { ProductsSubtitle } from '../Ttile/Title';
import { BackgroundStyles } from './CardContentStyles';

const CardContent = ({ title, image, product}) => {
    return (
        <div>
            <BackgroundStyles>
                <ProductsSubtitle name={title} />
                <ProductsInProducts image={image} product={product} />
            </BackgroundStyles>
        </div>
    )
}

export default CardContent;