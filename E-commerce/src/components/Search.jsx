import React from 'react'
import { useState, useEffect } from 'react';
import Products from './Products';

const Search = ({ searchQuery }) => {
    const [items, setitems] = useState([]);


    useEffect(() => {
        const fetchsearch = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
                if (!res.ok) {
                    throw new Error("Error in fetching Corresponding data");
                }
                else {
                    const data = await res.json();
                    console.log(data)
                    setitems(data.products)
                }
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchsearch();
    }, [searchQuery])


    return (
        <div className='pt-18'>
            
            { items.length > 0 && (
            <>
              <div className="grid grid-cols-4 gap-4">
                {items.map((product) => (
                  <Products key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
          
        </div>
    )
}

export default Search
