import React from 'react'
import AdditionalInfo from '../components/layout/AdditionalInfo'
import Advertise from '../components/layout/Advertise'
import Banner from '../components/layout/Banner'
import Bestsellers from '../components/layout/Bestsellers'
import MiddelAdvertise from '../components/layout/MiddelAdvertise'
import NewArrival from '../components/layout/NewArrival'
import Offers from '../components/layout/Offers'

const Home = () => {
  return (
    <>
    <Banner/>
    <AdditionalInfo/>
    <Advertise/>
    <NewArrival/>
    <Bestsellers/>
    <MiddelAdvertise/>
    <Offers/>
    </>
  )
}

export default Home