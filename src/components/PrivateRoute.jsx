import { Navigate, Outlet } from 'react-router-dom'
import { useState } from 'react'

export default function PrivateRoute() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return isLoggedIn ? <Outlet /> : <Navigate to='/signin' />
}
