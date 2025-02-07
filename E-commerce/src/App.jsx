import { useState, useEffect } from "react";
import "./App.css";
import Navber from "./components/Navber";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";

function App() {
  const images = [img1, img2, img3, img4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  },[]);

  return (
    <>
      <Navber/>
      <main>
      <div className="image-container pt-16">
        <img src={images[currentImage]}  className="w-full h-auto  object-cover transition-all duration-500" />
      </div>
      </main>
    </>
  );
}

export default App;
