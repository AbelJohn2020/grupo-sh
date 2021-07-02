import React from 'react';
import { BuyButton, BuyLink, ContactSession, SendMyBookMedicalAppointmentStyles } from './ButtonsStyle';

export function BuyButtons({name, buy, setBuy, }) {
    return (
        <div>
            <BuyButton onClick={() => setBuy(!buy)}>
                {name}
            </BuyButton>
        </div>
    ); 
}

export function LinkContact({ url, name }) {
    return (
        <div>
            <BuyLink href={url}>
                {name}
            </BuyLink>
        </div>
    ); 
}

export function ContactServices({ url, name }) {
    return (
        <ContactSession href={url}>
            {name}
        </ContactSession>
    ); 
}

export function SendMyBookMedicalAppoiment({ url, name }) {
    return (
        <SendMyBookMedicalAppointmentStyles href={url}>
            {name}
        </SendMyBookMedicalAppointmentStyles>
    ); 
}