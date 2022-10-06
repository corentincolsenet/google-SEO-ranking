import React from 'react'

import Header from './Header'

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            
            <main>
                {children}
            </main>

            {/* put footer component here */}
        </>
    )
}

export default Layout