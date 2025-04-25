import React from 'react'
import {useOutletContext} from 'react-router-dom'
 
const HostVanPricing = () => {
  const {currVan}=useOutletContext()

  return (
    <div className='text-xl mx-4 my-5'>
       <h4>${currVan.price}/day</h4>
    </div>
  )
}

export default HostVanPricing
