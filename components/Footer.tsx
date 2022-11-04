import React, {} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="relative bg-slate-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="flex flex-col-reverse w-full px-4 lg:w-6/12 lg:flex-col">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <a className='relative h-14 w-60 mt-2 lg:mb-4 lg:h-16 lg:w-80'>
                    <Image 
                        src="/images/logo-xeofood-full.svg"
                        layout="fill"
                        loading="lazy"
                        alt="xeofood logo full footer"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <h4 className="text-xl lg:text-2xl fonat-semibold text-slate-700">Xeofood will be glad to help you out !</h4>
                <h5 className="text-md mt-2 mb-2 text-slate-600">
                  Find our local herald point in every main city of your county.
                </h5>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-0 pt-8 lg:px-4 lg:pt-0">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about"><a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">About</a></Link>
                    </li>
                    <li>
                      <Link href="/"><a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">Reviews</a></Link>
                    </li>
                    <li>
                      <Link href="/blog"><a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">Blog</a></Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 pt-6 lg:pt-0">
                  <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/"><a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">License</a></Link>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <Link href="/"><a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">Contact Us</a></Link>
                    </li>
                    <li>
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm" href="https://github.com/corentincolsenet/google-SEO-ranking">Github</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-slate-400 font-semibold py-1">
                Copyright © <span id="get-current-year">2022 - Xeofood</span>
                <div className="text-sm text-slate-400 font-semibold py-1">
                  Website made by
                  <a href="https://www.linkedin.com/in/corentin-colsenet/" className="text-slate-500 hover:text-slate-800"> Corentin Colsenet</a>, 
                  <a href="https://www.linkedin.com/in/ghoslain-duvigneau-09b975168/" className="text-slate-500 hover:text-slate-800"> Ghoslain Duvigneau</a>,
                  <a href="https://www.linkedin.com/in/leohenneville/" className="text-slate-500 hover:text-slate-800"> Léo Henneville</a>.
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer