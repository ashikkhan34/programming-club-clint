import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

//IMAGE HOSTING
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddMember = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            //now send the menu item data to the server with the image url
            const eventMembersInfo = {
                name: data.name,
                email: data.email,
                position: data.position,
                department: data.department,
                roll: data.roll,
                image: res.data.data.display_url
            }
            const memberInfo = await axiosSecure.post('/eventMembers', eventMembersInfo)
            console.log(memberInfo.data)
            if (memberInfo.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the members`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
        console.log(res.data)
    }
    return (
        <div className='pt-16 bg-indigo-950' >
            <div className='h-14 w-full text-center items-center bg-blue-800 flex justify-evenly'>
                <h1 className='py-4 text-cyan-400 font-bold'>Register For Events</h1>
                
            </div>
            <div className='border-gray-300 bg-blue-900  text-white p-4 rounded-xl w-full md:w-[600px] mx-auto shadow-2xl mt-10 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> Name*</span>
                        </div>
                        <input type="text" placeholder=" name" className="input bg-blue-950 input-bordered w-full " {...register('name', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> Email*</span>
                        </div>
                        <input type="text" placeholder=" Email" className="input bg-blue-950 input-bordered w-full " {...register('email', { required: true })} />
                    </label>
                    <div className=' gap-3'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Student Position*</span>
                            </div>
                            <input type="number" placeholder="semester - ( 7 )" className="input input-bordered w-full bg-blue-950 " {...register('position', { required: true })} />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Your Class Roll*</span>
                            </div>
                            <input type="number" placeholder="Your Class Roll" className="input input-bordered w-full bg-blue-950 " {...register('roll', { required: true })} />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Department Name*</span>
                            </div>
                            <input type="text" placeholder="CST" className="input input-bordered w-full bg-blue-950 " {...register('department', { required: true })} />
                        </label>
                    </div>
                    <div className='mt-3'>
                        <input
                            {...register('image', { required: true })}
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>

                    <input class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  btn m-5 w-60 md:ml-32 text-center" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddMember;