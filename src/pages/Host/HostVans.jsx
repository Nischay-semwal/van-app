import React from 'react'
import { Link, useLoaderData, Await } from 'react-router-dom'
import { getHostVans } from '../../../api'
import { requiredAuth } from '../../../utils'

export async function loader({ request }) {
    await requiredAuth(request)
    return { vans: getHostVans() }
}

const HostVans = () => {

    const dataPromise = useLoaderData()

    function renderVan(vans) {
        const hostVanEls = vans.map((van) => (
            <Link
                key={van.id}
                to={van.id}
                className="flex flex-col items-center justify-between border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
                <img src={van.imageUrl} alt={van.name} className="w-full h-56 object-cover" />
                <div className="p-4 w-full">
                    <h3 className="text-xl font-semibold text-gray-800">{van.name}</h3>
                    <p className="text-lg text-gray-600">${van.price}/day</p>
                </div>
            </Link>
        ))
        return (
            <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {hostVanEls}
                </div>
            </div>
        );
    }
    
    return (
        <div className='p-6'> 
            <h1 className="text-2xl font-bold text-center mb-8">Your Listed Vans</h1>
            <React.Suspense fallback={<h1>Loading vans..</h1>}>
                <Await resolve={dataPromise.vans}>
                    {renderVan}
                </Await>
            </React.Suspense>
        </div>
    )
}

export default HostVans
