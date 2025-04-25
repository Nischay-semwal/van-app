import React from 'react'
import { Link, useParams ,Outlet,NavLink,useLoaderData} from 'react-router-dom'
import { getVan } from '../../../api'
import { requiredAuth } from '../../../utils'

export async function loader({params ,request})
{
    await requiredAuth(request)
    return getVan(params.id)
}

const HostVanDetail = () => {
    const currVan=useLoaderData()
    const { id } = useParams()

    return (
        <section>
            <Link to=".." relative="path" className='text-1xl'>
              <span>Back to all vans</span>
            </Link>
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-12">
                <img src={currVan.imageUrl} alt={currVan.name} className="w-full h-56 object-cover" />

                <div className="p-4">
                    <div className="text-sm text-gray-600 font-medium uppercase mb-2">{currVan.type}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{currVan.name}</h3>
                    <p className="text-lg font-semibold text-gray-900">${currVan.price}/day</p>
                </div>
                <nav className=' mx-4 font-semibold flex gap-4 '>
                    <NavLink to="."  className={({isActive})=>isActive ? "underline font-bold" : ""} end>
                        Details
                        </NavLink>
                    <NavLink to="pricing" className={({isActive})=>isActive ? "underline font-bold" : ""}>
                        Pricing
                        </NavLink>
                    <NavLink to="photos" className={({isActive})=>isActive ? "underline font-bold" : ""}>
                        Photos
                        </NavLink>
                </nav>
               <Outlet context={{currVan}}/>
            </div>
        </section>


    )
}

export default HostVanDetail
