import React from 'react';
import { aloe } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';
import { HerbalifeProductTitle } from '../../Ttile/Title';
import { AllProductsBySector, BackgroundStyles, Body, OneProductOfTheSector } from '../FormOne/FormOneStyles';

const Aloe = () => {
    return (
        <Body>
            <HerbalifeNavbar />
            <BackgroundStyles>
                <HerbalifeProductTitle name="herbal aloe"/>
                <AllProductsBySector>
                    {
                        aloe.map( ({id, product, name, code}) => (
                            <OneProductOfTheSector key={id}>
                                <ProductsInProducts product={product} name={name} code={code} />
                            </OneProductOfTheSector>
                        ))
                    }
                </AllProductsBySector>
            </BackgroundStyles>
            <HerbalifeFooter />
        </Body>
    )
}

export default Aloe;