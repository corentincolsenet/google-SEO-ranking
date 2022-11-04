import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Layout from '../components/Layout';
import About from '../components/About';

const About_us: NextPage = () => {
    const table = [
        {id: 1, text: "About us"},
        {id: 2, text: "FAQ"}
    ]

    const properties: React.CSSProperties = {
        backgroundImage: `url("/images/about.webp")`
    }

    return (
        <>
            <NextSeo
                title="Xeofood | About us"
                description="Who are we ?"
            />
            <Layout>
                <div className='flex justify-center items-center bg-scroll bg-center bg-cover h-screen' style={properties}>
                    <h2 className='text-white text-7xl md:text-9xl'>Xeofood</h2>
                </div>
                <div className="py-16 bg-white">  
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <img className="rounded-xl" src="/images/sushis.webp" alt="image" loading="lazy" width="" height=""/>
                            </div>
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Xeofood aim to provide the best food to your home</h2>
                                <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 bg-gray-100">  
                    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:7/12 lg:w-6/12">
                                <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Our developers are dedicated to the community</h2>
                                <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                            </div>
                            <div className="md:5/12 lg:w-5/12">
                                <img className='rounded-xl' src="/images/team.webp" alt="image" loading="lazy" width="" height=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default About_us;