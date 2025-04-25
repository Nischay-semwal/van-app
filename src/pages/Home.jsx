import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const backgroundImageUrl = 'https://assets.scrimba.com/advanced-react/react-router/beach-bum.png'; // Scrimba's background image

  return (
    <div
      className="relative flex justify-center items-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'contain', 
        height: '60vh', 
        width: '100%',
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-40"
      ></div>

      <div className="absolute text-center text-white z-10 px-4 sm:px-8 w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          You got the travel plans, get the travel vans.
        </h1>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed">
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <Link
          to="vans"
          className="inline-block text-xl font-semibold text-white bg-blue-500 hover:bg-blue-700 py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Find your van
        </Link>
      </div>
    </div>
  )
}

export default Home;
