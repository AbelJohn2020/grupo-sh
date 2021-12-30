import React from 'react';
import InkavidaFooter from '../components/InkavidaFooter/InkavidaFooter';
import InkavidaNavbar from '../components/InkavidaNavbar/InkavidaNavbar';
import ProductsComponent from '../components/ProductsComponent/ProductsComponent';
import { ProductsTitle } from '../components/Ttile/Title';
import "../components/UI/styles.css"

const Products = () => {
    return (
        <div className="coverProducts">
            <InkavidaNavbar />
            <ProductsTitle name="productos"/>
            <ProductsComponent />
            <InkavidaFooter />
        </div>
    )
}

export default Products;
