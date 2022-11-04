import React from 'react';
import Image from 'next/image';
import { IReview } from '../typings';

const Reviews = () => {
    const starNumbers: Array<number> = [1, 2, 3, 4, 5]
    const reviews: Array<IReview> = [
        {
            fullName: "Edgar Presleye",
            review: "Ghos ecrit la review ici",
            url: "/images/edgar-presleye.png",
            stars: 5
        },
        {
            fullName: "Zanna Woodrowe",
            review: "Ghos ecrit la review ici",
            url: "/images/zanna-woodrowe.png",
            stars: 5
        },
        {
            fullName: "Ainslee Radclyffee",
            review: "Ghos ecrit la review ici",
            url: "/images/ainslee-radclyffee.png",
            stars: 5
        },
        {
            fullName: "Kelton Blackmane",
            review: "Ghos ecrit la review ici",
            url: "/images/kelton-blackmane.png",
            stars: 5
        },
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="mb-20 text-3xl text-center font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl">
                    What our <span className="text-secondary">clients</span> are saying
                </h2>
                <div className="flex flex-wrap -m-4 justify-center items-start md:gap-y-10">
                    {reviews.map((review: IReview, index: number) => (
                        <div key={`review-${index}`} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="flex flex-col space-y-4 items-center justify-center h-full">
                                <div className="relative w-20 h-20 object-cover object-center rounded-full inline-block">
                                    <Image
                                        src={review.url}
                                        className='rounded-full'
                                        layout='fill'
                                        loading='lazy'
                                        alt={review.fullName}
                                    />
                                </div>
                                <div className="flex items-center">
                                    {starNumbers.map((number: number, index: number) => {
                                        if (number <= review.stars)
                                            return (
                                                <svg key={`star-${index}`} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            )
                                        else
                                            return (
                                                <svg key={`star-${index}`} aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            )
                                    })}
                                </div>
                                <p className="leading-relaxed">{review.review}</p>
                                <span className="inline-block h-1 w-10 rounded bg-tertiary mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{review.fullName}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews