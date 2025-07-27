import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 404) {
        setCartItems([]);
        return;
      }

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to load cart");

      setCartItems(data.items || []);
    } catch (error) {
      console.error(error);
      alert("Error loading cart");
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (productId) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/cart/remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to delete item");

      setCartItems(prev => prev.filter(item => item._id !== productId));
    } catch (error) {
      console.error(error);
      alert("Error deleting item from cart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <p className="text-center pt-24">Loading cart...</p>;
  if (!cartItems.length) return <p className="text-center pt-24">Your cart is empty.</p>;

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      <div className="grid gap-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-500">{item.category}</p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
