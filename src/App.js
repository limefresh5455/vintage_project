import Home from './Component/Home';
import About from './Component/About';
import Lease from './Component/ForLease';
import Sale from './Component/ForSale';
import Managment from './Component/Managment';
import Recents from './Component/Recents';
import OurTeam from './Component/OurTeam';
import Contact from './Component/Contact';
import Footer from "./Component/Footer";
import Header from "./Component/Header"
import { Auth } from "aws-amplify";
import React from 'react';
import { Amplify } from 'aws-amplify'
import config from './aws-exports';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
Amplify.configure(config)
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes forceRefresh={true}>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/lease' element={<Lease />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/managment' element={<Managment />} />
        <Route path='/recents' element={<Recents />} />
        <Route path='/ourTeam' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <button onClick={() => Auth.signOut()}>Sign out </button>
    </BrowserRouter>
  );
}

export default App;
