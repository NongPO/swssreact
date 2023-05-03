import React from 'react'
import BodyLogin from '../Components/BodyLogin'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer "
import BodyRegis from '../Components/BodyRegis'


function HomeRegis() {
  return (
    <section class="ant-layout" id="page">
        <Navbar/>
        <BodyRegis/>
        <Footer/>
    </section>
  )
}

export default HomeRegis
