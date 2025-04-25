import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg">
                <h1 className="text-3xl font-bold text-red-500 mb-4">Sorry, the page you were looking for was not found</h1>
                <p className="text-lg text-gray-700 mb-6">
                    It seems like the page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="text-lg text-blue-500 hover:text-blue-700 font-semibold underline transition duration-300"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
