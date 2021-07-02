import React from 'react';
import { 
    AppointmentH2Styles,
    AppointmentTitleStyles,
    HerbalifeProductsDivStyles,
     HerbalifeProductsH1Styles,
     HerbalifeProductsH2Styles, 
     HerbalifeProductsPStyles, 
     HerbalifeProductsSubtitleStyles, 
     HerbalifeProductsTitleStyles, 
     HerbalifeProductTitleStyles,
     OurJobMessageStyles,
     OurJobTitleStyles
} from "./TitleStyles";

export const HerbalifeProductsTitle = ({name}) => {
    return (
        <HerbalifeProductsTitleStyles>
            <HerbalifeProductsH1Styles>{name}</HerbalifeProductsH1Styles>
        </HerbalifeProductsTitleStyles>
    );
}

export const AppoimentTitle = ({name}) => {
    return (
        <AppointmentTitleStyles>
            <AppointmentH2Styles>{name}</AppointmentH2Styles>
        </AppointmentTitleStyles>
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

export const HerbalifeProductTitle = ({name}) => {
    return (
        <HerbalifeProductTitleStyles>
            <HerbalifeProductsH1Styles>{name}</HerbalifeProductsH1Styles>
        </HerbalifeProductTitleStyles>
    );
}

export const OurJobTitle = ({name}) => {
    return (
        <OurJobTitleStyles>
            <HerbalifeProductsH1Styles>{name}</HerbalifeProductsH1Styles>
        </OurJobTitleStyles>
    );
}

export const OurJobMessage = ({name}) => {
    return (
        <OurJobTitleStyles>
            <OurJobMessageStyles>{name}</OurJobMessageStyles>
        </OurJobTitleStyles>
    );
}