import React, { useState, useEffect } from 'react';
import Products from './Products';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';

const Home = () => {
  const images = [img1, img2, img3, img4];
  const [currentImage, setCurrentImage] = useState(0);

  const productsPerPage = 4;

  // Phone State
  const [phones, setPhones] = useState([]);
  const [loadingPhones, setLoadingPhones] = useState(true);
  const [errorPhones, setErrorPhones] = useState(null);
  const [currentIndexPhones, setCurrentIndexPhones] = useState(0);

  // Shoes State
  const [shoes, setShoes] = useState([]);
  const [loadingShoes, setLoadingShoes] = useState(true);
  const [errorShoes, setErrorShoes] = useState(null);
  const [currentIndexShoes, setCurrentIndexShoes] = useState(0);

  // Laptop State
  const [laptops, setLaptops] = useState([]);
  const [loadingLaptops, setLoadingLaptops] = useState(true);
  const [errorLaptops, setErrorLaptops] = useState(null);
  const [currentIndexLaptops, setCurrentIndexLaptops] = useState(0);

  // 🔁 Auto Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🔁 Fetch Products
  useEffect(() => {
    const fetchData = async (searchTerm, setData, setLoading, setError) => {
      try {
        const res = await fetch(`http://localhost:5000/api/product?search=${searchTerm}`);
        if (!res.ok) throw new Error(`Failed to fetch ${searchTerm}`);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData('phone', setPhones, setLoadingPhones, setErrorPhones);
    fetchData('shoes', setShoes, setLoadingShoes, setErrorShoes);
    fetchData('laptop', setLaptops, setLoadingLaptops, setErrorLaptops);
  }, []);

  // 🔁 Pagination Helpers
  const getPaginated = (items, index) => items.slice(index, index + productsPerPage);

  const handleNext = (type) => {
    switch (type) {
      case 'phones':
        setCurrentIndexPhones((prev) => (prev + productsPerPage >= phones.length ? 0 : prev + productsPerPage));
        break;
      case 'shoes':
        setCurrentIndexShoes((prev) => (prev + productsPerPage >= shoes.length ? 0 : prev + productsPerPage));
        break;
      case 'laptops':
        setCurrentIndexLaptops((prev) => (prev + productsPerPage >= laptops.length ? 0 : prev + productsPerPage));
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-white">
      <main>
        {/* Image Slider */}
        <div className="image-container pt-24 sm:pt-16">
          <img
            src={images[currentImage]}
            alt="banner"
            className="w-full sm:h-250 object-cover transition-all duration-500"
          />
        </div>

        {/* 📱 Phones */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Mobile Phones</h2>
          {loadingPhones && <p>Loading phones...</p>}
          {errorPhones && <p className="text-red-500">Error: {errorPhones}</p>}
          {!loadingPhones && !errorPhones && phones.length > 0 && (
            <>
              <div className="grid sm:grid-cols-4 gap-4">
                {getPaginated(phones, currentIndexPhones).map((product) => (
                  <Products key={product._id} product={product} />
                ))}
              </div>
              <button
                onClick={() => handleNext('phones')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hidden sm:block"
              >
                Next Products ➡️
              </button>
            </>
          )}
        </div>

        {/* 👟 Shoes */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Men's Wear - Shoes</h2>
          {loadingShoes && <p>Loading shoes...</p>}
          {errorShoes && <p className="text-red-500">Error: {errorShoes}</p>}
          {!loadingShoes && !errorShoes && shoes.length > 0 && (
            <>
              <div className="grid sm:grid-cols-4 gap-4">
                {getPaginated(shoes, currentIndexShoes).map((product) => (
                  <Products key={product._id} product={product} />
                ))}
              </div>
              <button
                onClick={() => handleNext('shoes')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hidden sm:block"
              >
                Next Products ➡️
              </button>
            </>
          )}
        </div>

        {/* 💻 Laptops */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Laptops</h2>
          {loadingLaptops && <p>Loading laptops...</p>}
          {errorLaptops && <p className="text-red-500">Error: {errorLaptops}</p>}
          {!loadingLaptops && !errorLaptops && laptops.length > 0 && (
            <>
              <div className="grid sm:grid-cols-4 gap-4">
                {getPaginated(laptops, currentIndexLaptops).map((product) => (
                  <Products key={product._id} product={product} />
                ))}
              </div>
              <button
                onClick={() => handleNext('laptops')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hidden sm:block"
              >
                Next Products ➡️
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
