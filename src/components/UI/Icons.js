import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const iconSet = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
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