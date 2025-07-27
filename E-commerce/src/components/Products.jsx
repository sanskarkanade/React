import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Products = ({ product }) => {
  const navigate = useNavigate();
  
  

  const handleClick = () => {
    navigate(`/result/${product._id}`, { state: { product } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-3 text-gray-900 truncate">
        {product.title}
      </h2>
      <p className="text-gray-700 font-medium text-lg mt-1">${product.price}</p>

      
    </div>
  );
};

export default Products;
