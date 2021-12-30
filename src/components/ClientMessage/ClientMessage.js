import React from 'react';
import { LinkContact } from '../Buttons/Buttons';
import { ContainerMessage, MaxLengthInMessage, TextareaMessage } from './ClientMessageStyles';
import "../UI/styles.css";

const ClientMessage = ({name, message, handleChange}) => {
    const urlName = name.replace(/\s/g, '%20');
    const urlMessage = message.replace(/\s/g, '%20');
    const url= `https://wa.me/51987518875?text=Producto%3A%20${urlName}%2E%20${urlMessage}`;
    return (
        <ContainerMessage>
            <MaxLengthInMessage> máximo 200 letras </MaxLengthInMessage>
            <TextareaMessage 
                maxLength="200" 
                placeholder="Escríbenos aquí."
                value={message}
                onChange={handleChange}
            />
            <LinkContact name="enviar mensaje" url={url}/>
        </ContainerMessage>
    );
};

export default ClientMessage;