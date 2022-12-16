import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout