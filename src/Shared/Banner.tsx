import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

const Banner = () => {
  return (
    <section className="bg-blue-50 py-12 text-center relative px-4">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
        Confort, <span className="text-yellow-400">ponctualité</span>, sécurité,
        <br className="hidden sm:block" />
        <span className="text-gray-400 block sm:inline">
          le transport que vous méritez
        </span>
      </h1>
      <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
        HJ Taxi, votre partenaire santé pour tous vos trajets médicaux 24h/24 – 7j/7
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-4">
        <button className="bg-yellow-400 text-white px-6 py-2 rounded shadow hover:bg-yellow-500 text-sm sm:text-base">
          Réserver maintenant
        </button>
        <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 text-sm sm:text-base">
          Set teg i samband vô okkur
        </button>
      </div>

      {/* Video */}
      <div className="mt-10 flex justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full sm:w-3/4 md:w-2/3 max-w-4xl rounded-md object-cover opacity-80"
        >
          <source src="/van.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Floating Call and WhatsApp icons */}
      <div className="absolute bottom-8 right-4 flex flex-col items-center space-y-3 sm:space-y-4">
        <a
          href="https://wa.me/your-phone-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp
            size={40}
            className=" bg-[#20A161] text-white p-2 rounded-full shadow-lg"
          />
        </a>

        <a href="tel:+your-phone-number">
          <MdAddIcCall
             size={40} 
            className="  text-white bg-blue-500 p-2 rounded-full shadow-lg"
          />
        </a>
      </div>
    </section>
  );
};

export default Banner;
