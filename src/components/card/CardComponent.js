import React from 'react';
import { Button, CardImage, MainCard } from './CardComponentStyle';

const CardComponent = ({product, name}) => {
    return (
        <MainCard>
            <CardImage>
                <img src={product} alt={name} />
            </CardImage>
            <Button>{name}</Button>
        </MainCard>
    )
}

export default CardComponent;