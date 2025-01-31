import React from 'react'
import { useRoutes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import RegisterLayout from './layouts/RegisterLayout'
import Admin from './pages/Admin'
import Order from './pages/Admin/Order'
import Product from './pages/Admin/Product'
import User from './pages/Admin/User'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: '/admin',
      element: (
        <AdminLayout>
          <Admin />
        </AdminLayout>
      )
    },
    {
      path: '/admin/list-order',
      element: (
        <AdminLayout>
          <Order />
        </AdminLayout>
      )
    },
    {
      path: '/admin/list-product',
      element: (
        <AdminLayout>
          <Product />
        </AdminLayout>
      )
    },
    {
      path: '/admin/list-user',
      element: (
        <AdminLayout>
          <User />
        </AdminLayout>
      )
    }
  ])
  return routeElements
}

export default useRouteElements
