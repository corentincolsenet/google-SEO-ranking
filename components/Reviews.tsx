import React from 'react';
import Image from 'next/image';
import { IReview } from '../typings';

const Reviews = () => {
  const starNumbers: Array<number> = [1, 2, 3, 4, 5]
  const reviews: Array<IReview> = [
    {
      fullName: "Edgar Presleye",
      review: "Every day I get my hot caudle and horse bread through Xeofood from Weeminster. I do really enjoy it, I order when waking up, I have a little time to put my sanap on the table and the luncheon arrives right at door.",
      url: "/images/reviews-person-edgar-presleye.webp",
      stars: 5
    },
    {
      fullName: "Zanna Woodrowe",
      review: "As a woman from Beeham, it is a hard task to get food from neighbors cities such as Ningalum or Chidon due to some tensions between the cities. Xeofood always helped me to get my meal on time and still hot as if it just left any Xeozrodel cook's hands.",
      url: "/images/reviews-person-zanna-woodrowe.webp",
      stars: 5
    },
    {
      fullName: "Ainslee Radclyffee",
      review: "It's often hard to know where and what new dishes to try out. Luckily, Xeofood's workers often know a broad range of local products from every place in Xeozrodel, helping you on thy choice.",
      url: "/images/reviews-person-ainslee-radclyffee.webp",
      stars: 5
    },
    {
      fullName: "Kelton Blackmane",
      review: "I'm from Laisy and it's been years that I wanted to try a Shundinar's manchet, some special bread from North-East of Xeozrodel, which is way too far and too dangerous for an elf like me. And thanks to Xeofood I could finally give a try at this masterpiece !",
      url: "/images/reviews-person-kelton-blackmane.webp",
      stars: 5
    },
  ]

  return (
    <section className="text-gray-600 body-font mt-[66px]">
      <div className="container px-8 py-12 md:py-16 mx-auto">
        <h2 className="mb-20 text-3xl text-center font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl">
          What our <span className="text-secondary">customers</span> are saying
        </h2>
        <div className="flex flex-wrap -m-4 justify-center items-start md:gap-y-10">
          {reviews.map((review: IReview, index: number) => (
            <div key={`review-${index}`} className="lg:w-1/3 lg:mb-0 mb-6 p-6">
              <div className="flex flex-col space-y-4 items-center justify-center h-full">
                <div className="relative w-20 h-20 object-cover object-center rounded-full inline-block">
                  <Image
                    src={review.url}
                    className='rounded-full'
                    layout='fill'
                    loading='lazy'
                    alt={"Picture of "+review.fullName}
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
                <p className="leading-relaxed text-base text-justify">{review.review}</p>
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