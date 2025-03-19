import React from 'react'

export default function Opportunity() {
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='p-9 bg-slate-100'>
                <h1 className=' text-center text-3xl md:text-5xl font-bold text-gray-800'>Become a Member & Unlock Exclusive Benefits</h1>
                <p className='md:text-lg text-center text-gray-400'>Join our programming community and enhance your skills with exclusive workshops, projects, and competitions</p>
                <button>
                    <a href="#_" class="relative inline-flex mt-3 ml-32 md:ml-[300px] lg:ml-[600px] items-center justify-center text-center px-10 py-3 overflow-hidden font-medium transition-all bg-gray-400 rounded hover:bg-white group">
                        <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Join Us</span>
                    </a>
                </button>
            </div>
            {/* -------------------------------- */}
            <div className='bg-slate-100 py-4'>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="w-3/4 hover:bg-green-100 mx-auto  collapse collapse-arrow bg-base-200 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">✅ 1. Skill Development</div>
                    <div className="collapse-content text-sm"><ul>
                        <li>Contribute to open-source projects.</li>
                        <li>Gain expertise in Data Structures & Algorithms.</li>
                        <li>Contribute to open-source projects.</li>
                    </ul></div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className=" w-3/4 hover:bg-green-100 mx-auto collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">🚀 2. Competitive Programming & Hackathons</div>
                    <div className="collapse-content text-sm"><ul>
                        <li>Participate in programming contests and hackathons.</li>
                        <li>Prepare for national and international competitions.</li>
                        <li>Receive guidance from experienced mentors.</li>
                    </ul></div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="w-3/4 hover:bg-green-100 mx-auto collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">🔥 3. Access to Resources & Library</div>
                    <div className="collapse-content text-sm"><ul>
                        <li>Exclusive learning materials for club members.</li>
                        <li>Get access to e-books, tutorials, and premium coding platforms.</li>

                    </ul></div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="w-3/4 hover:bg-green-100 mx-auto collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">🎤 4. Workshops & Networking</div>
                    <div className="collapse-content text-sm"><ul>
                        <li>Get career guidance and internship opportunities.</li>
                        <li>Network with industry experts and professionals.</li>
                        <li>Attend weekly and monthly workshops and seminars.</li>

                    </ul></div>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="w-3/4 hover:bg-green-100 mx-auto collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">🎯 5. Career Support & Internships</div>
                    <div className="collapse-content text-sm"><ul>
                        <li>Strong industry connections for club members.</li>
                        <li>CV building, interview preparation, and job market training.</li>
                        <li>Internship and job referral opportunities.</li>

                    </ul></div>
                </div>
            </div>
        </div>
    )
}
