import React, { useState } from 'react'
import Image from 'next/image'

const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
    const handleMobileMenu = () => setOpenMobileMenu(!openMobileMenu)

    return (
        <header>
            <nav className="fixed top-0 inset-x-0 border-b-2 border-main">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
                    <div className="relative flex items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-expanded="false"
                                onClick={handleMobileMenu}
                            >
                            <span className="sr-only">Open main menu</span>
                            {!openMobileMenu &&
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            }
                            {openMobileMenu &&
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            }
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <div className='relative hidden h-12 w-52 lg:block'>
                                    <Image 
                                        src="/images/logo-xeofood-full.svg"
                                        layout="fill"
                                        loading="lazy"
                                        alt="xeofood logo full"
                                    />
                                </div>
                                <div className='relative block h-12 w-12 lg:hidden'>
                                    <Image 
                                        src="/images/logo-xeofood-small.svg"
                                        layout="fill"
                                        loading="lazy"
                                        alt="xeofood logo small"
                                    />
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 md:flex flex-col justify-center">
                                <div className="flex space-x-4">
                                    <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About us</a>
                                    <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Our work in Xeozrodel</a>
                                    <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reviews</a>
                                    <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                                    <a href="#" className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {openMobileMenu &&
                    <div className="md:hidden">
                        <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
                            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About us</a>
                            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Our work in Xeozrodel</a>
                            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
                            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a>
                            <a href="#" className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                        </div>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header