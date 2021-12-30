import React, { useState } from 'react';
import { BuyButtons } from '../Buttons/Buttons';
import ClientMessage from '../ClientMessage/ClientMessage';
import { Buy, CardImageProduct, CardProduct, CenterInformation, ImageProduct, NameProduct, SocialLink, SocialLinks } from './ProductsInProductsStyles';
import "../UI/styles.css";
import Icons from '../UI/Icons';

const ProductsInProducts = ({ image, product }) => {
    const [buy, setBuy] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <CardProduct buy={buy}>
            <CardImageProduct>
                <ImageProduct src={image} alt={product} />
            </CardImageProduct>
            <CenterInformation>
                <NameProduct>Conactanos para algun pedido</NameProduct>
                <SocialLinks>
                        <SocialLink href="https://es-la.facebook.com/people/Adase-Sac/100011011445796/">
                            <Icons type="facebook" className="icon" />
                        </SocialLink>
                        <SocialLink href="https://www.instagram.com/miguelsolis341/?hl=es-la">
                            <Icons type="instagram" className="icon" />
                        </SocialLink>
                        <SocialLink href="https://vm.tiktok.com/ZM8KRgGs8/">
                            <Icons type="tiktok" className="icon" />
                        </SocialLink>
                    </SocialLinks>
            </CenterInformation>
            <Buy>
                {
                    buy 
                    ? <ClientMessage name={product} message={message} handleChange={(e) => handleChange(e)}/>
                    : <BuyButtons name="comprar" buy={buy} setBuy={setBuy}/> 
                }
            </Buy>
        </CardProduct>
    )
}

export default ProductsInProducts;