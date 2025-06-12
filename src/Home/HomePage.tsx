import React from 'react'

import ServiceSection from './ServiceSection'

import Banner from '../Shared/Banner'
import CPAM_Transport from './CPAM_Transport'
import Header from './Header'
import Footer from '@/Shared/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ServiceSection/>
      <CPAM_Transport/>
      <Footer/>
    </div>
  )
}

export default HomePage
