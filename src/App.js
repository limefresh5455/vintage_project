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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes  forceRefresh={true}>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/lease' element={<Lease/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/managment' element={<Managment/>}/>
        <Route path='/recents' element={<Recents/>}/>
        <Route path='/ourTeam' element={<OurTeam/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
