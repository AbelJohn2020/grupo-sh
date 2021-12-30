import React from 'react';
import ProductsHer from '../products/ProductsHer';
import { ProductsP, ProductsSubtitle } from '../Ttile/Title';
import { ListProductsStyles } from './ProductsComponentStyles';
import "../UI/styles.css";

const ProductsComponent = () => {
    return (
        <ListProductsStyles>
            <ProductsSubtitle name="nutrición de calidad"/>
            <ProductsP name="Productos de calidad basados en la ciencia. Productos que ayudan a que tu cuerpo obtenga los nutrientes que necesita."/>
            <ProductsHer />
        </ListProductsStyles>
    )
}

export default ProductsComponent;