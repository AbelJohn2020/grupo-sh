import React from 'react';
import { aloeCon } from '../../data-images/aloe-con';
import HerbalifeFooter from '../../HerbalifeFooter/HerbalifeFooter';
import HerbalifeNavbar from '../../HerbalifeNavbar/HerbalifeNavbar';
import ProductsInProducts from '../../ProductsInProducts/ProductsInProducts';
import { HerbalifeProductsSubtitle } from '../../Ttile/Title';
import { AllProductsBySector, BackgroundStyles, Body, OneProductOfTheSector } from '../FormOne/FormOneStyles';
import "../../UI/styles.css";

const AloeCon = () => {
    return (
        <Body>
            <HerbalifeNavbar />
            <BackgroundStyles>
                <HerbalifeProductsSubtitle name="herbal aloe concentrado"/>
                <AllProductsBySector>
                    {
                        aloeCon.map( ({id, product, name, code}) => (
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

export default AloeCon;