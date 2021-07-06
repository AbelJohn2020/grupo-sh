import React from 'react';
import { Button, CardImage, ImageOfProducts, MainCard } from './CardComponentStyle';
import "../UI/styles.css";

const CardComponent = ({product, name}) => {
    return (
        <MainCard>
            <CardImage>
                <ImageOfProducts src={product} alt={name} />
            </CardImage>
            <Button>{name}</Button>
        </MainCard>
    )
}

export default CardComponent;