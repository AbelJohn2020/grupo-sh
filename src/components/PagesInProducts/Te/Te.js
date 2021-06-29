import React from 'react';
import { te } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const Te = () => {
    return (
        <div>
            <HerbalifeNavbar />
            <h1>té concentrado de hierbas</h1>
            {
                te.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
            <HerbalifeFooter />
        </div>
    )
}

export default Te;