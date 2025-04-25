import React from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import Vandetails ,{loader as vanDetailLoader} from './pages/Vans/Vandetails'
import Layout from './components/Layout'
import Dashboard ,{loader as dashboardLoader} from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostVans ,{loader as hostVansLoader} from './pages/Host/HostVans'
import HostVanDetail ,{loader as hostVansDetailLoader} from './pages/Host/HostVanDetail'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhoto from './pages/Host/HostVanPhoto'
import HostVanInfo from './pages/Host/HostVanInfo'
import NotFound from './pages/NotFound'
import Error from './components/Error'
import Login ,{loader as loginLoader ,action as loginAction} from './pages/Login'
import { requiredAuth } from '../utils'

const router = createBrowserRouter(createRoutesFromElements(

  <Route element={<Layout />}>
    <Route path="*" element={<NotFound />} />
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} loader={loginLoader} action={loginAction}/>
    <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path='vans/:id' element={<Vandetails />} errorElement={<Error />} loader={vanDetailLoader}/>

    <Route path='host' element={<HostLayout />} errorElement={<Error />}
    loader={async ({request})=> await requiredAuth(request)}>
      <Route index element={<Dashboard/>} loader={dashboardLoader}/>
      <Route path='income' element={<Income />}/>
      <Route path='reviews' element={<Reviews />}/>
      <Route path='vans' element={<HostVans />} errorElement={<Error />} loader={hostVansLoader}/>
      <Route path='vans/:id' element={< HostVanDetail />} errorElement={<Error />} loader={hostVansDetailLoader}>
        <Route index element={<HostVanInfo />}/>
        <Route path='pricing' element={<HostVanPricing />}/>
        <Route path='photos' element={<HostVanPhoto />}/>
      </Route>
    </Route>
  </Route>
))

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
