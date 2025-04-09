import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Welcome to <strong>Pricy Store</strong>!
      </p>

      {/* Image and Text Side by Side */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-6 w-full max-w-5xl">
        {/* Image Container */}
        <div className="w-full max-w-sm px-4">
          <img src={assets.about_img} alt="About Image" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text Container */}
        <div className="w-full max-w-sm px-4">
          <div className="p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-white">
            <p className="text-lg text-gray-700 text-center">
              At <strong>Pricy Store</strong>, we believe in providing our customers with the best online shopping experience. Founded in <strong>2024</strong> by <strong>Leon Adrian</strong>, we started this journey with a simple mission: to offer high-quality products at affordable prices while delivering exceptional customer service.
            </p>
          </div>
        </div>
      </div>

      {/* Other sections in square containers */}
      <div className="w-full max-w-sm px-4 mb-6">
        <div className="p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Vision</h2>
          <p className="text-lg text-gray-700 text-center">
            Our vision is to create a shopping platform that empowers individuals to express their unique style and meet their everyday needs. We aim to become a trusted destination for <strong>Designer Brands</strong>, curating a diverse selection that caters to every taste and preference.
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm px-4 mb-6">
        <div className="p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">What We Offer</h2>
          <p className="text-lg text-gray-700 text-center">
            We pride ourselves on sourcing only the finest products, ranging from <strong>Shirts, Shorts, Hoodies, Dresses and many more.</strong> Our commitment to quality ensures that each item is carefully selected to meet our high standards.
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm px-4 mb-6">
        <div className="p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Commitment to You</h2>
          <p className="text-lg text-gray-700 text-center">
            At <strong>Pricy Store</strong>, customer satisfaction is our top priority. We understand that shopping online can be daunting, which is why we offer a user-friendly website, easy navigation, and secure payment options.
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm px-4 mb-6">
        <div className="p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-white">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Join Our Community</h2>
          <p className="text-lg text-gray-700 text-center">
            We invite you to become a part of our community! Follow us on social media for the latest updates, promotions, and inspiration.
          </p>
        </div>
      </div>

      <div className="w-full max-w-sm px-4 mb-6">
        <div className="p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-white">
          <p className="text-lg text-gray-700 text-center">
            Thank you for choosing <strong>Pricy Store</strong>. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
