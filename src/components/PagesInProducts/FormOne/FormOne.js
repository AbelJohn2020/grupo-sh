import React from 'react';
import { form } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

export const FormOne = () => {
    return (
        <div>
            <HerbalifeNavbar />
            <h1>fórmula 1 batido nutricional</h1>
            {
                form.map( ({id, product, name, code}) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
            <HerbalifeFooter />
        </div>
    )
}

export default FormOne;