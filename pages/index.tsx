import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
    <NextSeo
      title="Xeofood | The first food delivery company in Xeozrodel"
      description="We offer the best food delivery in all Xeozrodel! 
      Get your best Xeozrodel food from neighbour restaurants right to your door. 
      Recommended at 97% by xeozrodadvisor and reviewed at 5/5 by 'xeozrodel fork', the prestigious newspaper."
    />
    <div className="flex h-screen items-center justify-center">
      <h1>Let&apos;s win this competition 😎 🎉</h1>
    </div>
    </>
  )
}

export default Home
