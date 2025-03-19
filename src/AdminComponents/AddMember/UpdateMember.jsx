import React from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

//IMAGE HOSTING
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

export default function UpdateMember() {
    // const {name,category,position,image,department,_id} = useLoaderData() ||{}
    const member = useLoaderData()
    console.log(member)
    const { register, handleSubmit, reset } = useForm()
        const axiosSecure = useAxiosSecure()
        const axiosPublic =  useAxiosPublic()
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
                const membersInfo = {
                    name: data.name,
                    category: data.category,
                    position: data.position,
                    department: data.department,
                    image: res.data.data.display_url
                }
                const memberInfo = await axiosSecure.patch(`/members/${member._id}`, membersInfo)
                console.log(memberInfo.data)
                if (memberInfo.data.modifiedCount > 0) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.name} is update successful`,
                        showConfirmButton: false,
                        timer: 1500
                    });
    
                }
            }
            console.log(res.data)
        }
  return (
    <div>
        <div className='border-gray-300 p-4 rounded-xl w-full md:w-[600px] mx-auto shadow-2xl mt-10 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> Name*</span>
                        </div>
                        <input type="text" defaultValue={member?.name} placeholder=" name" className="input input-bordered w-full " {...register('name', { required: true })} />
                    </label>
                    <div className=' gap-3'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select
                                defaultValue={member?.category}
                                {...register('category', { required: true })}
                                className="select select-ghost w-full ">
                                <option disabled selected value='default'>Select a Title</option>
                                <option value='President'>President</option>
                                <option value='General Secretary'>General Secretary</option>
                                <option value='Finance Director'>Finance Director</option>
                                <option value='Deputy Finance Director'> Deputy Finance Director</option>
                                <option value='Sponsor Organizing Secretary'>Sponsor Organizing Secretary</option>
                                <option value='Co-Sponsor Organizing Secretary'>Co-Sponsor Organizing Secretary</option>
                                <option value='Decoration Secretary'>Decoration Secretary</option>
                                <option value='Co-Decoration Secretary'>Co-Decoration Secretary</option>
                                <option value='Publication  Secretary'>Publication Secretary</option>
                                <option value='Deputy Publication  Secretary'>Deputy Publication Secretary</option>
                                <option value='Chief Graphic Designer'>Chief Graphic Designer</option>
                                <option value='Assistant Graphic Designer'>Assistant Graphic Designer</option>
                                <option value='Chief News Publisher'>Chief News Publisher</option>
                                <option value='Assistant News Publisher'>Assistant News Publisher</option>
                                <option value='Chief Photographer'>Chief Photographer</option>
                                <option value='Chief Videographer'>Chief Videographer</option>
                                <option value='Assistant Videographer'>Assistant Videographer</option>
                                <option value='General Member'>General Member</option>
                            </select>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Student Position*</span>
                            </div>
                            <input type="number" defaultValue={member?.position} placeholder="semester - ( 7 )" className="input input-bordered w-full " {...register('position', { required: true })} />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Department Name*</span>
                            </div>
                            <input type="text" defaultValue={member?.department} placeholder="CST" className="input input-bordered w-full " {...register('department', { required: true })} />
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
  )
}
