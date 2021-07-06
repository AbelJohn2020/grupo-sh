import React from 'react';
import { aloe } from '../../data-images/aloe';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';
import { HerbalifeProductsSubtitle } from '../../Ttile/Title';
import { AllProductsBySector, BackgroundStyles, Body, OneProductOfTheSector } from '../FormOne/FormOneStyles';
import "../../UI/styles.css";

const Aloe = () => {
    return (
        <Body>
            <HerbalifeNavbar />
            <BackgroundStyles>
                <HerbalifeProductsSubtitle name="herbal aloe"/>
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