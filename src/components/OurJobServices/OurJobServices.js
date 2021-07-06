import React from 'react';
import OneImage from "../../images/services-grupo-sh/biomagnetismo_4v2_1.jpg";
import TwoImage from "../../images/services-grupo-sh/biomagnetismo-imanes.jpg";
import ThreeImage from "../../images/services-grupo-sh/biomagnetismo.jpg";
import FourImage from "../../images/services-grupo-sh/terapia-biomagnetismo.png";
import FiveImage from "../../images/services-grupo-sh/terapia.jpg";
import SixImage from "../../images/services-grupo-sh/terapia2.jpg";
import { BoxImage, ContainerImages, OnlyImages } from './OurJobServicesStyles';
import { OurJobMessage, OurJobTitle } from '../Ttile/Title';
import "../UI/styles.css";

const ourJob = [
    {id: 0, image: FourImage, alt: "Image person with magnets in the legs"},
    {id: 1, image: ThreeImage, alt: "Woman in therapy by biomagnetic magnet"},
    {id: 2, image: OneImage, alt: "Girl in therapy by biomagnetic magnet"},
    {id: 3, image: FiveImage, alt: "Man in therapy by biomagnetic magnet"},
    {id: 4, image: SixImage, alt: "Man in therapy by biomagnetic magnet"},
    {id: 5, image: TwoImage, alt: "Biomagnetics magnets"},
];

function OurJobServices() {
    return (
        <ContainerImages>
            <OurJobTitle name="nuestro trabajo" />
            <OnlyImages>
               {
                   ourJob.map( ({id, image, alt}) => (
                       <BoxImage key={id}>
                           <img src={image} alt={alt} />
                       </BoxImage>
                   ))
               }
           </OnlyImages>
           <OurJobMessage name="El Biomagnetismo médico es un sistema terapéutico en el que los imanes se usan para ayudar al cuerpo humano a combatir parásitos, bacterias, hongos, virus y otros gérmenes que son la causa de varias enfermedades." />
        </ContainerImages>
    );
}

export default OurJobServices;