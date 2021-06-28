import React from 'react';
import { sport } from '../../data-images/products-images';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const Sport = () => {
    return (
        <div>
            {
                sport.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
        </div>
    )
}

export default Sport;