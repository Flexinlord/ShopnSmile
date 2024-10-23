import React from 'react';
import { Users, Heart, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">About Shop n Smile</h1>
      
      <div className="prose lg:prose-xl mb-12">
        <p className="text-lg text-gray-700 mb-8">
          Founded in 2024, Shop n Smile has been dedicated to bringing joy and quality products to our customers worldwide. Our mission is to create an exceptional shopping experience that makes you smile with every purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Team</h3>
          <p className="text-gray-600">Passionate professionals committed to your satisfaction</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Heart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">Quality, integrity, and customer happiness at our core</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <Globe className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
          <p className="text-gray-600">Serving customers across the globe with care</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          What started as a small online boutique has grown into a trusted destination for quality products. We've built our reputation on carefully selecting each item in our inventory, ensuring it meets our high standards for quality and value.
        </p>
        <p className="text-gray-700">
          Today, we continue to grow and evolve, always keeping our customers' needs at the forefront of everything we do. Our commitment to excellence and customer satisfaction remains unwavering, as we strive to bring smiles to faces around the world.
        </p>
      </div>

      <div className="bg-indigo-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
        <p className="mb-6">
          Be part of our growing community and experience shopping that brings joy to your life.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
          Sign Up for Updates
        </button>
      </div>
    </div>
  );
};

export default About;