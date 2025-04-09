import  'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import {Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Product from './pages/Product';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default App
