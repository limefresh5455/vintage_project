import './App.css';
import Home from './Component/home';
import About from './Component/about';
import Lease from './Component/forLease';
import Sale from './Component/forSale';
import Managment from './Component/managment';
import Recents from './Component/recents';
import OurTeam from './Component/ourTeam';
import Contact from './Component/contact';
import Footer from "./Component/footer";
import Header from "./Component/header"
import { BrowserRouter , Routes , Route ,useParams } from 'react-router-dom'
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
