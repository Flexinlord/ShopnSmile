import React, { useState } from 'react';
import PaymentMethods from './PaymentMethods';
import CreditCardForm from './CreditCardForm';

interface CheckoutProps {
  total: number;
}

const Checkout: React.FC<CheckoutProps> = ({ total }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentMethodSelect = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handlePayment = async (paymentData: any) => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Processing payment:', { method: selectedPaymentMethod, data: paymentData });
    setIsProcessing(false);
    // Handle success/error states here
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-center py-4 border-b">
            <span className="text-lg font-medium">Total Amount</span>
            <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
          </div>
        </div>

        <PaymentMethods
          onSelect={handlePaymentMethodSelect}
          selectedMethod={selectedPaymentMethod}
        />
      </div>

      {selectedPaymentMethod === 'credit-card' && (
        <div className="mt-6">
          <CreditCardForm onSubmit={handlePayment} />
        </div>
      )}

      {selectedPaymentMethod === 'digital-wallet' && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-4">Digital Wallet Payment</h3>
          <div className="space-y-4">
            <button
              onClick={() => handlePayment({ type: 'paypal' })}
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300"
              disabled={isProcessing}
            >
              Pay with PayPal
            </button>
            <button
              onClick={() => handlePayment({ type: 'apple-pay' })}
              className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300"
              disabled={isProcessing}
            >
              Pay with Apple Pay
            </button>
            <button
              onClick={() => handlePayment({ type: 'google-pay' })}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-md hover:bg-gray-50 transition duration-300"
              disabled={isProcessing}
            >
              Pay with Google Pay
            </button>
          </div>
        </div>
      )}

      {selectedPaymentMethod === 'gift-card' && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-lg font-semibold mb-4">Gift Card Payment</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Gift Card Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={() => handlePayment({ type: 'gift-card' })}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
              disabled={isProcessing}
            >
              Redeem Gift Card
            </button>
          </div>
        </div>
      )}

      {isProcessing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent mx-auto"></div>
            <p className="text-center mt-4">Processing your payment...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;