import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;

  const calculateSubtotal = () => {
    const total = cartItems.reduce((acc, item) => {
      console.log('Item Price:', item.price); // Log the item's price
      console.log('Item Quantity:', item.quantity); // Log the item's quantity
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="flex flex-col md:flex-row gap-4 bg-gray-200 mt-4 p-4">
        {/* Left Side: Cart Items */}
        <div className="flex-grow p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Cart ({cartItems.length})</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <div className="space-y-4 ">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center border p-4 rounded-lg shadow-sm"
                >
                  {/* Image Section */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col flex-grow ml-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Seller: {item.seller}</p>
                    <p className="text-sm text-red-500 mt-1">
                      {item.stockStatus || 'In Stock'}
                    </p>
                    <p className="text-sm font-bold text-orange-500 mt-2">
                      MYSTORE EXPRESS
                    </p>
                  </div>

                  {/* Pricing & Controls */}
                  <div className="flex flex-col items-end space-y-2">
                    <p className="text-xl font-semibold text-gray-800">
                      KSh {item.price * item.quantity}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity - 1 },
                          })
                        }
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: item.quantity + 1 },
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-sm text-red-500 hover:underline"
                      onClick={() =>
                        dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Cart Summary */}
        <div className="w-full md:w-1/3 bg-gray-100">
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-4">Cart Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-semibold">KSh {calculateSubtotal()}</span>
            </div>
            <p className="text-sm text-green-600 mb-4">Free delivery</p>
            <p className="text-sm text-gray-500 mb-4">
              MYSTORE EXPRESS items are eligible for free delivery
            </p>
            <button
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
              onClick={handleCheckout}
            >
              CHECKOUT (KSh {calculateSubtotal()})
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              Returns are easy
              <br />
              <span className="text-orange-500">Free return within 7 days</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
