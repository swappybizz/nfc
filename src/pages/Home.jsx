import React from 'react'
import Header from "../components/Header"
import HeroHome from '../components/HeroHome'
import Footer from "../components/Footer"
import ProdCom from "../components/ProductComponent"
import ProdCom2 from "../components/ProductComponent2"
import ProdCom3 from "../components/ProductComponent1"


const Home = () => {
  return (
      <div className='bg-main'>
    <Header loading="lazy" />
    <HeroHome/>
    
    <ProdCom/>
    <ProdCom2/>
    <ProdCom3/>
    

    <Footer/>
      </div>
  )
}

export default Home