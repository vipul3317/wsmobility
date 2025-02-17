import React from 'react'
import Header from '../../components/navbar'
import Hero from '../../components/hero'
import Hero2 from '../../components/hero/index2'
import Hero3 from '../../components/hero/index3'
import FAQ from '../../components/accordion/FAQ'
import Brand from '../../components/brands'
import Warranty from '../../components/warranty'




export const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Hero2/>
      <Hero3/>
      <Brand/>
      <Warranty/>
      <FAQ/>
    </>
  )
}
