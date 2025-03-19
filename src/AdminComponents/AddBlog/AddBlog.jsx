import React from 'react'
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
//IMAGE HOSTING
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

export default function AddBlog() {
        const { register, handleSubmit,reset} = useForm()
    
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
            //image upload to imgbb and then get an url
            const imageFile = { image: data.photo[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            if (res.data.success) {
                //now send the menu item data to the server with the image url
                const photoGallery = {
                    image: res.data.data.display_url
                }
                const memberInfo = await axiosPublic.post('/photos', photoGallery)
                console.log(memberInfo.data)
                if (memberInfo.data.insertedId) {
                    reset()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `photo is added to the gallery`,
                        showConfirmButton: false,
                        timer: 1500
                    });
    
                }
            }
            console.log(res.data)
    }
  return (
    <div>
        <div className='h-14 w-full text-center items-center bg-pink-100'>
                <h1 className='py-4 text-pink-950 font-bold'>Add our Memories</h1>
            </div>

            <div className='border-gray-300 p-4 rounded-xl w-full md:w-[600px] mx-auto shadow-2xl mt-10 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-3'>
                        <label className='text-gray-500 p-2'>Upload Photo</label><br />
                    <input
                        {...register('photo',{required:true})}
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    </div>

                    <input class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  btn m-5 w-60 md:ml-32 text-center" type="submit" />
                </form>
            </div>
    </div>
  )
}
