import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, CreditCard, Heart } from 'lucide-react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Shop n Smile</h1>
        <p className="text-xl mb-8">Discover amazing products that bring joy to your life</p>
        <Link
          to="/products"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <ShoppingBag className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-gray-600">Carefully curated selection of premium items</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <Truck className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">Quick and reliable shipping worldwide</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <CreditCard className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">Multiple safe payment options</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
          <Heart className="w-12 h-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customer Love</h3>
          <p className="text-gray-600">Dedicated support and satisfaction guarantee</p>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
};

export default Home;