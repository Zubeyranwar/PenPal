import React from 'react'
import Navbar from './_components/navbar'

function MarketingLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='h-full dark:[#1F1F1F]'>
        <Navbar />
        <main>
            {children}
        </main>
    </div>
  )
}

export default MarketingLayout