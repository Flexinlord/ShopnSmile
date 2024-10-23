import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, PaypalIcon } from 'lucide-react';

const stripePromise = loadStripe('your_publishable_key');

const Cart: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  const handleCheckout = async () => {
    if (paymentMethod === 'card') {
      const stripe = await stripePromise;
      // Handle Stripe checkout
    } else {
      // Handle PayPal checkout
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {/* Sample cart item */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
              alt="Product"
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">Cozy Sweater</h3>
              <p className="text-gray-600">$49.99</p>
              <div className="flex items-center space-x-2 mt-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 border rounded">+</button>
              </div>
            </div>
            <button className="text-red-600 hover:text-red-800">Remove</button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$49.99</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>$54.99</span>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <CreditCard className="w-5 h-5" />
                <span>Credit Card</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                />
                <span>PayPal</span>
              </label>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;