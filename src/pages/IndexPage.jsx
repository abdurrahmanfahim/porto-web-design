import React from 'react'
import Header from '../components/layouts/Header'
import Navbar from '../components/layouts/Navbar'
import Banner from '../components/layouts/Banner'
import Service from '../components/Service'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Testimonial from '../components/Testimonial'
import Post from '../components/Post'
import Footer from '../components/layouts/Footer'

const IndexPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Service />
      <About />
      <Achievements />
      <Testimonial />
      <Post />
      <Footer />
    </>
  )
}

export default IndexPage    
