import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'; 
import authServise from './appwrite/Auth';
import React from 'react'
import { login, logout } from './store/AuthSlice';
import Header from './components/Hearder/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom'

const App = () => {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
  authServise.getCurrentUser()
  .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    }
    else{
      dispatch(logout)
    }
  })
  .finally(() => {setLoading(false)})
  
}, [])

  return !loading ? (
    <div className='min-h-screen flex justify-center items-center bg-gray-400'>
      <div className='w-auto text-center text-3xl font-extrabold block'>
         <Header />
         <main>
          TODO: <Outlet />
         </main>
         <Footer />
      </div>
    </div>
  ) : null

}

export default App
