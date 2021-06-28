import React from 'react';
import { aloe } from '../../data-images/products-images';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const Aloe = () => {
    return (
        <div>
            {
                aloe.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
        </div>
    )
}

export default Aloe;