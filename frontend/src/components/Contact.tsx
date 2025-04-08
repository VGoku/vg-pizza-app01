import React, { useState } from 'react';
import { FaPizzaSlice, FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaCheck } from 'react-icons/fa';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image Grid */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <img src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1600628421055-4d30de868b8f" alt="" className="w-full h-full object-cover rounded-xl hidden md:block" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/75 to-red-100/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <FaPizzaSlice className="text-5xl text-red-500 mr-4 animate-bounce" />
              <h1 className="text-5xl font-bold text-gray-900">
                Contact Us
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a question or feedback? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center animate-fade-in">
                  <FaCheck className="text-green-500 mr-2" />
                  <p className="text-green-700">Your message has been sent successfully!</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) validateForm();
                    }}
                    className={`w-full rounded-lg shadow-sm transition-all duration-200 ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-red-500 focus:ring-red-500'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) validateForm();
                    }}
                    className={`w-full rounded-lg shadow-sm transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-red-500 focus:ring-red-500'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) validateForm();
                    }}
                    className={`w-full rounded-lg shadow-sm transition-all duration-200 ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-red-500 focus:ring-red-500'
                    }`}
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) validateForm();
                    }}
                    rows={4}
                    className={`w-full rounded-lg shadow-sm transition-all duration-200 ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-red-500 focus:ring-red-500'
                    }`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start hover:translate-x-2 transition-transform duration-300">
                    <FaMapMarkerAlt className="text-2xl text-red-500 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
                      <p className="text-gray-600">123 Pizza Street, Food City, FC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start hover:translate-x-2 transition-transform duration-300">
                    <FaPhone className="text-2xl text-red-500 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start hover:translate-x-2 transition-transform duration-300">
                    <FaEnvelope className="text-2xl text-red-500 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@pizzaparadise.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Integration */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
                <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                  <iframe
                    title="Pizza Paradise Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40Â°45'00.0%22N+73Â°58'48.0%22W!5e0!3m2!1sen!2sus!4v1"
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-3xl text-red-500 hover:text-red-600 transition-all duration-300 transform hover:scale-125"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-3xl text-red-500 hover:text-red-600 transition-all duration-300 transform hover:scale-125"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-3xl text-red-500 hover:text-red-600 transition-all duration-300 transform hover:scale-125"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;