import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer "
import Bodymain from '../Components/Bodymain'


function Home() {
  return (
    <section class="ant-layout" id="page">
      <Navbar/>
      <Bodymain/>
      <Footer/>
    </section>
  )
}

export default Home
