
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './navPages/Home';
import About from './navPages/About';
//import DetailProject from './components/DetailProject';
import Contact from './navPages/Contact';
import Footer from './components/Footer';
// For Open Top op the Page In the time of rendering //
import ScrollToTop from './components/Scroll';
import Privacy from './components/Privacy';
import Term from './components/Term';
import Research from './navPages/Research';
import Reflection from './navPages/Reflection';
{/*import Testimonial from './navPages/Testimonial';*/}



function App() {


  return (

    <BrowserRouter >
    <ScrollToTop/>
      <NavBar/>
      <Routes >
          <Route path="/about" element={<About/>}></Route>
          <Route path="/research" element={<Research/>}></Route>
          <Route path="/reflection" element={<Reflection/>}></Route>
          {/*<Route path="/testimonial" element={<Testimonial/>}></Route>*/}
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/privacy" element={<Privacy/>}></Route>
          <Route path="/terms" element={<Term/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>

   
   
  );
}

export default App;
