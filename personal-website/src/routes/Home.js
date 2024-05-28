import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import About from './About'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroImg></HeroImg>
            <About />
            <Footer></Footer>
        </div>
    )
}

export default Home
