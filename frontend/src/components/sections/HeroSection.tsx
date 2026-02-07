import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
    return (
        <section className='relative w-full hero h-[500px] my-[2.5vh]'>
            <div className='flex flex-col justify-center items-center h-full'>
                <div className='flex items-center justify-center gap-11'>
                    <img src="/hero-aws.png" alt="aws" className='w-[91px] h-auto' />
                    <img src="/hero-baytech.png" alt="baytech" className='w-[62px] h-auto' />
                    <img src="/hero-console.png" alt="console" className='w-[68px] h-auto' />
                </div>
                <div className='w-[681px] mx-auto mt-[1.6vh]'>
                    <h1 className='font-archivo-black text-[77px] leading-[100%] font-normal uppercase text-white'>Expert Cloud Consultancy</h1>
                    <p className='font-roboto text-[27px] font-normal leading-[100%] mt-[1.5vh] text-white'>Innovation accelerated with cloud, DevOps & automation</p>
                    <div className='flex justify-center mt-[2.8vh]'>
                    <Button className='font-roboto font-bold text-[18px] text-black hover:opacity-90 hover:bg-white  bg-white rounded-full w-[154px] h-[43px] flex justify-center items-center cursor-pointer'>Book A Call</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection          