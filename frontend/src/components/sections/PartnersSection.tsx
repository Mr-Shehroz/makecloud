import Image from 'next/image'
import React from 'react'

const PartnersSection = () => {
    return (
        <section className='bg-[#F7F9FC] lg:h-[617px] px-4 xl:px-10'>
            <div className='max-w-[1480px] mx-auto lg:pt-[12vh] lg:pb-[13vh] md:py-[10vh] py-[8vh]'>
                <div className='md:w-[633px] md:mx-auto'>
                    <h2 className='font-normal font-archivo-black text-center'>Multi Cloud Certified Strategic Partners</h2>
                </div>
                <div className='lg:flex lg:justify-center lg:items-center grid md:grid-cols-2 xl:gap-6 md:gap-4 gap-0 mt-[4.5vh]'>
                    <div className='lg:w-[452px] h-[247px] bg-[url(/partners-bg.png)] xl:bg-cover bg-contain bg-no-repeat bg-center rounded-[30px] relative'>
                        <div className='2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 lg:w-10 lg:h-10 w-12 h-12 rounded-full absolute xl:right-0 xl:top-0 right-[2%] lg:top-[16%] top-[12%] flex justify-center items-center bg-[#E53023] transition-all duration-300'><img src="/aws-logo.svg" alt="aws" className='2xl:w-[45px] xl:w-[38px] w-[30px] h-auto' /></div>
                        <Image src="/partners-aws.svg" alt="aws" width={100} height={100} className='2xl:w-[244px] xl:w-[200px] w-[150px] h-auto ml-[4.2vh] mt-[3.7vh] xl:pt-0 pt-5' />
                        <div className='border border-[#EDEDF1] w-[73%] xl:my-[3vh] my-[1vh]' />
                        <p className='font-roboto font-normal 2xl:text-[18px] text-[16px] leading-[100%] text-black xl:pl-8 xl:pr-0 pl-5 pr-4'>As official Amazon Web Services (AWS) Partners MakeCloud cover all aspects of deploying and operating business- critical application on AWS.</p>
                    </div>
                    <div className='lg:w-[452px] h-[247px] bg-[url(/partners-bg.png)] xl:bg-cover bg-contain bg-no-repeat bg-center rounded-[30px] relative'>
                        <div className='2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 lg:w-10 lg:h-10 w-12 h-12 rounded-full absolute xl:right-0 xl:top-0 right-[2%] lg:top-[16%] top-[12%] flex justify-center items-center bg-[#E53023] transition-all duration-300'><img src="/azure-logo.svg" alt="azure" className='2xl:w-[35px] xl:w-[28px] w-[22px] h-auto' /></div>
                        <Image src="/partners-azure.svg" alt="azure" width={100} height={100} className='2xl:w-[316px] xl:w-[270px] w-[200px] h-auto ml-[4.2vh] mt-[4vh] xl:pt-0 pt-5' />
                        <div className='border border-[#EDEDF1] w-[73%] xl:mb-[3vh] xl:mt-[4vh] mb-[1vh] mt-[1.8vh]' />
                        <p className='font-roboto font-normal 2xl:text-[18px] text-[16px] leading-[100%] text-black xl:pl-8 xl:pr-0 pl-5 pr-4'>MakeCloud have extensive experience in helping businesses deploy, scale and manage their applications on Google Cloud.</p>
                    </div>
                    <div className='lg:w-[452px] h-[247px] bg-[url(/partners-bg.png)] xl:bg-cover bg-contain bg-no-repeat bg-center rounded-[30px] relative lg:mt-0 md:mt-[-4vh]'>
                        <div className='2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 lg:w-10 lg:h-10 w-12 h-12 rounded-full absolute xl:right-0 xl:top-0 right-[2%] lg:top-[16%] top-[12%] flex justify-center items-center bg-[#E53023] transition-all duration-300'><img src="/cloud-logo.svg" alt="cloud" className='2xl:w-[41px] xl:w-[35px] w-[30px] h-auto' /></div>
                        <Image src="/partners-console.svg" alt="console" width={100} height={100} className='2xl:w-[232px] xl:w-[180px] w-[140px] h-auto ml-[4.2vh] mt-[3.7vh] xl:pt-0 pt-5' />
                        <div className='border border-[#EDEDF1] w-[73%] xl:my-[3vh] my-[1vh]' />
                        <p className='font-roboto font-normal 2xl:text-[18px] text-[16px] leading-[100%] text-black xl:pl-8 xl:pr-0 pl-5 pr-4'>Our Microsoft Azure consultancy services help businesses and IT teams seamlessly migrate, optimise, and innovate in the cloud.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PartnersSection