import React from "react";
import { useState } from "react";
import Image from "next/image";
import phone from "../../public/phone-icon.png";
import close from "../../public/close-symbol.png";
import PhoneContent from "./PhoneContent";

const PhoneModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <Image
          alt="phone icon"
          src={close}
          onClick={handleClick}
          className="mr-2 mt-2 h-5 w-5 cursor-pointer"
        />
      ) : (
        <Image
          alt="phone icon"
          src={phone}
          onClick={handleClick}
          className="h-10 w-10 cursor-pointer"
        />
      )}
      {isOpen ? (
        <PhoneContent
          stemi="905-952-2466"
          stroke="905-883-1212,5555"
          baseHospital="866-667-6669"
          dispatch="800-461-4399"
        />
      ) : null}
    </div>
  );
};

export default PhoneModal;
