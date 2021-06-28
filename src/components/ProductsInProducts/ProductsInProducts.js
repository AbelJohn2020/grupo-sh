import React from 'react';
import { CardImage } from '../card/CardComponentStyle';
import { CardProduct } from './ProductsInProductsStyles';

const ProductsInProducts = ({product, name, code}) => {
    return (
        <CardProduct>
            <CardImage>
                <img src={product} alt={name} />
            </CardImage>
            <div>
                <div>{name}</div>
                <div>{code}</div>
            </div>
            <div>
                <div>comprar</div>
            </div>
        </CardProduct>
    )
}

export default ProductsInProducts;