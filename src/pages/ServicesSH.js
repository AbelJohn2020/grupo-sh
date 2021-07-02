import React from 'react';
import BookYourMedicalApointment from '../components/BookYourMedicalAppointment/BookYourMedicalApointment';
import NavbarServices from '../components/NavbarServices/NavbarServices';
import OurJobServices from '../components/OurJobServices/OurJobServices';
import WelcomeServices from '../components/WelcomeServices/WelcomeServices';
import "../components/UI/styles.css"

const ServicesSH = () => {
    return (
        <div className="servicesSH">
            <NavbarServices />
            <WelcomeServices />
            <OurJobServices />
            <BookYourMedicalApointment />
        </div>
    )
}

export default ServicesSH;
