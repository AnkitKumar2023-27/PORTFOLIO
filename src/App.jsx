import React from 'react';
import './App.css'; 
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';  
import Services from './Components/Services';  
import Qualification from "./Components/Qualification"
import PortFolio from './Components/PortFolio/PortFolio';
import Testimonial from './Components/Testomonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/footer/footer';
import { themeContext } from './Context';
import { useContext } from 'react';
function App() {
  const theme =useContext(themeContext)
  const darkMode=theme.state.darkMode;

  return (
          <div className="App"
          style={{
          background: darkMode ? 'black' : '',
          color: darkMode ? 'white' : ''
        }}
>
      <Navbar></Navbar>
      <Intro></Intro>
      <Services></Services>
      <Qualification></Qualification>
      
      <PortFolio></PortFolio>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
      

    </div>
  );
}

export default App;