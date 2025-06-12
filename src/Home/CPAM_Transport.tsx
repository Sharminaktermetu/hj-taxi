import Image from "next/image";
import React from "react";
import nurse from "@/assets/nurse.png";
import frame from "@/assets/Frame (1).png";
const CPAM_Transport = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 h-96">
          <div className="md:w-1/2">
            <Image
              src={nurse}
              alt="Nurse"
              width={500}
              
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold mb-4">
              Pourquoi choisir un transport conventionné CPAM ?
            </h3>
            <p className="text-gray-500 mb-4 mt-10">
              Notre service est agréé par la CPAM, vous permettant de voyager
              sans avance de frais...
            </p>
            <div className="space-y-2 mt-10">
              <p className="flex gap-2">
                {" "}
                <Image src={frame} alt="" />
                CPAM-approved
              </p>
              <p className="flex gap-2">
                {" "}
                <Image src={frame} alt="" />
                Prescription required
              </p>
              <p className="flex gap-2">
                {" "}
                <Image src={frame} alt="" />
                No upfront cost
              </p>
              <p className="flex gap-2">
                {" "}
                <Image src={frame} alt="" />
                Admin handled for you
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CPAM_Transport;
