import React from 'react';
import { form } from '../../data-images/products-images';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';
import { HerbalifeProductsSubtitle } from '../../Ttile/Title';
import { AllProductsBySector, BackgroundStyles, Body, OneProductOfTheSector } from './FormOneStyles';
import "../../UI/styles.css";

export const FormOne = () => {



    return (
        <Body>
            <HerbalifeNavbar />
            <BackgroundStyles>
                <HerbalifeProductsSubtitle name="fórmula 1 batido nutricional"/>
                <AllProductsBySector>
                    {
                        form.map( ({id, product, name, code}) => {
                            return (
                                <OneProductOfTheSector key={id}>
                                    <ProductsInProducts product={product} name={name} code={code} />
                                </OneProductOfTheSector>
                            )
                        })
                    }
                </AllProductsBySector>
            </BackgroundStyles>
            <HerbalifeFooter />
        </Body>
    )
}

export default FormOne;