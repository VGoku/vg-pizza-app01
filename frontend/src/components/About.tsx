import React, { useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone, FaStar, FaHeart, FaLeaf, FaQuoteRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "The best pizza in town! My family has been ordering from Pizza Paradise for years.",
      author: "Maria S.",
      rating: 5
    },
    {
      text: "Their commitment to quality ingredients really shows in every bite.",
      author: "James P.",
      rating: 5
    },
    {
      text: "The authentic taste brings me back to my childhood in Italy.",
      author: "Roberto M.",
      rating: 5
    }
  ];

  const timeline = [
    { year: 1995, event: "First Pizza Paradise opened its doors" },
    { year: 2005, event: "Expanded to three locations" },
    { year: 2015, event: "Introduced our famous artisanal crust" },
    { year: 2023, event: "Launched our sustainable ingredients initiative" },
    { year: 2025, event: "Celebrating 30 years of pizza excellence" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Background */}
      <div className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3)'
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl">Crafting Perfect Pizzas Since 1995</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission and Values in Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <FaHeart className="text-3xl text-red-500 mr-4" />
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              At Pizza Paradise, we believe that great pizza brings people together. 
              Our mission is to create memorable moments through delicious, 
              handcrafted pizzas made with the finest ingredients.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <FaLeaf className="text-3xl text-green-500 mr-4" />
              <h2 className="text-3xl font-bold">Our Values</h2>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span>Quality ingredients from local suppliers</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span>Traditional recipes with a modern twist</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span>Family-friendly atmosphere</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <span>Sustainable business practices</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
                      <span className="text-red-500 font-bold text-xl">{item.year}</span>
                      <p className="mt-2">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Marco Rossi", role: "Master Pizza Chef", image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3" },
              { name: "Sofia Chen", role: "Head of Operations", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3" },
              { name: "David Miller", role: "Customer Experience", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3" },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="relative bg-white rounded-2xl shadow-xl p-8">
            <div className="max-w-3xl mx-auto text-center">
              <FaQuoteRight className="text-4xl text-red-500 mx-auto mb-6" />
              <p className="text-xl italic mb-6">{testimonials[activeTestimonial].text}</p>
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mx-1" />
                ))}
              </div>
              <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index ? 'bg-red-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block bg-red-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-600 transition-colors duration-200 transform hover:scale-105"
          >
            Explore Our Menu
          </Link>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-xl p-6 shadow-lg flex items-center">
            <FaClock className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Opening Hours</h3>
              <p className="text-gray-600">Mon-Sun: 11:00 AM - 10:00 PM</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg flex items-center">
            <FaMapMarkerAlt className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-600">123 Pizza Street, Food City</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg flex items-center">
            <FaPhone className="text-4xl text-red-500 mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;