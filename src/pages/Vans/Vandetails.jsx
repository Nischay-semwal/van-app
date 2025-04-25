import React from 'react'
import { useParams ,Link, useLocation, useLoaderData} from 'react-router-dom'
import { getVan } from '../../../api'

export function loader({params})
{
  return getVan(params.id)
}

const Vandetails = () => {
  const params = useParams()
  const location=useLocation()
  const van=useLoaderData()
  
  const search=location.state?.search || ""
  const type=location.state?.type || "all"
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link to={`..${search}`} relative="path">
          <span>Back to {type} vans</span>
        </Link>
      </div>
      
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <img
              src={van.imageUrl}
              alt={van.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{van.name}</h2>
            <p className="text-xl text-gray-500 mb-2">
              <span className="font-bold text-green-600">${van.price}</span>/day
            </p>
            <p className="text-gray-700 mb-4">{van.description}</p>
            <i className="text-sm font-semibold text-gray-600 bg-gray-200 px-4 py-2 rounded-full">
              {van.type}
            </i>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Rent this van
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Vandetails
