import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signinAPI } from '../api/auth.api'

export default function Signin() {
  const [formData, setFormData] = useState({})

  const navigate = useNavigate()

  //Lấy dữ liệu từ form
  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }

  //Sử lý đăng nhập
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      //call api
      const result = await signinAPI(formData)
      if (result) {
        console.log('Sign in successful')
        navigate('/staff')
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-screen'>
      <div className=' flex justify-center text-center h-18 bg-slate-700 text-white text-lg font-semibold'>
        <div className='border-r-4 p-2 border-orange-500'>
          Forge
        </div>
      </div>
      <div className='mt-20 sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>Sign in to your account</h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' action='#' method='POST'>
          <div>
            <label htmlFor='username' className='block text-sm font-medium leading-6 text-gray-900'>Username</label>
            <div className='mt-2'>
              <input onChange={handleChangeInput} id='username' name='username' type='username' required className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='p-2block text-sm font-medium leading-6 text-gray-900'>Password</label>
              <div className='text-sm'>
                <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>Forgot password?</a>
              </div>
            </div>
            <div className='mt-2'>
              <input onChange={handleChangeInput} id='password' name='password' type='password' autoComplete='current-password' required className='p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            </div>
          </div>
          <div>
            <button type='submit' onSubmit={handleSubmit} className='flex w-full justify-center rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Sign in</button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        </p>
      </div>
    </div>
  )
}
