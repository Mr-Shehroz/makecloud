import Image from 'next/image'
import React from 'react'

const FeaturesSection = () => {
    return (
        <section className='bg-[#F7F9FC] md:h-[650px]'>
            <div className='max-w-[1480px] mx-auto px-4 xl:px-10 md:pt-[10.5vh] py-[6vh] md:pb-0'>
                <div>
                    <h2 className='font-normal font-archivo-black w-full'>Why Choose MakeCloud</h2>
                </div>
                <div className='mt-[4.4vh] flex md:flex-row flex-col justify-center items-start'>
                    <div className='flex flex-col gap-6 md:w-[33%] w-full'>
                        <div className='flex lg:gap-4.5 md:gap-2 gap-3'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='2xl:min-w-[30px] min-w-[20px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>Architecture-first methodology</h4>
                                <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>We design systems for long-term reliability, scalability, and maintainability, reducing operational risks and future rework.</p>
                            </div>
                        </div>
                        <div className='flex lg:gap-4.5 md:gap-2 gap-3'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='2xl:min-w-[30px] min-w-[25px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>Security and compliance from day one </h4>
                                <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>IAM, encryption, monitoring, and governance are implemented early to keep your cloud environment secure and audit-ready.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:w-[33%] w-full mt-[2.5vh] md:mt-0'>
                        <div className='flex lg:gap-4.5 md:gap-2 gap-3'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='2xl:min-w-[30px] min-w-[25px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>Cost clarity through FinOps</h4>
                                <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>We apply FinOps frameworks to improve cost transparency, predict consumption, and optimize long-term cloud spending.</p>
                            </div>
                        </div>
                        <div className='flex lg:gap-4.5 md:gap-2 gap-3'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='2xl:min-w-[30px] xl:max-w-[40px] lg:max-w-[30px] max-w-[40px] min-w-[25px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>Full lifecycle cloud consulting services</h4>
                                <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>We guide your transformation from cloud assessment to design, strategy, and support.”</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 md:w-[33%] w-full'>
                        <div className='flex lg:gap-4.5 md:gap-2 gap-3'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='2xl:min-w-[30px] min-w-[25px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>Automation as a core principle</h4>
                                <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>Infrastructure as Code, CI/CD, and observability reduce manual effort, increase consistency, and support faster delivery cycles.</p>
                            </div>
                        </div>
                        <div className='flex lg:gap-4.5 md:gap-2 gap-3'>
                            <div>
                                <Image src="/tick.svg" height={100} width={100} alt='tick-mark' className='2xl:min-w-[30px] min-w-[25px] h-auto' />
                            </div>
                            <div>
                                <h4 className='font-normal font-archivo-black 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-[16px] leading-[100%] uppercase text-black'>Long-term operational support</h4>
                                <p className='font-medium font-dm-sans 2xl:text-[18px] lg:text-[15px] text-[14px] 2xl:leading-[28.8px] text-[#333E49] xl:mt-[2.3vh] mt-[1.5vh]'>We remain involved after planning — supporting implementation, optimization, and continuous improvement as your cloud needs evolve.</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection