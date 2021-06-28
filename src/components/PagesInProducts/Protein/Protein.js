import React from 'react';
import { protein } from '../../data-images/products-images';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const Protein = () => {
    return (
        <div>
            {
                protein.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
        </div>
    )
}

export default Protein;