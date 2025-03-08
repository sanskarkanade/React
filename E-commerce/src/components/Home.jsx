import React from 'react'
import { useState,useEffect } from 'react';
import Products from "./Products"



import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

const Home = () => {

  const images = [img1, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(0);

  // State for Phones
  const [products, setProducts] = useState([]);
  const [loadingPhones, setLoadingPhones] = useState(true);
  const [errorPhones, setErrorPhones] = useState(null);

  // State for Shoes
  const [shoes, setShoes] = useState([]);
  const [loadingShoes, setLoadingShoes] = useState(true);
  const [errorShoes, setErrorShoes] = useState(null);

  // State for laptop
  const [laptop, setlaptop] = useState([]);
  const [loadinglaptop, setLoadinglaptop] = useState(true);
  const [errorlaptop, setErrorlaptop] = useState(null);

  // Pagination
  const [currentIndexPhones, setCurrentIndexPhones] = useState(0);
  const [currentIndexShoes, setCurrentIndexShoes] = useState(0);
  const [currentIndexlaptop, setCurrentIndexlaptop] = useState(0);
  const productsPerPage = 4;

  // ✅ Fetch phones data
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/search?q=phone");
        if (!response.ok) throw new Error("Failed to fetch phones");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setErrorPhones(err.message);
      } finally {
        setLoadingPhones(false);
      }
    };
    fetchPhones();
  }, []);

  // ✅ Fetch shoes data
  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/search?q=shoes");
        if (!response.ok) throw new Error("Failed to fetch shoes");
        const data = await response.json();
        setShoes(data.products);
      } catch (err) {
        setErrorShoes(err.message);
      } finally {
        setLoadingShoes(false);
      }
    };
    fetchShoes();
  }, []);

  useEffect(() => {
    const fetchlaptop = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/search?q=laptop");
        if (!response.ok) throw new Error("Failed to fetch shoes");
        const data = await response.json();
        setlaptop(data.products);
      } catch (err) {
        setErrorlaptop(err.message);
      } finally {
        setLoadinglaptop(false);
      }
    };
    fetchlaptop();
  }, []);

  // ✅ Auto image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Get current products (Phones)
  const currentProducts = products.slice(
    currentIndexPhones,
    currentIndexPhones + productsPerPage
  );

  // ✅ Get current products (Shoes)
  const currentShoes = shoes.slice(
    currentIndexShoes,
    currentIndexShoes + productsPerPage
  );

  // ✅ Get current products (Shoes)
  const currentlaptop = laptop.slice(
    currentIndexlaptop,
    currentIndexlaptop + productsPerPage
  );

  // ✅ Next phones
  const nextPhones = () => {
    setCurrentIndexPhones((prevIndex) =>
      prevIndex + productsPerPage >= products.length ? 0 : prevIndex + productsPerPage
    );
  };

  // ✅ Next shoes
  const nextShoes = () => {
    setCurrentIndexShoes((prevIndex) =>
      prevIndex + productsPerPage >= shoes.length ? 0 : prevIndex + productsPerPage
    );
  };

  // ✅ Next shoes
  const nextlaptop = () => {
    setCurrentIndexlaptop((prevIndex) =>
      prevIndex + productsPerPage >= laptop.length ? 0 : prevIndex + productsPerPage
    );
  };


  return (
    <div className='bg-white'>
      <main>
        {/* Image Slider */}
        <div className="image-container pt-16">
          <img
            src={images[currentImage]}
            className="w-full h-250 object-cover transition-all duration-500"
          />
        </div>

        {/* Phones Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Mobile Phones</h2>

          {loadingPhones && <p>Loading phones...</p>}
          {errorPhones && <p className="text-red-500">Error: {errorPhones}</p>}

          
          {!loadingPhones && !errorPhones && products.length > 0 && (
            <>
              <div className="grid grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                  <Products key={product.id} product={product} />
                ))}
              </div>

              <button
                onClick={nextPhones}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Products ➡️
              </button>
            </>
          )}
          

          {!loadingPhones && !errorPhones && products.length === 0 && (
            <p>No products found.</p>
          )}
        </div>

        {/* Shoes Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Men's Wear - Shoes</h2>

          {loadingShoes && <p>Loading shoes...</p>}
          {errorShoes && <p className="text-red-500">Error: {errorShoes}</p>}

          
          {!loadingShoes && !errorShoes && shoes.length > 0 && (
            <>
              <div className="grid grid-cols-4 gap-4">
                {currentShoes.map((product) => (
                  <Products key={product.id} product={product} />
                ))}
              </div>

              <button
                onClick={nextShoes}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Products ➡️
              </button>
            </>
          )}
         

          {!loadingShoes && !errorShoes && shoes.length === 0 && (
            <p>No products found.</p>
          )}
        </div>

        {/* Shoes Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Laptops</h2>

          {loadinglaptop && <p>Loading shoes...</p>}
          {errorlaptop && <p className="text-red-500">Error: {errorlaptop}</p>}

          
          {!loadinglaptop && !errorlaptop && laptop.length > 0 && (
            <>
              <div className="grid grid-cols-4 gap-4">
                {currentlaptop.map((product) => (
                  <Products key={product.id} product={product} />
                ))}
              </div>

              <button
                onClick={nextlaptop}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next Products ➡️
              </button>
            </>
          )}
          

          {!loadinglaptop && !errorlaptop && laptop.length === 0 && (
            <p>No products found.</p>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
