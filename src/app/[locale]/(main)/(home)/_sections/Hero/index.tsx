import Image from 'next/image'
import React from 'react'
import topImg from "@/assets/images/home/home-hero-top.png";

export default function HomeHeroSection() {
    return (
        <section>
            <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-10`}>
                {/* Left */}
                <div className='flex flex-col gap-10 items-center justify-center   px-2 md:px-4 lg:px-10 py-4  text-start  '>
                    <h2 className='tracking-wider'>
                        The Future of Augmented Reality Learning with <span className='text-primaryA1'>OCTAR</span> 
                    </h2>
                    <p className='font-normal text-base tracking-wider'>Discover a new world of interactive learning with the OCTAR AR app - where imagination meets technology.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image
                    src={topImg}
                    alt='Home Top Image'
                    className='max-w-[350px]'
                    width={1000}
                    height={1000}
                    />
                </div>
            </div>
        </section>
    )
}
