import React from 'react'

import Header from './Header'

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            
            <main className="pt-[66px]">
                {children}
            </main>

            {/* put footer component here */}
        </>
    )
}

export default Layout