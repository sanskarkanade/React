import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Products = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/result/${product.id}`, { state: { product } });
    };
    return (
        <div onClick={handleClick} className="border p-4 rounded shadow-lg ">
            {/* <Link to="/result"> */}
            <img 
                src={product.thumbnail} 
                alt={product.title} 
                className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            {/* </Link> */}
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    );
}

export default Products;
