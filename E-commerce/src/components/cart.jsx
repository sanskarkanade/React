import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../cart/cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="mt-10 pt-16 p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg min-h-96">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">🛒 Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3 gap-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md shadow-sm"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-800">{item.title}</p>
                <p className="text-gray-700">
                  ${item.price} x {item.quantity} ={" "}
                  <span className="font-semibold text-gray-900">${item.price * item.quantity}</span>
                </p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700 transition"
              >
                ❌ Remove
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="mt-6 text-xl font-semibold text-gray-900 flex justify-between">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/* Clear Cart Button */}
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg w-full text-lg font-medium hover:bg-red-600 transition"
          >
            🗑️ Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
