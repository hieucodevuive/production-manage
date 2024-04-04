import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Staff from './pages/Staff'
import Material from './pages/Material'
import Product from './pages/Product'
import Production from './pages/Production'

export default function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Routes>
        <Route path='/staff' element={<Staff/> }/>
        <Route path='/material' element={<Material /> }/>
        <Route path='/product' element={<Product /> }/>
        <Route path='/production' element={<Production /> }/>
      </Routes>
    </div>
  )
}

