import React from 'react';
import { LinkContact } from '../Buttons/Buttons';
import { ContainerMessage, MaxLengthInMessage, TextareaMessage } from './ClientMessageStyles';

const ClientMessage = ({name, code, message, handleChange}) => {
    const urlCode = code.replace(/\s/g, '%20');
    const urlName = name.replace(/\s/g, '%20');
    const urlMessage = message.replace(/\s/g, '%20');
    const url= `https://wa.me/51987518875?text=${urlName}%2E%20${urlCode}%2E%20${urlMessage}`;
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