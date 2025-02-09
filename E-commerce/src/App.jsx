import "./App.css";
import Navber from "./components/Navber";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import Mobile from "./components/Mobile";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/mobile" element={<Mobile/>}/>
          <Route path="/help" element={<Help/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
