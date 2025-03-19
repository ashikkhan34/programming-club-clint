import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleLogin from "../GoogleLogin/GoogleLogin";



//IMAGE HOSTING
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useAuth()
    const [showPass, setShowPass] = useState()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const onSubmit = async(data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log("Image Upload Response:", res);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data?.name,  res.data?.data?.url, data.photoURL)
                    .then((result) => {
                        console.log('result data',result)
                        //create user entry in the database
                        const userInfo = {
                            name: data?.name,
                            email: data?.email,
                            photoURL: res.data?.data?.display_url
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log('res', res)
                                if (res.data?.insertedId) {
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Create Successful",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })

    }

    return (
        <div 
        className="mt-16 hero min-h-screen"
        style={{
            backgroundImage: "url(https://i.ibb.co.com/YT7CRLqG/abstract-dark-blue-futuristic-digital-grid-background.jpg)",
          }}
        >
            <div className="hero  min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card  w-full max-w-sm shrink-0 shadow-2xl mt-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white ">Full-Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="name" placeholder="name" className="input input-bordered bg-sky-900 text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white ">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered  bg-sky-900 text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white ">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: true, minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{6,}$/
                                    })}
                                    type={showPass ? 'text' : 'password'} placeholder="password" className="input input-bordered  bg-sky-900 text-white" required />
                                <button onClick={() => setShowPass(!showPass)} className='absolute text-lg -ml-8 mt-3'>
                                    {
                                        showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </button>
                                <label className="label">
                                    <a href="#" className="text-white  link link-hover">Forgot password?</a>
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
                            </div>
                            <div className='mt-3'>
                            <label className="label">
                                    <span className="text-white ">Choose Your Photo</span>
                                </label>
                                <input
                                    {...register('image', { required: true })}
                                    type="file"
                                    className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                            </div>
                            <div className="form-control  mx-auto mt-6">
                                <input className="btn px-10 btn-primary" type="submit" value="Sign Up" />
                                {/* <button className="btn btn-primary">Sign Up</button> */}
                            </div>
                            <p className="text-white">Already have an account.Please <Link className='text-red-700 underline font-bold' to='/login'>Login</Link></p>

                            <div className='divider text-gray-300'></div>
                            <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;