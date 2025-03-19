import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router-dom'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'

export default function UpdateEvent() {
    const event = useLoaderData()
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        const eventsInfo = {
            eventName: data.eventName,
            placeName: data.placeName,
            registrationStart: new Date().toLocaleString(),
            registrationDeadline: data.registrationDeadline,
            finalResult: data.finalResult,
            hackathonsStart: data.hackathonsStart,
            price1: data.price1,
            price2: data.price2,
            price3: data.price3,
            aboutEvent: data.aboutEvent
        }
        const eventInfo = await axiosSecure.patch(`/events/${event?._id}`, eventsInfo)
        console.log(eventInfo.data)
        if (eventInfo.data.modifiedCount > 0) {
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.eventName} is update successful`,
                showConfirmButton: false,
                timer: 1500
            });

        }
    }

    return (
        <div>
            <div className='border-gray-300 p-4 rounded-xl w-full md:w-[600px] mx-auto shadow-2xl mt-10 '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Event Name*</span>
                        </div>
                        <input defaultValue={event.eventName} type="text" placeholder=" EventName" className="input input-bordered w-full " {...register('eventName', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Place Name*</span>
                        </div>
                        <input defaultValue={event.placeName} type="text" placeholder="Place Name" className="input input-bordered w-full " {...register('placeName', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Registration Deadline*</span>
                        </div>
                        <input defaultValue={event.registrationDeadline} type="date" placeholder="Registration Deadline" className="input input-bordered w-full " {...register('registrationDeadline', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> Hackathons Start*</span>
                        </div>
                        <input defaultValue={event.hackathonsStart} type="date" placeholder="Hackathons Start" className="input input-bordered w-full " {...register('hackathonsStart', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> Final Presentation & Awards*</span>
                        </div>
                        <input defaultValue={event.finalResult} type="date" placeholder="Final Presentation & Awards" className="input input-bordered w-full " {...register('finalResult', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> 1st Price*</span>
                        </div>
                        <input defaultValue={event.price1} type="text" placeholder="Place Name" className="input input-bordered w-full " {...register('price1', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> 2nd Price*</span>
                        </div>
                        <input defaultValue={event.price2} type="text" placeholder="Place Name" className="input input-bordered w-full " {...register('price2', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> 3rd Price*</span>
                        </div>
                        <input defaultValue={event.price3} type="text" placeholder="Place Name" className="input input-bordered w-full " {...register('price3', { required: true })} />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text"> About Event*</span>
                        </div>
                        <textarea {...register('aboutEvent', { required: true })} className="w-full border border-gray-500" cols={5} rows={5} placeholder='About Event ' defaultValue={event.aboutEvent}></textarea>
                    </label>
                    <input class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  btn m-5 w-60 md:ml-32 text-center" value='Update Event' type="submit" />
                </form>
            </div>
        </div>
    )
}
