import React from 'react'

export default function Container({children}) {
  return (
    <section className='w-full lg:w-[740px] px-6 md:px-0 flex flex-col justify-center items-center mx-auto min-h-[100dvh]'>
        {children}
    </section>
  )
}
