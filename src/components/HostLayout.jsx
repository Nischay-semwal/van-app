import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const HostLayout = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 flex justify-start space-x-8">
                    <NavLink
                        to="."
                        end
                        className={({isActive})=>isActive ?"text-lg font-bold underline  text-[#161616]":"text-xl font-semibold text-gray-800 hover:text-blue-600 hover:underline transition duration-300"}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="reviews"
                        className={({isActive})=>isActive ?"text-lg font-bold underline  text-[#161616]":"text-xl font-semibold text-gray-800 hover:text-blue-600 hover:underline transition duration-300"}
                    >
                        Reviews
                    </NavLink>
                    <NavLink
                        to="income"
                        className={({isActive})=>isActive ?"text-lg font-bold underline  text-[#161616]":"text-xl font-semibold text-gray-800 hover:text-blue-600 hover:underline transition duration-300"}
                    >
                        Income
                    </NavLink>
                    <NavLink
                        to="vans"
                        className={({isActive})=>isActive ?"text-lg font-bold underline  text-[#161616]":"text-xl font-semibold text-gray-800 hover:text-blue-600 hover:underline transition duration-300"}
                    >
                        Vans
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </div> 
            )
}

            export default HostLayout
