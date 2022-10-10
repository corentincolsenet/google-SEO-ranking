import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            
            <main className="pt-[66px]">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default Layout