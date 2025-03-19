import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import GoogleLogin from '../GoogleLogin/GoogleLogin'

export default function Login() {
    const {signIn} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState()
    const [showPass, setShowPass] = useState(false)
    const from = location.state?.pathname || '/';
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                reset()
                // toast.success('login su')
            })
            .catch(error => {
                setError(error.message)
            })
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className="hero bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: true, minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{6,}$/
                                    })}
                                    type={showPass ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                                <button onClick={() => setShowPass(!showPass)} className=' text-lg absolute -ml-8 mt-3 '>
                                    {
                                        showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </button>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                {errors.password?.type === "required" && (
                                    <p className='text-red-500'>Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-500'>Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-500'>Password must be 1 uppercase 1 lowercase 1 special character and 1 number</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-500'>Password less then 20 characters</p>
                                )}
                                <p className='text-red-600'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't have an account.Please <Link className='text-red-700 underline font-bold' to='/signUp'>Sign Up</Link></p>
                            <div className='divider'></div>
                            <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
