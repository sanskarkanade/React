import React, { useState, useEffect } from 'react';
import Products from './Products';

const Search = ({ searchQuery }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
                if (!res.ok) throw new Error("Error in fetching corresponding data");
                
                const data = await res.json();
                setItems(data.products);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSearch();
    }, [searchQuery]);

    return (
        <div className="sm:pt-16 max-w-6xl mx-auto pt-28">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                🔎 Search Results for: <span className="text-blue-600">{searchQuery}</span>
            </h2>

            {loading && <p className="text-gray-600 text-lg">Loading results...</p>}
            {error && <p className="text-red-500 text-lg">{error}</p>}

            {items.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
                    {items.map((product) => (
                        <Products key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                !loading && <p className="text-gray-700 text-lg">No products found.</p>
            )}
        </div>
    );
};

export default Search;
