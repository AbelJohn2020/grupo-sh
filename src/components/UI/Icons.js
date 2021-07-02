import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const iconSet = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  whatsApp: ImWhatsapp,
  location: GoLocation,
  mail: AiOutlineMail,
};

const Icons = ({ type, className }) => {
  const ComponentToRender =iconSet[type];
  return (
    <>
        { type?
            <ComponentToRender className={className} />:
            <span></span>
        }
    </>
   
  );
};

export default Icons;