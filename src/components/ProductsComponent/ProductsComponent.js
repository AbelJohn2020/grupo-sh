import React from 'react';
import ProductsHer from '../products/ProductsHer';
import { HerbalifeProductsP, HerbalifeProductsSubtitle } from '../Ttile/Title';
import { ListProductsStyles } from './ProductsComponentStyles';
import "../UI/styles.css";

const ProductsComponent = () => {
    return (
        <ListProductsStyles>
            <HerbalifeProductsSubtitle name="nutrición de calidad"/>
            <HerbalifeProductsP name="Productos de calidad basados en la ciencia. Productos que ayudan a que tu cuerpo obtenga los nutrientes que necesita."/>
            <ProductsHer />
        </ListProductsStyles>
    )
}

export default ProductsComponent;