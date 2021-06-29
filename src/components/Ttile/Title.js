import React from 'react';
import { 
    HerbalifeProductsDivStyles,
     HerbalifeProductsH1Styles,
     HerbalifeProductsH2Styles, 
     HerbalifeProductsPStyles, 
     HerbalifeProductsSubtitleStyles, 
     HerbalifeProductsTitleStyles 
} from "./TitleStyles";

export const HerbalifeProductsTitle = ({name}) => {
    return (
        <HerbalifeProductsTitleStyles>
            <HerbalifeProductsH1Styles>{name}</HerbalifeProductsH1Styles>
        </HerbalifeProductsTitleStyles>
    );
}

export const HerbalifeProductsSubtitle = ({name}) => {
    return (
        <HerbalifeProductsSubtitleStyles>
            <HerbalifeProductsH2Styles>{name}</HerbalifeProductsH2Styles>
        </HerbalifeProductsSubtitleStyles>
    );
}

export const HerbalifeProductsP = ({name}) => {
    return (
        <HerbalifeProductsDivStyles>
            <HerbalifeProductsPStyles>{name}</HerbalifeProductsPStyles>
        </HerbalifeProductsDivStyles>
    );
}