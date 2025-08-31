"use client";

import { FormEvent } from 'react';
import GrainImage from '@/assets/images/grain.jpg';

const ContactPage = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mnnpopjj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Handle success
        alert('Message sent successfully!');
        e.currentTarget.reset();
      }
    } catch (error) {
      // Handle error
      console.error('Error:', error);
    }
  };

  return (
    <div className="pt-8 pb-16 md:pt-12 md:pb-24 relative z-0">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl border border-gray-800 space-y-8 relative"
        >
          {/* Add grain background to form */}
          <div 
            className="absolute inset-0 -z-10 opacity-5 rounded-3xl"
            style={{ backgroundImage: `url(${GrainImage.src})` }}
          ></div>

          <h2 className="text-4xl font-extrabold text-center text-white mb-6">
            📬 Let's Work Together
          </h2>

          {/* Update input fields to use emerald accent color */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Let's build something amazing"
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me more about what you're looking for..."
              className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all resize-none"
            />
          </div>

          {/* Modern select dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Budget Range
              </label>
              <div className="relative">
                <select
                  name="budget"
                  className="appearance-none w-full px-4 py-3 rounded-xl bg-[#1a1a1a] text-white border border-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all pr-10"
                  defaultValue=""
                >
                  <option value="" disabled>Select budget</option>
                  <option value="under-500">$0 - $500</option>
                  <option value="500-2000">$500 - $2000</option>
                  <option value="2000-plus">$2000+</option>
                  <option value="Not sure">Undecided</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Update checkbox styles */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Type of Project
              </label>
              <div className="flex flex-wrap gap-3">
                {['Website', 'Web App', 'API', 'Consultation'].map((type) => (
                  <label key={type} className="flex items-center space-x-2 group">
                    <input
                      type="checkbox"
                      name="type"
                      value={type.toLowerCase()}
                      className="w-4 h-4 rounded border-gray-700 text-emerald-400 focus:ring-emerald-400/50 focus:ring-offset-0 bg-[#1a1a1a] transition-all"
                    />
                    <span className="text-gray-300 group-hover:text-emerald-400/80 transition-colors">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Update submit button */}
          <div className="text-center space-y-4">
            <button
              type="submit"
              className="mt-6 px-8 py-4 bg-emerald-400 text-black font-bold rounded-xl shadow-lg hover:shadow-emerald-400/50 hover:scale-105 transition duration-300 ring-2 ring-emerald-400/30"
            >
              ✉ Send Message
            </button>
            
            <div>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Back to Main Page
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;