import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
