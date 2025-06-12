import Image from 'next/image'
import React from 'react'
import nurse from '@/assets/nurse.png'

const CPAM_Transport = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <Image src={nurse} alt="Nurse" width={500} height={400} className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Pourquoi choisir un transport conventionné CPAM ?</h3>
            <p className="text-gray-500 mb-4">Notre service est agréé par la CPAM, vous permettant de voyager sans avance de frais...</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>CPAM-approved</li>
              <li>Prescription required</li>
              <li>No upfront cost</li>
              <li>Admin handled for you</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CPAM_Transport
