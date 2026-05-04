import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Navbar from './Navbar/Navbar'
import ProductDetail from './components/ProductDetail'
import { ToastContainer, toast } from 'react-toastify'
import './components/css_codes/base.css'
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
        <ToastContainer />
      </div>
    },
    {
      path: "/products",
      element: <div>
        <Navbar />
        <Products />
        <ToastContainer />
      </div>
    },
    {
      path: "/contact",
      element: <div>
        <Navbar />
        <Contact />
        <ToastContainer />
      </div>
    },
    {
      path: "/products/:id",
      element: <div>
        <Navbar />
        <ProductDetail />
        <ToastContainer />
      </div>
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
