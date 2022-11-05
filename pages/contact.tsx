import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Confetti from 'react-confetti';

const ContactPage: NextPage = () => {
  const properties: React.CSSProperties = {
    backgroundImage: `url('/images/contact-background.png')`
  }

  const [animation, setAnimation] = useState<boolean>(false)
  const [windowSize, setWindowSize] = useState<{ width: number, height: number }>({ width: 0, height: 0 })

  const resizeWindow = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    resizeWindow();
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resizeWindow)

    return () => { window.removeEventListener('resize', resizeWindow) }
  }, [windowSize])

  useEffect(() => {
    if (animation === true) {
      setTimeout(() => {
        setAnimation(false)
      }, 10000)
    }
  }, [animation])

  const handleSubmit = () => setAnimation(true)

  return (
    <>
      <NextSeo
        title="Xeofood | About page"
        description="This page introduce who we are and what is the relation between us and Xeozrodel"
      />
      {animation && (
        <div className='fixed inset-0' style={{ zIndex: 9999 }}>
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
          />
        </div>
      )}
      <Layout>
        <section className="min-h-screen bg-cover" style={properties}>
          <div className="flex flex-col min-h-screen bg-black/60">
            <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
              <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                <div className="text-white lg:w-1/2 lg:mx-6">
                  <h1 className="text-3xl font-semibold capitalize lg:text-5xl">Ultimate design solution</h1>

                  <p className="max-w-xl mt-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quo
                    aliquid molestiae hic incidunt beatae placeat accusantium! Alias ex quisquam ab tempora. Ratione
                    autem doloremque ducimus numquam doloribus, error sed.
                  </p>

                  <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide bg-secondary text-white capitalize transition-colors duration-300 transform rounded-md hover:bg-tertiary focus:outline-none">
                    Send
                  </button>
                </div>

                <div className="mt-8 lg:w-1/2 lg:mx-6">
                  <div className="w-full px-8 py-10 mx-auto overflow-hidden backdrop-blur-md shadow-2xl border-[1px] rounded-xl lg:max-w-xl">
                    <h1 className="text-2xl font-medium text-white">Contact form</h1>

                    <p className="mt-4 text-white">
                      Ask us everything and we would love
                      to hear from you
                    </p>

                    <form className="mt-6">
                      <div className="flex-1">
                        <label htmlFor="fullName" className="block mb-2 text-sm text-white">Full Name</label>
                        <input id="fullName" type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                      </div>

                      <div className="flex-1 mt-6">
                        <label htmlFor="emailAddress" className="block mb-2 text-sm text-white">Email address</label>
                        <input id="emailAddress" type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none" />
                      </div>

                      <div className="w-full mt-6">
                        <label htmlFor="message" className="block mb-2 text-sm text-white">Message</label>
                        <textarea id="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:outline-none" placeholder="Message"></textarea>
                      </div>

                    </form>
                    <button
                      onClick={handleSubmit}
                      className="w-full px-6 py-3 mt-6 text-sm font-medium bg-secondary text-white capitalize transition-colors duration-300 transform rounded-md hover:bg-tertiary focus:outline-none"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default ContactPage