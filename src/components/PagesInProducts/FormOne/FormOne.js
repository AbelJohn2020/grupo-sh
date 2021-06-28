import React from 'react';
import { form } from '../../data-images/products-images';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

export const FormOne = () => {
    return (
        <div>
            <h1>fórmula 1 batido nutricional</h1>
            {
                form.map( ({id, product, name, code}) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
        </div>
    )
}

export default FormOne;