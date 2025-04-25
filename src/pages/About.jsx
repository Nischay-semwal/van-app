import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1506748686215-e94bb63a38b5';

  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingBottom: '40px', 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 p-8">
        <div className="border-4 border-white p-6 mb-6 bg-white rounded-lg shadow-xl max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="text-lg sm:text-xl text-gray-700">
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>

        <div className="text-white font-bold text-center p-8 border-2 border-amber-400 bg-amber-400 rounded-lg shadow-xl max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4">
            Your destination is waiting.<br />Your van is ready.
          </h2>
          <Link to="/vans" className="inline-block text-xl text-blue-600 hover:text-blue-800 font-semibold transition duration-300">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About;
