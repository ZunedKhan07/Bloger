import React from 'react'
import { useDispatch } from 'react-redux'
import authServise from '../../appwrite/Auth'
import { logout } from '../../store/AuthSlice'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authServise.logOut().then(() => {
            dispatch(logout())
        })
    }
  return (
   <button className='inline-block px-6 py-2 duration-200
   hover:bg-blue-100 rounded-full'>
    Logout
   </button>
  )
}

export default LogoutBtn
