import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartslice.js";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/result/${product.id}`, { state: { product } });
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-3 text-gray-900 truncate">
        {product.title}
      </h2>
      <p className="text-gray-700 font-medium text-lg mt-1">${product.price}</p>

      {/* <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering the navigate click
          dispatch(addToCart(product));
        }}
        className="mt-3 w-full bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition hover:bg-blue-700"
      >
        Add to Cart 🛒
      </button> */}
    </div>
  );
};

export default Products;
