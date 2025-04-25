import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhoto = () => {
  const { currVan } = useOutletContext()

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <img
        src={currVan.imageUrl}
        alt="Van Image"
        className="w-3/4 h-auto mx-auto rounded-lg shadow-lg"
      />
    </div>

  )
}

export default HostVanPhoto
