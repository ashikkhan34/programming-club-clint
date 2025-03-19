import React from 'react'
import webDesign from '../../assets/course/web-design.jpg'
import webDevelopment from '../../assets/course/web-development.jpg'
import graphic from '../../assets/course/graphic.jpg'
import netWork from '../../assets/course/netwoek.jpg'
import digital from '../../assets/course/digital-marketing.jpg'
import cyber from '../../assets/course/networked-cityscape-with-connected-icons.jpg'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaDiscourse } from 'react-icons/fa'


export default function Course() {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-8 bg-violet-100'>
            <div data-aos="fade-right" className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={webDesign}
                        className='h-72' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Web Design</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn btn-primary">Continue Course <FaDiscourse></FaDiscourse> </button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={webDevelopment}
                        className='h-72' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Web Development</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn btn-primary">Continue Course <FaArrowAltCircleRight></FaArrowAltCircleRight> </button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={graphic}
                        className='h-72' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Graphic Design</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Continue Course <FaDiscourse></FaDiscourse> </button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={netWork}
                        className='h-72' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Networking</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn btn-primary">Continue Course <FaArrowAltCircleLeft></FaArrowAltCircleLeft> </button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={cyber}
                        className='h-72' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Cyber Security</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn btn-primary">Continue Course <FaArrowAltCircleLeft></FaArrowAltCircleLeft> </button>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className="card bg-base-100  shadow-sm">
                <figure>
                    <img
                        src={digital}
                        className='h-72' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Digital Marketing</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button disabled className="btn btn-primary">Continue Course <FaDiscourse></FaDiscourse> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
