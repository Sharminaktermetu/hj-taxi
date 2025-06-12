import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importing icons from react-icons
import { MdAddIcCall } from "react-icons/md";

const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center relative">
        <h1 className="text-3xl md:text-5xl font-bold">
          Confort, <span className="text-yellow-400">ponctualité</span>,
          sécurité,
          <br />
          <span className="text-gray-400">le transport que vous méritez</span>
        </h1>
        <p className="mt-4 text-gray-500">
          HJ Taxi, votre partenaire santé pour tous vos trajets médicaux 24h/24
          – 7j/7
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-yellow-400 text-white px-6 py-2 rounded shadow hover:bg-yellow-500">
            Réserver maintenant
          </button>
          <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800">
            Set teg i samband vô okkur
          </button>
        </div>
        <div className="mt-20 flex justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" top-0 left-0 w-2/3 h-full object-cover rounded-md opacity-75 z-0"
          >
            <source src="/van.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Floating Call and WhatsApp icons */}
        <div className="absolute bottom-20 right-4 space-y-4 flex flex-col items-center">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/your-phone-number" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={40}
              className="bg-[#20A161] text-white p-1 rounded-full"
            />
          </a>

          {/* Call Icon */}
          <a
            href="tel:+your-phone-number" // Replace with your phone number
           
          >
            <MdAddIcCall size={40} className=" text-white p-1.5 bg-blue-500 rounded-full" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
