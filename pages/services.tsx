import { NextPage } from "next";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import Image from "next/image";

const Services: NextPage = () => {

    return (
        <>
            <NextSeo
                title="Xeofood | Services"
                description="We provide the best food delivery in Xeozrodel. We garantee your food delivered 
                within 10 minutes after your order"
            />
            <Layout>
                <section className="body-font">
                    {/* Title */}
                    <div className="flex justify-center items-center pt-8">
                        <h2 className="text-4xl">How it&apos;s working ?</h2>
                    </div>
                    <div className="container px-5 py-24 mx-auto">
                        {/* First element */}
                        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="relative sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover">
                                <Image
                                    src="/images/order.jpg"
                                    layout="fill"
                                    className="rounded-full"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Start ordering</h2>
                                <p className="leading-relaxed text-base text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            </div>
                        </div>
                        {/* Second element */}
                        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Your food is on it way !</h2>
                                <p className="leading-relaxed text-base text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            </div>
                            <div className="relative sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 bg-cover">
                                <Image
                                    src="/images/deliver.jpg"
                                    layout="fill"
                                    className="rounded-full"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* Third element */}
                        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                            <div className="relative sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover">
                                <Image
                                    src="/images/eat.jpg"
                                    layout="fill"
                                    className="rounded-full"
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Enjoy your meal</h2>
                                <p className="leading-relaxed text-base text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lorem Ipsum</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                        </div>
                        <div className="flex flex-wrap justify-center -m-4 text-center">
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-main w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.3M</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-main w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.9M</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-main w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">300+</h2>
                                    <p className="leading-relaxed">Places</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Services;