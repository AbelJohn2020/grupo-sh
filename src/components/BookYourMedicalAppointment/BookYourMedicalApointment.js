import React, { useState } from 'react';
import { SendMyBookMedicalAppoiment } from '../Buttons/Buttons';
import { AppoimentTitle } from '../Ttile/Title';
import { BoxSend, BoxTextarea, ContainerAppointment, TextareaAppointmentStyle } from './BookYourMedicalAppointmentStyles';
import "../UI/styles.css";

function BookYourMedicalApointment() {
    const [appointment, setAppointment] = useState("");

    function handleChange (e) {
        setAppointment(e.target.value);
        console.log(appointment)
    };

    const SendMessageToWhatsApp = appointment.replace(/\s/g, '%20');
    const urlSend= `https://wa.me/51987518875?text=SESIONES%20DE%20BIOMAGNETISMO%3A%20${SendMessageToWhatsApp}`;

    return (
        <ContainerAppointment id="appointment">
            <AppoimentTitle name="reserva tu cita" />
            <BoxTextarea>
                <TextareaAppointmentStyle
                    maxLength="200" 
                    placeholder="Escribe tu consulta aqui."
                    value={appointment}
                    onChange={(e) => handleChange(e)}
                />
            </BoxTextarea>
            <BoxSend>
                <SendMyBookMedicalAppoiment name="enviar" url={urlSend} />
            </BoxSend>
        </ContainerAppointment>
    );
}

export default BookYourMedicalApointment;