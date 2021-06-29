import React from 'react';
import { aloeCon } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const AloeCon = () => {
    return (
        <div>
            <HerbalifeNavbar />
            <h1>herbal aloe concentrado</h1>
            {
                aloeCon.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
            <HerbalifeFooter />
        </div>
    )
}

export default AloeCon;