import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { LuMessageCircle, LuPhone } from 'react-icons/lu'
import { MdAttachEmail } from 'react-icons/md'

const Footer = () => {
  return (
      <footer className="bg-black text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-bold text-yellow-400">HJ taxi</h4>
            <p className="mt-2 text-sm">HJ Taxi, votre partenaire santé pour tous vos trajets médicaux 24h/24 – 7j/7</p>
          </div>
          <div className='space-y-3'>
            <h5 className="font-semibold mb-2">Contact Info</h5>
            <p className='flex items-center gap-2'><FaMapMarkerAlt/> 12 Rue des Lilas, 33000 Bordeaux, France</p>
            <p className='flex items-center gap-2'><LuPhone />+33 6 12 34 56 78</p>
            <p className='flex items-center gap-2'><MdAttachEmail/>contact@hj-taxi.fr</p>
            <p className='flex items-center gap-2'><LuMessageCircle/>https://wa.me/33612345678</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Timetable</h5>
            <p>Disponible 24h/24 – 7j/7</p>
            <p>Service assuré y compris week-ends et jours fériés.</p>
          </div>
        </div>
        <div className="mt-12 flex justify-between text-xs text-gray-400">
          <p>© 2025 HopeBridge. All Rights Reserved.</p>
          <p>Mentions légales | Politique de confidentialité | Politique relative aux cookies</p>
          
        </div>
      </footer>
  
  )
}

export default Footer
