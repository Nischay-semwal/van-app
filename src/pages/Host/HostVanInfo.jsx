import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
  const { currVan } = useOutletContext()
  return (

    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h4 className="text-xl font-semibold text-gray-800">
        Name: <span className="font-normal text-gray-600">{currVan.name}</span>
      </h4>
      <h4 className="text-xl font-semibold text-gray-800">
        Category: <span className="font-normal text-gray-600">{currVan.type}</span>
      </h4>
      <h4 className="text-xl font-semibold text-gray-800">
        Description: <span className="font-normal text-gray-600">{currVan.description}</span>
      </h4>
      <h4 className="text-xl font-semibold text-gray-800">
        Visibility: <span className="font-normal text-gray-600">Public</span>
      </h4>
    </div>

  )
}

export default HostVanInfo
