import React from 'react'
import img1 from '../../assets/bgDepartment.jpg'
import img2 from '../../assets/ppi1.jpg'
import img3 from '../../assets/ppi2.jpg'
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner() {
  return (
    <div>
        <Carousel className='text-center mx-auto ' autoPlay='true'>
                <div>
                    <img src={img1} />
                    <p className="legend">Debugging is like being the detective in a crime movie where you are also the culprit </p>
                </div>
                <div>
                <img src={img2} />
                    <p className="legend">Build solutions, not just software—great code changes lives </p>
                </div>
                <div>
                <img src={img3} />
                    <p className="legend text-xl">Code is like poetry; make it elegant, make it meaningful </p>
                </div>
            </Carousel>
    </div>
  )
}
