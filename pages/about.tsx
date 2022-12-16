import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Image from 'next/image';
import { useLottie } from "lottie-react";

import { ITeamMember } from '../typings';
import * as scrollDownAnimation from "../public/lotties/scroll-down.json";

const About_us: NextPage = () => {
  const properties: React.CSSProperties = {
    backgroundImage: `url("/images/about-xeofood.webp")`
  };

  const teamMembers: Array<ITeamMember> = [
    {
      fullName: "Ghoslain Duvigneau",
      position: "Cofounder & CEO",
      url: "/images/about-team-ghoslain-duvigneau.webp",
    },
    {
      fullName: "Corentin Colsenet",
      position: "Cofounder & CTO",
      url: "/images/about-team-corentin-colsenet.webp",
    },
    {
      fullName: "Léo Henneville",
      position: "Cofounder & COO",
      url: "/images/about-team-leo-henneville.webp",
    },
  ];

  const lottieOptions = {
    animationData: scrollDownAnimation,
    loop: true,
  };

  const { View } = useLottie(lottieOptions);

  return (
    <>
      <NextSeo
        title="Xeofood | About"
        description="This page introduce who we are and what is the relation between us and Xeozrodel"
      />
      <Layout>
        <section>
          <div className='relative bg-scroll bg-center bg-cover' style={properties}>
            {/* scroll down lottie */}
            <a href="#explanations" className='absolute left-1/2 bottom-0 w-44 h-44 transform -translate-x-1/2 cursor-pointer'>
              {View}
            </a>
            <div className='flex justify-center items-center w-screen h-screen bg-black/30'>
              <h1 className='text-white text-7xl md:text-9xl'><strong>Xeofood</strong></h1>
            </div>
          </div>
          <div id="explanations" className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="relative md:h-5/12 lg:w-5/12">
                  <Image
                    className="rounded-xl"
                    width={1024}
                    height={1024}
                    src="/images/about-broomstick-plan.webp"
                    alt="wizzard broomstick blueprint to deliver food in xeozrodel"
                    loading="lazy"
                  />
                </div>
                <div className="md:h-7/12 lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Xeofood technology at thy service</h2>
                  <p className="mt-6 text-gray-600">After 200 years of service, Xeofood offers the best delivery service in Xeozrodel thanks to magic and some ingeniousness.</p>
                  <p className="mt-6 text-gray-600">As a result of years of research and thanks to mages of The Mystical city of Orthond, we created magical broomsticks (Xeobroom 2000) that allows our employees to fly effortlessly as fast as a royal griffin. Those xeobrooms 2000 are a revolution in the means of transport in Xeozrodel, shortening long journeys such as from Barad Miranwe to The Hallowed city of Narakzar from a 2 months long to a 10 minutes broom trip.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 bg-gray-100">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:h-7/12 lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">From anywhere in Xeozrodel directly to you</h2>
                  <p className="mt-6 text-gray-600">The knowledge of the elves in the Abeth Forest near Laisy helped us building a magical bell, the Xeobell.</p>
                  <p className="mt-4 text-gray-600"> With thy bell you can ring any of our 15 000 workers all around Xeozrodel to take your order on any Xeozrodel restaurant or tavern and they will get it delivered to you within 15 minutes.</p>
                </div>
                <div className="relative md:h-5/12 lg:w-5/12">
                  <Image
                    className="rounded-xl"
                    width={1024}
                    height={1024}
                    src="/images/about-bell.webp"
                    alt="xeofood bell that you ring to pass thy order in xeozrodel"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-16 bg-gray-200">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="relative md:h-5/12 lg:w-5/12">
                  <Image
                    className="rounded-xl"
                    width={1024}
                    height={1024}
                    src="/images/about-metal-basket.webp"
                    alt="metal worker creating the best xeozrodel metal basket for xeofood"
                    loading="lazy"
                  />
                </div>
                <div className="md:h-7/12 lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Keeping the caudle hot</h2>
                  <p className="mt-6 text-gray-600">Working in conjunction with Kjoarefell metalworkers, we created the everburning Xeofood iron basket.</p>
                  <p className="mt-6 text-gray-600">This very special basket, pure product of the dwarven smithing knowledge. Can keep food warm and isolated for weeks from any source of heat, cold, any wind or pressure change and blocks even the most powerful magic spells thanks to its unobtamium alloy shell.</p>
                  <p className="mt-6 text-gray-600">Ensuring that you get your meal as you like it.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center container px-6 py-12 mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl">In us you can trust</h2>
            <div className="grid gap-y-8 gap-x-20 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {teamMembers.map((teamMember: ITeamMember, index: number) => (
                <div key={index} className="relative w-full max-w-xs text-center">
                  <div className="relative object-cover object-center w-48 h-48 mx-auto rounded-lg">
                    <Image
                      className="rounded-lg"
                      layout="fill"
                      src={teamMember.url}
                      alt={"Picture of "+teamMember.fullName}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700">{teamMember.fullName}</h3>
                    <span className="mt-1 font-medium text-gray-600">{teamMember.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About_us;