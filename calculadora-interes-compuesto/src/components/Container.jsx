import React from 'react'

export default function Container({children}) {
  return (
    <section className='w-full lg:w-[740px] flex flex-col justify-center items-center mx-auto min-h-[100dvh]'>
        {children}
    </section>
  )
}
