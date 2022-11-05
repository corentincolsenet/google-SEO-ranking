export default function Homepage() {
  const properties: React.CSSProperties = {
    backgroundImage: `url("/images/home-bg.webp")`
  }

  return (
    <>
      <section className='flex flex-col justify-center w-full'>
        <div className='px-8 py-12 md:py-20 w-full flex flex-wrap items-center justify-center'>
          <div className='whitespace-pre-wrap max-w-xl'>
            <h1 className='text-4xl text-center font-bold md:leading-relaxed break-words pb-3'>Get thy <span className='text-secondary'>FOOD</span> from everywhere in <span className='text-secondary'><strong>XEOZRODEL</strong></span></h1>
            <p className="text-center font-bold mx-0 mt-2 mb-0 leading-relaxed text-tertiary">
              Food from your favorite restaurants, delivered to your door
            </p>
          </div>
        </div>
      </section>
      <section className="bg-fixed bg-center bg-cover" style={properties}>
        <div className="flex flex-col w-full h-[550px] justify-center items-center bg-black/40">
          <h2 className="text-white text-center text-3xl font-semibold mt-20 mb-10 mx-5">
            Looking for some pandemain ?
          </h2>
          <p className='text-white text-center justify-center text-lg font-medium mx-5'>XeoFood is available across 95% of Xeozrodel ! We garuantee your delivery within 15 minutes.</p>
        </div>
      </section>
      <section className='space-y-8 py-20 px-8 max-w-6xl mx-auto'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-semibold my-6 mb-10">We offer the best food delivery in all <span className='text-secondary'><strong>Xeozrodel</strong></span> !</h2>
          <div className="container bg-gray-100 m-auto px-6 py-8 text-gray-600 md:px-12 xl:px-6 rounded-xl">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:h-7/12 lg:w-6/12">
                <p className='text-left'>
                  Pioneers in xeozrodel magical research, we invested in food delivery on magical broomsticks. Allowing every xeozrodians to get their best civet from neighbor restaurants right to their doors.
                </p>
                <p className='text-left mt-4'>
                  Recommended at 97% by xeozrodadvisor regarding food delivery and reviewed at 5/5 by &quot;xeozrodel fork&quot;, the prestigious newspaper.
                </p>
              </div>
              <div className="md:h-5/12 lg:w-5/12">
                <img className='rounded-3xl' src="/images/home-broomstick.png" alt="wizzard on a broomstick delivering food in xeozrodel" loading="lazy" width="" height="" />
              </div>
            </div>
          </div>
          <h3 className='text-lg text-center py-4 mt-8'>
            Hale be thou and occasionally visit your local herald.
            <br />
            Our mystical food teleportation will soon be ready to deliver thy food even faster !
          </h3>
        </div>
      </section>
    </>
  )
}