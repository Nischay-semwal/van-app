import React from "react"
import { useLoaderData, useNavigation ,Form, redirect ,useActionData} from "react-router-dom"
import { loginUser } from "../../api"

export function loader({request})
{
    return new URL(request.url).searchParams.get("message")
}

export async function  action({request}) {
   
    const formData=await request.formData()
    const email=formData.get("email")
    const password=formData.get("password")
    const pathname=new URL(request.url).searchParams.get("redirectTo") || "/host"
    
    try{
        const data=loginUser({email,password})
        localStorage.setItem("loggedin", true)
        return redirect(pathname)
    }
    catch(err){
        return err.message
    }
}

export default function Login() {
    const message=useLoaderData()
    const navigation=useNavigation()
    const errormessage=useActionData()
    
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">Sign in to your account</h1>
                {message && <h2 className="text-2xl bg-red-700">{message}</h2>}
                {errormessage && <h2 className="text-2xl text-red-700">{errormessage}</h2>}
                
                <Form method="post" replace className="space-y-4">
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button disabled={navigation.state === "submiting"} type="submit" className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                       {navigation.state ==="submiting"?"Logging in ": "Log in"}
                    </button>
                </Form>
            </div>
        </div>
    )
}
