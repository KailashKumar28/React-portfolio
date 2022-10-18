import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio'
import Servies from './components/servies/Servies'
import Testimonials from './components/testimonials/Testimonials'
import { useRef } from 'react'
import * as ReactDOM from 'react-dom';

const App = () => {
  const HeaderRef = useRef();
  const AboutRef = useRef();
  const ExperienceRef = useRef();
  const ContactRef = useRef();
  const ServiesRef = useRef();
  const navHeader = [
    {
      headerRef: HeaderRef
    },
    {
      headerRef: AboutRef
    },
    {
      headerRef: ExperienceRef
    },
    {
      headerRef: ContactRef
    },
    {
      headerRef: ServiesRef
    },
    ];
  return (
    <div >
      <Header refs = {HeaderRef}></Header>
      <Nav/>
      <About refs = {AboutRef} ></About>
      <Experience refs = {ExperienceRef} ></Experience>
      <Servies refs = {ServiesRef} ></Servies>
      <Portfolio/>
      <Testimonials/>
      <Contact refs = {ContactRef} ></Contact>
      <Footer/>
    </div>
  )
}

export default App