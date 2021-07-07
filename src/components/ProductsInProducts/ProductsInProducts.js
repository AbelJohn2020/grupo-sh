import React, { useState } from 'react';
import { BuyButtons } from '../Buttons/Buttons';
import { CardImage } from '../card/CardComponentStyle';
import ClientMessage from '../ClientMessage/ClientMessage';
import { Buy, CardProduct, CenterInformation, CodeProduct, ImageProduct, NameProduct } from './ProductsInProductsStyles';
import "../UI/styles.css";

const ProductsInProducts = ({product, name, code}) => {
    const [buy, setBuy] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <CardProduct>
            <CardImage>
                <ImageProduct src={product} alt={name} />
            </CardImage>
            <CenterInformation>
                <NameProduct>{name}</NameProduct>
                <CodeProduct>{code}</CodeProduct>
            </CenterInformation>
            <Buy>
                {
                    buy 
                    ? <ClientMessage name={name} code={code} message={message} handleChange={(e) => handleChange(e)}/>
                    : <BuyButtons name="comprar" buy={buy} setBuy={setBuy}/> 
                }
            </Buy>
        </CardProduct>
    )
}

export default ProductsInProducts;