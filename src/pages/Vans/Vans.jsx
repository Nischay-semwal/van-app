import React from 'react'
import { Link, useSearchParams, useLoaderData , Await } from 'react-router-dom'
import { getVans } from '../../../api'

export function loader() {
  return { vans: getVans() }
}

const Vans = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const dataPromise = useLoaderData()
  const typeFilter = searchParams.get("type")


  function renderVans(vans) {
    
    const filteredVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vanElements = filteredVans.map(van => (
      <Link to={van.id} key={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
        <div className="p-4 border-2 border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src={van.imageUrl}
            alt={van.name}
            className="w-full h-48 object-cover rounded-md"

          />
          <h3 className="text-xl font-semibold mt-4">{van.name}</h3>
          <p className="text-lg text-gray-700">
            <span className="font-bold">${van.price}</span> <span>/day</span>
          </p>
          <i className="mt-2 text-sm text-gray-500">{van.type}</i>
        </div>
      </Link>
    ));
    return (
      <>
        <div className="flex gap-6 justify-center mb-8">
          <button onClick={() => setSearchParams({ type: "simple" })}
            className={`text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${typeFilter == 'simple' ? "font-bold text-yellow-500" : null}`}>
            Simple
          </button>
          <button onClick={() => setSearchParams({ type: "rugged" })}
            className={`text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${typeFilter == 'rugged' ? "font-bold text-yellow-500" : null}`}>
            Rugged
          </button>
          <button onClick={() => setSearchParams({ type: "luxury" })}
            className={`text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-300 ${typeFilter == 'luxury' ? "font-bold text-yellow-500" : null}`}>
            Luxury
          </button>
          {
            typeFilter ?
              <button onClick={() => setSearchParams({})}
                className="text-lg font-semibold text-gray-700 hover:text-yellow-500 transition-colors duration-300">
                Clear
              </button> : null
          }
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {vanElements}
        </div>
      </>
    )
  }


  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Explore our van options</h1>
      <React.Suspense fallback={<h1>Loading vans..</h1>}>
        <Await resolve={dataPromise.vans}>
          {renderVans}
        </Await>
      </React.Suspense>
    </div>
  )
}

export default Vans
