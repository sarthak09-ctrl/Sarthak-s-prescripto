import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          CONTACT <span className="text-primary">US</span>
        </h2>
        <p className="text-gray-500 mt-2">We'd love to hear from you!</p>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Our Office</h3>
            <p className="text-gray-600 leading-relaxed">
              54321 Sarthak Ranawade<br />
              Extension Building, BOAT CLUB CAMPUS, COEP TECHNOLOGICAL UNIVERSITY, SHIVAJI NAGAR, PUNE MAHARASHTRA, INDIA.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Get in Touch</h3>
            <p className="text-gray-600 leading-relaxed">
              Tel: <a href="tel:9112954197" className="text-primary hover:underline">9112954197</a><br />
              Email: <a href="mailto:sarthakranawade1234@gmail.com" className="text-primary hover:underline">sarthakranawade1234@gmail.com</a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-1">Careers at <span className="text-primary">PRESCRIPTO</span></h3>
            <p className="text-gray-600">Learn more about our teams and job openings.</p>
            <button className="mt-4 px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
