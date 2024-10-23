import React from 'react';
import { CreditCard, Wallet, Gift } from 'lucide-react';

interface PaymentMethodProps {
  onSelect: (method: string) => void;
  selectedMethod: string;
}

const PaymentMethods: React.FC<PaymentMethodProps> = ({ onSelect, selectedMethod }) => {
  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Credit Card',
      icon: <CreditCard className="w-6 h-6" />,
      description: 'Pay securely with your credit card',
      brands: ['Visa', 'Mastercard', 'American Express']
    },
    {
      id: 'digital-wallet',
      name: 'Digital Wallet',
      icon: <Wallet className="w-6 h-6" />,
      description: 'Pay with your preferred digital wallet',
      brands: ['PayPal', 'Apple Pay', 'Google Pay']
    },
    {
      id: 'gift-card',
      name: 'Gift Card',
      icon: <Gift className="w-6 h-6" />,
      description: 'Redeem your gift card',
      brands: ['Shop n Smile Gift Card']
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`relative flex flex-col p-4 cursor-pointer border rounded-lg transition-all ${
              selectedMethod === method.id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
          >
            <div className="flex items-start">
              <input
                type="radio"
                name="payment-method"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => onSelect(method.id)}
                className="sr-only"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div className="text-indigo-600">{method.icon}</div>
                  <div className="font-medium">{method.name}</div>
                </div>
                <p className="mt-1 text-sm text-gray-500">{method.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {method.brands.map((brand) => (
                    <span
                      key={brand}
                      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`absolute right-4 top-4 w-4 h-4 rounded-full border ${
                  selectedMethod === method.id
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300'
                }`}
              >
                <div
                  className={`absolute inset-0 m-1 rounded-full transition-opacity ${
                    selectedMethod === method.id ? 'bg-white opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;