import React from 'react';
import { aloe } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const Aloe = () => {
    return (
        <div>
            <HerbalifeNavbar />
            <h1>herbal aloe</h1>
            {
                aloe.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
            <HerbalifeFooter />
        </div>
    )
}

export default Aloe;