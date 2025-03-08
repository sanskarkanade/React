import React from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartslice.js";

const Sresult = () => {
  const location = useLocation();
  const product = location.state?.product;
  const dispatch = useDispatch();

  if (!product) return <h2>No product data</h2>;

  return (
    <div className="pt-20 max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
    {/* Product Image */}
    <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-contain rounded-lg shadow-md" />
  
    {/* Product Title */}
    <h1 className="text-2xl font-bold text-gray-800 mt-4">{product.title}</h1>
  
    {/* Price */}
    <p className="text-lg text-green-600 font-semibold mt-2">💰 Price: ${product.price}</p>
  
    {/* Description */}
    <p className="text-gray-600 mt-2">{product.description}</p>

    <button onClick={() => dispatch(addToCart(product)) } 
                 className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                    Add to Cart
                </button>
  
    {/* Availability Status */}
    <p className="mt-2">
      <span className="font-semibold">Availability Status:</span> 
      <span className={`ml-2 px-2 py-1 text-sm font-medium rounded-full 
        ${product.availabilityStatus === 'In Stock' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
        {product.availabilityStatus}
      </span>
    </p>
  
    {/* Brand */}
    <p className="mt-2 text-gray-700"><span className="font-semibold">🏭 Brand:</span> {product.brand}</p>
  
    {/* Rating */}
    <p className="mt-2 text-yellow-500 flex items-center">
      <span className="font-semibold text-gray-700">⭐ Rating:</span> {product.rating}
    </p>
  </div>
  
  );
}

export default Sresult
