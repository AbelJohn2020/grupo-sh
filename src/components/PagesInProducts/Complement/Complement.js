import React from 'react';
import { complement } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';

const Complement = () => {
    return (
        <div>
            <HerbalifeNavbar />
            <h1>complementos</h1>
            {
                complement.map( ({ id, product, name, code }) => (
                    <div key={id}>
                        <ProductsInProducts product={product} name={name} code={code} />
                    </div>
                ))
            }
            <HerbalifeFooter />
        </div>
    )
}

export default Complement;