import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='py-[2vh]'>
            <div className='flex justify-between items-center max-w-[1480px] mx-auto px-4 xl:px-10'>
                <nav className='flex items-center gap-12.5 links'>
                    <Link href="#">
                        Home
                    </Link>
                    <Link href="#">
                        Service
                    </Link>
                    <Link href="#">
                        Partner
                    </Link>
                    {/* <Link href="#">
                        Case Study
                    </Link>
                    <Link href="#">
                        Contact
                    </Link> */}
                </nav>
                <div className='flex items-center absolute left-1/2 -translate-x-[50%]'>
                    <Link href="/">
                        <Image src="/logo.svg" alt="logo" height={100} width={100} className='w-[292px] h-auto' />
                    </Link>
                </div>
                <div className='flex flex-col gap-0'>
                    <h5 className='links'>+91-234-567-8900</h5>
                    <h4 className='font-normal text-[20px] font-archivo-black text-white'>Free Consultant</h4>
                </div>
            </div>
        </header>
    )
}

export default Header