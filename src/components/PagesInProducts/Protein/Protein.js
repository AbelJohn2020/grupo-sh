import React from 'react';
import { protein } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';
import { HerbalifeProductTitle } from '../../Ttile/Title';
import { AllProductsBySector, BackgroundStyles, Body, OneProductOfTheSector } from '../FormOne/FormOneStyles';

const Protein = () => {
    return (
        <Body>
            <HerbalifeNavbar />
            <BackgroundStyles>
                <HerbalifeProductTitle name="proteína"/>
                <AllProductsBySector>
                    {
                        protein.map( ({id, product, name, code}) => (
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

export default Protein;