import Image from "next/image";
import React from "react";
import nurse from "@/assets/nurse.png";
import frame from "@/assets/Frame (1).png";

const CPAM_Transport = () => {
  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src={nurse}
            alt="Nurse"
            width={500}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir un transport conventionné CPAM ?
          </h3>
          <p className="text-gray-500 mb-6">
            Notre service est agréé par la CPAM, vous permettant de voyager
            sans avance de frais...
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            {[
              "CPAM-approved",
              "Prescription required",
              "No upfront cost",
              "Admin handled for you",
            ].map((item, idx) => (
              <p key={idx} className="flex items-start gap-3 text-gray-700">
                <Image src={frame} alt="" width={20} height={20} />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPAM_Transport;
