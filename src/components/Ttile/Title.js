import React from 'react';
import { 
    AppointmentH2Styles,
    AppointmentTitleStyles,
    ProductsDivStyles,
     ProductsH1Styles,
     ProductsH2Styles, 
     ProductsPStyles, 
     ProductsSubtitleStyles, 
     ProductsTitleStyles, 
     ProductTitleStyles,
     OurJobMessageStyles,
     OurJobTitleStyles
} from "./TitleStyles";
import "../UI/styles.css";

export const ProductsTitle = ({name}) => {
    return (
        <ProductsTitleStyles>
            <ProductsH1Styles>{name}</ProductsH1Styles>
        </ProductsTitleStyles>
    );
}

export const AppoimentTitle = ({name}) => {
    return (
        <AppointmentTitleStyles>
            <AppointmentH2Styles>{name}</AppointmentH2Styles>
        </AppointmentTitleStyles>
    );
}

export const ProductsSubtitle = ({name}) => {
    return (
        <ProductsSubtitleStyles>
            <ProductsH2Styles>{name}</ProductsH2Styles>
        </ProductsSubtitleStyles>
    );
}

export const ProductsP = ({name}) => {
    return (
        <ProductsDivStyles>
            <ProductsPStyles>{name}</ProductsPStyles>
        </ProductsDivStyles>
    );
}

export const ProductTitle = ({name}) => {
    return (
        <ProductTitleStyles>
            <ProductsH1Styles>{name}</ProductsH1Styles>
        </ProductTitleStyles>
    );
}

export const OurJobTitle = ({name}) => {
    return (
        <OurJobTitleStyles>
            <ProductsH1Styles>{name}</ProductsH1Styles>
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