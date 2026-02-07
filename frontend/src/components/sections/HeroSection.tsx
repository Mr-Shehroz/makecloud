import React from 'react'
import { Button } from '../ui/button'

const HeroSection = () => {
    return (
        <section className='relative w-full hero md:h-[500px] h-[420px] my-[2.5vh] px-4 xl:px-10'>
            <div className='flex flex-col justify-center items-center h-full'>
                <div className='flex items-center justify-center xl:gap-11 gap-8'>
                    <img src="/hero-aws.png" alt="aws" className='2xl:w-[91px] xl:w-[75px] md:w-[65px] w-[55px] h-auto' />
                    <img src="/hero-baytech.png" alt="baytech" className='2xl:w-[62px] xl:w-[50px] md:w-[40px] w-[40px] h-auto' />
                    <img src="/hero-console.png" alt="console" className='2xl:w-[68px] xl:w-[62px] md:w-[50px] w-[40px] h-auto' />
                </div>
                <div className='md:w-[681px] md:mx-auto mt-[1.6vh]'>
                    <h1 className='font-archivo-black text-center 2xl:text-[77px] xl:text-[65px] lg:text-[56px] md:text-[48px] text-[36px] leading-[100%] font-normal uppercase text-white'>Expert Cloud Consultancy</h1>
                    <p className='font-roboto 2xl:text-[27px] xl:text-[24px] lg:text-[22px] md:text-[20px] text-[16px] text-center font-normal leading-[100%] mt-[1.5vh] text-white'>Innovation accelerated with cloud, DevOps & automation</p>
                    <div className='flex justify-center mt-[2.8vh]'>
                    <Button className='font-roboto font-bold xl:text-[18px] text-[16px] text-black hover:opacity-90 hover:bg-white  bg-white rounded-full xl:w-[154px] xl:h-[43px] px-6 py-3 flex justify-center items-center cursor-pointer'>Book A Call</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection          