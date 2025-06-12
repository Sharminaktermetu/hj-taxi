import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-black text-white py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-xl font-bold text-yellow-400">HJ taxi</h4>
            <p className="mt-2 text-sm">HJ Taxi, votre partenaire santé pour tous vos trajets médicaux 24h/24 – 7j/7</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact Info</h5>
            <p>12 Rue des Lilas, 33000 Bordeaux, France</p>
            <p>+33 6 12 34 56 78</p>
            <p>contact@hj-taxi.fr</p>
            <p>https://wa.me/33612345678</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Timetable</h5>
            <p>Disponible 24h/24 – 7j/7</p>
            <p>Service assuré y compris week-ends et jours fériés.</p>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>Mentions légales | Politique de confidentialité | Politique relative aux cookies</p>
          <p>© 2025 HopeBridge. All Rights Reserved.</p>
        </div>
      </footer>
  
  )
}

export default Footer
