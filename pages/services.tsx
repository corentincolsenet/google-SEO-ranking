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
        {/* Title */}
        <section className='flex flex-col justify-center w-full'>
          <div className='px-8 py-12 md:py-16 w-full flex flex-wrap items-center justify-center'>
            <div className='whitespace-pre-wrap max-w-xl-3xl'>
              <h1 className='text-4xl text-center font-bold md:leading-relaxed break-words'><span className='text-secondary'>Xeofood</span> delivery process in <span className='text-secondary'><strong>Xeozrodel</strong></span></h1>
            </div>
          </div>
        </section>
        <section className="body-font">
          <p className='container max-w-4xl mx-auto md:leading-relaxed break-words px-5 text-justify sm:text-center'>
            We believe that every person should get the right to have a decent meal, even on the top of the grey wall mountains.
            That&apos;s why we created Xeofood. Our DNA resides in the quality of the products delivered and the proximity with local merchants.
            In such a magnificient world, It would be a shame not to take advantage of it.
            With the upcoming world cup, taking place in 2030 in Xeozrodel, we want to promote the best food in xeozrodel to the supporters from around the world.
          </p>
          <p className="text-3xl text-center font-bold mt-16 leading-relaxed">
            How it&apos;s working ?
          </p>
          <div className="container px-5 py-14 mx-auto">
            {/* First element */}
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="relative sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover">
                <Image
                  src="/images/services-bell-ring.webp"
                  layout="fill"
                  className="rounded-full"
                  loading="lazy"
                  alt="A person ringing a bell to order his food through xeofood in Xeozrodel."
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Start ordering</h2>
                <p className="leading-relaxed text-base text-justify">To start an order, you first have to get a Xeobell at our local shop. Every city except Wyeham and those who are in war have a local Xeozrodel shop oppened from the dawn to the eve.</p>
                <p className="leading-relaxed text-base text-justify mt-2">Then you just have to put up the Xeobell and ring it, a Xeofood worker should arrive in less than 2 mere minutes to take your order.</p>
              </div>
            </div>
            {/* Second element */}
            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Your food is on it way !</h2>
                <p className="leading-relaxed text-base text-justify">After placing your order, if the restaurant is available and not in a war zone or too dangerous city (see the map below), our Xeoworker will begin its journey to the restaurant with our Xeonimbus 2000 to bring you back thy meal in no time.</p>
              </div>
              <div className="relative sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover">
                <Image
                  src="/images/services-delivery.webp"
                  layout="fill"
                  className="rounded-full"
                  loading="lazy"
                  alt="A Xeofood delivery worker getting some customer his Xeozrodel food delivered."
                />
              </div>
            </div>
            {/* Third element */}
            <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div className="relative sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0 bg-cover">
                <Image
                  src="/images/services-food-basket.webp"
                  layout="fill"
                  className="rounded-full"
                  loading="lazy"
                  alt="The food basket from a Xeozrodel restaurant that Xeofood delivered."
                />
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Enjoy your meal</h2>
                <p className="leading-relaxed text-base text-justify">The Xeofood delivery is now completed and you have your fresh and hot feast right before your eyes. It is already time to enjoy your meal from your favorite Xeozrodel restaurant !</p>
              </div>
            </div>
          </div>
        </section>
        <section className="body-font bg-gray-100">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Key figures on Xeofood</h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Through 200 years of experience, Xeofood is your best ally on quickly getting your favorite Xeozrodel supper.
                We have thousands of shop partners across the country ready to serve you.
              </p>
            </div>
            <div className="flex flex-wrap justify-center -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg bg-main">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">3.8M</h2>
                  <p className="leading-relaxed text-white">Orders passed</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg bg-main">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">198K</h2>
                  <p className="leading-relaxed text-white">Regular Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="px-4 py-6 rounded-lg bg-main">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-white w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-white">95%</h2>
                  <p className="leading-relaxed text-white">Xeozrodel</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="body-font">
          <div className="flex flex-col items-center w-full mb-20 py-16">
            <h2 className="sm:text-3xl font-medium title-font mb-4 text-gray-900">Xeozrodel coverage</h2>
            <div className="relative h-[300px] w-[400px] md:h-[500px] md:w-[900px] flex-shrink-0 bg-cover">
                <Image
                  src="/images/services-coverage-xeozrodel-map.webp"
                  layout="fill"
                  className="image"
                  loading="lazy"
                  alt="A Xeozrodel map showing which parts are not covered by Xeofood delivery."
                />
              </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Services;