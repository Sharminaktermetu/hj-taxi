import React from 'react'
import icon1 from '@/assets/1.png'  
import icon2 from '@/assets/2.png'  
import icon3 from '@/assets/3.png'  
import icon4 from '@/assets/4.png'  
import icon5 from '@/assets/5.png'  
import Image from 'next/image'

const ServiceSection = () => {
  const services = [
    { title: 'Médical conventionné CPAM', desc: "Pris en charge par l'assurance Maladie", icon: icon1 },
    { title: 'Transfert aéroport', desc: 'Liaison rapide vers tous les aéroports', icon: icon2 },
    { title: 'Transfert gare', desc: 'Service fiable pour toutes les gares', icon: icon3 },
    { title: 'Transport vers stations de ski', desc: 'Accès sécurisé aux stations alpines', icon: icon4 },
    { title: 'Trajets longue distance', desc: 'Déplacements sur mesure en France', icon: icon5 },
  ]

  return (
    <section className="py-20 bg-pink-50 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">Nos prestations de transport</h2>
      <p className="mt-2 text-gray-500">
        Des solutions adaptées à tous vos trajets : médicaux, privés et longue distance.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.slice(0,3).map((service, i) => (
         
            <div key={i} className="bg-white shadow rounded-lg p-6 text-left ">
            <div className="flex">
             <div className='w-9 h-9 mr-4 flex-shrink-0'>
               <Image 
              src={service.icon} 
              alt={service.title} 
            
             
            />
             </div>
            <div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.desc}</p>
            </div>
            
            </div>
          </div>

           
         
          
        ))}
      </div>
      <div className="mt-10 flex justify-center flex-wrap gap-6 max-w-5xl mx-auto">
  {services.slice(3, 5).map((service, i) => (
    <div key={i} className="bg-white shadow rounded-lg p-6 text-left w-full sm:w-[300px]">
      <div className="flex">
        <div className="w-9 h-9 mr-4 flex-shrink-0">
          <Image 
            src={service.icon} 
            alt={service.title} 
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className="text-gray-500 text-sm">{service.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default ServiceSection
