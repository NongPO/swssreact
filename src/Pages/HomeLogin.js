import React from 'react'
import BodyLogin from '.././Components/BodyLogin'
import Navbar from '.././Components/Navbar'
import Footer from "../Components/Footer "


function HomeLogin() {
  return (
    <section class="ant-layout" id="page">
      <Navbar/>
      <BodyLogin/>
      <Footer/>
    </section>
  )
}

export default HomeLogin
