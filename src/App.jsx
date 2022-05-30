import { Route, Routes } from "react-router-dom"
import Navbar from "./componets/Navbar"
import Home from "./componets/Home"
import More from "./componets/More"
import Sidebar from "./componets/Sidebar"
import Footer from "./componets/Footer"
import Bg from "./componets/Bg"


function App() {


  return (
    <div className="App h-screen max-h-screen bg-pattern bg-center bg-cover overflow-hidden bg-primary relative">

      <Bg/>
      
      <Sidebar/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/More" element={<More/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
