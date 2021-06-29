import React from 'react';
import HerbalifeFooter from '../components/HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../components/HerbalifeNavbar/HerbalifeNavbar';
import ProductsComponent from '../components/ProductsComponent/ProductsComponent';
import { HerbalifeProductsTitle } from '../components/Ttile/Title';
import "../components/UI/styles.css"

const Products = () => {
    return (
        <div className="coverProducts">
            <HerbalifeNavbar />
            <HerbalifeProductsTitle name="productos"/>
            <ProductsComponent />
            <HerbalifeFooter />
        </div>
    )
}

export default Products;
