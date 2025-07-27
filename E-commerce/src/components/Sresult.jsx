import React from 'react';
import { useLocation } from 'react-router-dom';

const Sresult = () => {
  const location = useLocation();
  const product = location.state?.product;

  const handleCart = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: product._id }), 
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to add product to cart");

      alert("Product added to cart!");
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  };

  if (!product) return <h2>No product data</h2>;

  return (
    <div className="pt-24 sm:pt-20 max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 h-screen">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-64 object-contain rounded-lg shadow-md"
      />
      <h1 className="text-2xl font-bold text-gray-800 mt-4">{product.title}</h1>
      <p className="text-lg text-green-600 font-semibold mt-2">💰 Price: ${product.price}</p>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="mt-2 text-gray-700">
        <span className="font-semibold">🏭 Brand:</span> {product.category}
      </p>
      <button
        onClick={handleCart}
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Sresult;
