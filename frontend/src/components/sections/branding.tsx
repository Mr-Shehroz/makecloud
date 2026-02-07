import Link from 'next/link'
import React from 'react'

const Branding = () => {
  return (
    <section className='bg-white py-[1vh]'>
        <div className='max-w-[1490px] mx-auto px-4 xl:px-10 flex justify-between items-center'>
            <div className='flex justify-center items-center md:gap-3 gap-1.5'>
                <img src="/aws.png" alt="aws" className='xl:w-[69px] md:w-[50px] w-[35px] h-auto' />
                <img src="/baytech.png" alt="baytech" className='xl:w-[69px] md:w-[50px] w-[35px] h-auto' />
                <img src="/console.png" alt="console" className='xl:w-[69px] md:w-[50px] w-[35px] h-auto' />
            </div>
            <div className='flex items-center justify-center md:gap-3 gap-1.5'>
                <Link className='bg-[#E53023] xl:w-10 xl:h-10 md:w-8 md:h-8 w-6 h-6 rounded-full flex justify-center items-center' href="#">
                <img src="/twitter.svg" alt="twitter" className='xl:w-[19px] md:w-[15px] w-[12px] h-auto' />
                </Link>
                <Link className='bg-[#E53023] xl:w-10 xl:h-10 md:w-8 md:h-8 w-6 h-6 rounded-full flex justify-center items-center' href="#">
                <img src="/linkedin.svg" alt="linkedin" className='xl:w-[19px] md:w-[15px] w-[12px] h-auto' />
                </Link>
            </div>
        </div>
    </section>
  )
}
  
export default Branding