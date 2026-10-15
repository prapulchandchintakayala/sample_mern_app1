import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from "./pages/contact.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminHome from './pages/AdminHome'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/adminlogin" element={<AdminLogin></AdminLogin>}></Route>
        <Route path="/adminhome" element={<AdminHome></AdminHome>}></Route>
      </Routes>  
      <Footer />
   </div>
  )
}

export default App