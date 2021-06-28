import React from 'react';
import { skin } from '../../data-images/products-images';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const Skin = () => {
    return (
        <div>
            {
                skin.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
        </div>
    )
}

export default Skin;