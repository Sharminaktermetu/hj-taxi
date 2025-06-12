import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuMessageCircle, LuPhone } from "react-icons/lu";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Logo & Description */}
        <div>
          <h4 className="text-xl font-bold text-yellow-400">HJ Taxi</h4>
          <p className="mt-2 text-sm">
            HJ Taxi, votre partenaire santé pour tous vos trajets médicaux
            24h/24 – 7j/7
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h5 className="font-semibold mb-2">Contact Info</h5>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> 19 rue d’arsonval chassieu 69680 Lyon
          </p>
          <a
            href="tel:+33612345678"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <LuPhone /> ‪+33762562158‬
          </a>
          <a
            href="mailto:H.jtaxi69@gmail.com
"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <MdAttachEmail /> H.jtaxi69@gmail.com
          </a>
          <a
            href="https://wa.me/33762562158‬"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <LuMessageCircle /> WhatsApp
          </a>
        </div>

        {/* Timetable */}
        <div>
          <h5 className="font-semibold mb-2">Timetable</h5>
          <p>Disponible 24h/24 – 7j/7</p>
          <p>Service assuré y compris week-ends et jours fériés.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-2">
        <p>© 2025 HopeBridge. All Rights Reserved.</p>
        <p className="text-center">
          Mentions légales | Politique de confidentialité | Politique relative
          aux cookies
        </p>
      </div>
    </footer>
  );
};

export default Footer;
