import { Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Staff from './pages/Staff'
import Material from './pages/Material'
import Product from './pages/Product'
import Production from './pages/Production'
import Signin from './pages/Signin'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className='overflow-hidden'>
      {
        isLoggedIn && (<Header />)
      }
      <Routes>
        <Route path='/' element={<Navigate to='/signin' replace={true} />} />
        <Route path='/signin' element={<Signin/> }/>
        <Route element={<PrivateRoute />}>
          <Route path='/staff' element={<Staff/> }/>
          <Route path='/material' element={<Material /> }/>
          <Route path='/product' element={<Product /> }/>
          <Route path='/production' element={<Production /> }/>
        </Route>
      </Routes>
    </div>
  )
}

