import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {Link ,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import React from 'react'
import authServise from '../appwrite/Auth';
import {login} from '../store/AuthSlice'
import Input from './Input';
import { Button } from './Button';
import Logo from './Logo';
  consol
const Login = () => {
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const loginSubmit = async (data) => {
        setError("")
        try {
            const session = authServise.login(data)
            if (session) {
                const userData = await authServise.getCurrentUser()
                if (userData) {
                    dispatch(login(userData))
                    navigate('/')
                }
            } else {
                
            }
        } catch (error) {
            setError(error.massage)
        }
    }
  return (
    <div className ='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
            <span className="inline-block w-full max-w-[100px]">
                <Logo width='100%'/>
            </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(loginSubmit)} className='mt-8'>
            <div className='space-y-5'>
                <Input 
                label= 'Email:'
                type= 'email'
                placeholder='Enter your email'
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input 
                type='password'
                label='Password:'
                placeholder='Enter your password'
                {...ragister("password", {
                    required: true,
                    
                })}
                />
                <Button
                type='submit'
                className='w-full'
                >
                    sing in
                </Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
