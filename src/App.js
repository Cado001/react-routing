import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Signup" element={<Signup />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="*" element={<h2>Wrong Path 404 💩</h2>}/>
    </Routes>
      <Footer />
    
  
    </BrowserRouter>
  );
}

export default App;
