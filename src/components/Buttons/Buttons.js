import React from 'react';
import { BuyButton, BuyLink, ContactSession, SendMyBookMedicalAppointmentStyles } from './ButtonsStyle';
import "../UI/styles.css";

export function BuyButtons({name, buy, setBuy, }) {
    return (
        <BuyButton onClick={() => setBuy(!buy)}>
            {name}
        </BuyButton>
    ); 
}

export function LinkContact({ url, name }) {
    return (
        <BuyLink href={url}>
            {name}
        </BuyLink>
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