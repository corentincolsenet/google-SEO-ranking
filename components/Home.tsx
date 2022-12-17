import Image from "next/image";
import Link from "next/link";
import { useLottie } from "lottie-react";

import * as scrollDownAnimation from "../public/lotties/scroll-down.json";

export default function Homepage() {
  const properties: React.CSSProperties = {
    backgroundImage: `url("/images/home-background.webp")`
  };

  const lottieOptions = {
    animationData: scrollDownAnimation,
    loop: true,
  };

  const { View } = useLottie(lottieOptions);

  return (
    <>
      <section className='relative bg-fixed bg-center bg-cover' style={properties}>
        {/* scroll down lottie */}
        <a href="#explanations" className='absolute left-1/2 bottom-0 w-44 h-44 transform -translate-x-1/2 cursor-pointer'>
          {View}
        </a>
        <div className='flex flex-col justify-center w-screen h-screen bg-black/50 px-8 py-12 md:py-20 flex-wrap items-center'>
          <div className='whitespace-pre-wrap max-w-xl xl:max-w-4xl'>
            <h1 className='text-4xl xl:text-6xl text-center text-white font-bold md:leading-relaxed break-words pb-3'>Get thy <span className='text-secondary'>FOOD</span> from everywhere in <span className='text-secondary'><strong>XEOZRODEL</strong></span></h1>
            <p className="text-center xl:text-2xl shadow-xl xl:pt-4 font-bold mx-0 mt-2 mb-0 leading-relaxed text-tertiary">
              Food from your favorite restaurants, delivered to your door.
              XeoFood is available across 95% of Xeozrodel ! We garuantee your delivery within 15 minutes.
            </p>
          </div>
        </div>
      </section>
      <section id="explanations" className='space-y-8 py-20 px-8 max-w-6xl mx-auto'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold my-6 mb-10">We offer the best food delivery in all <span className='text-secondary'><strong>Xeozrodel</strong></span> !</h2>
          <div className="container bg-gray-100 m-auto px-6 py-8 text-gray-600 md:px-12 xl:px-6 rounded-xl">
            <p className='text-center text-lg font-bold leading-relaxed'>
              But first of all, what is Xeozrodel ?
            </p>
            <p className='text-left pt-2 leading-relaxed'>
              Xeozrodel is a medieval fantasy world with various landscapes ranging from snowy mountains and azure oceans to shadowed canyons and huge deserts.
              The sun is illuminating this world with a red crimson sun and is primarily populated with humains, with smaller numbers of orcs, dwarves, elves and a few chimeras.
            </p>
            <p className='text-left pt-2 leading-relaxed'>
              Xeozrodel is full of cities and places steeped in history. You&apos;ll find huge castles like Diculson&apos;s Hold held by orcs, as well as small gnomes settlements such as Clebluff.
            </p>
            <p className='text-left pt-2 leading-relaxed'>
              Not to mention creative works such as painters, bards and different kind of art workers and performers. Xeozrodel is also full of different shops (such as Kjoarefell jewelers and forges), restaurants (you must try fish food from the Astral Port of Mostyw).
            </p>
          </div>
          <div className="container bg-gray-100 m-auto px-6 py-8 text-gray-600 md:px-12 xl:px-6 mt-8 md:mt-8 xl:mt-10 rounded-xl">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:h-7/12 lg:w-6/12">
                <p className='text-left'>
                  Pioneers in xeozrodel magical research, we invested in food delivery on magical broomsticks. Allowing every xeozrodians to get their best civet from neighbor restaurants right to their doors.
                </p>
                <p className='text-left mt-4'>
                  Recommended at 97% by xeozrodadvisor regarding food delivery and reviewed at 5/5 by &quot;xeozrodel fork&quot;, the prestigious newspaper.
                </p>
              </div>
              <div className="relative md:h-5/12 lg:w-5/12">
                <Image
                  className='rounded-3xl'
                  src="/images/home-broomstick.webp"
                  width={1152}
                  height={1024}
                  alt="wizzard on a broomstick delivering food in xeozrodel"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <h3 className='text-lg text-center py-4 mt-8'>
            Hale be thou and occasionally visit your local herald or contact us with this&nbsp;
              <Link href="/contact">
                <a className='text-secondary hover:underline hover:text-main transition-colors ease-in-out duration-300'>magic link</a>
              </Link>
            .
            <br />
            Our mystical food teleportation will soon be ready to deliver thy food even faster !
          </h3>
        </div>
      </section>
    </>
  )
} 