import React from "react"
import { Link, Await, useLoaderData } from "react-router-dom"
import { getHostVans } from "../../../api"
import { requiredAuth } from "../../../utils"
import { BsStarFill } from "react-icons/bs"

export async function loader({ request }) {
    await requiredAuth(request)
    return { vans: getHostVans() }
}

export default function Dashboard() {
    const loaderData = useLoaderData()

    function renderVanElements(vans) {
        const hostVansEls = vans.map((van) => (
            <div
                key={van.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md transition"
            >
                <div className="flex items-center gap-4">
                    <img
                        src={van.imageUrl}
                        alt={`Photo of ${van.name}`}
                        className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{van.name}</h3>
                        <p className="text-gray-600">${van.price}/day</p>
                    </div>
                </div>
                <Link
                    to={`vans/${van.id}`}
                    className="text-blue-600 font-medium hover:underline"
                >
                    View
                </Link>
            </div>
        ))

        return (
            <div className="space-y-4 mt-4">
                {hostVansEls}
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            <section className="bg-orange-100 rounded-lg p-6 flex items-center justify-between shadow">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome!</h1>
                    <p className="text-gray-700">
                        Income last <span className="font-semibold text-black">30 days</span>
                    </p>
                    <h2 className="text-3xl font-bold text-orange-600 mt-2">$2,260</h2>
                </div>
                <Link
                    to="income"
                    className="text-orange-600 font-medium hover:underline"
                >
                    Details
                </Link>
            </section>

            <section className="bg-white rounded-lg p-6 flex items-center justify-between shadow border border-gray-100">
                <div className="flex items-center gap-2">
                    <BsStarFill className="text-yellow-400 text-xl" />
                    <h2 className="text-xl font-semibold text-gray-900">Review score</h2>
                    <p className="text-gray-700">
                        <span className="font-bold text-black">5.0</span>/5
                    </p>
                </div>
                <Link
                    to="reviews"
                    className="text-blue-600 font-medium hover:underline"
                >
                    Details
                </Link>
            </section>

            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Your listed vans</h2>
                    <Link
                        to="vans"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        View all
                    </Link>
                </div>

                <React.Suspense fallback={<h3 className="text-gray-600">Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>
            </section>
        </div>
    )
}
