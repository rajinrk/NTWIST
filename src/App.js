import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './components/Home';
<<<<<<< HEAD
import NavBar from './components/NavBar';
import Sustainability from './components/pages/sustainability';
import MineToMill from './components/pages/mine-to-mill';
import Mining from './components/pages/mining';
import OilAndGas from './components/pages/oilAndGas';
import AiSoftware from './components/pages/AiSoftware';
import Blog from './components/pages/blog';
import ContactUs from './components/pages/contactUs';
=======
>>>>>>> 157359be1b0688eb3e83b75ed7362a4a12137f89




function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sustainability' element={<Sustainability />} />
          <Route path='/mine-to-mill' element={<MineToMill/>} />
          <Route path='/mining' element={<Mining/>} />
          <Route path='/oilGas' element={<OilAndGas/>} />
          <Route path='/AIsoftware' element={<AiSoftware/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contactUs' element={<ContactUs/>} />
=======
        
        <Routes>
          <Route path='/' element={<Home />} />
>>>>>>> 157359be1b0688eb3e83b75ed7362a4a12137f89
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
