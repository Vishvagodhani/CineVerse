import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/auth'

function PublicOnlyRoute({ children }) {
  const { user } = useAuth()

  if (user) {
    return <Navigate to="/Content" replace />
  }

  return children ? children : <Outlet />
}

export default PublicOnlyRoute
