import Image from 'next/image'
import React from 'react'
import topImg from "@/assets/images/home/home-hero-top.png";
import { useTranslations } from 'next-intl';

export default function HomeHeroSection() {
    const t = useTranslations();
    return (
        <section>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-4`}>
                {/* Left */}
                <div className='flex flex-col gap-2 items-center justify-center   px-2 md:px-4 lg:px-10 py-4  text-start  '>
                    <h5 className='tracking-wider w-full'>
                        {t("pages.home.hero.title")} <span className='text-primaryA1'>{t("common.octar")}</span> 
                    </h5>
                    <p className='font-normal text-base tracking-wider w-full'>{t("pages.home.hero.body")}</p>
                </div>
                <div className='flex items-center justify-center'>
                    <Image
                    src={topImg}
                    alt='Home Top Image'
                    className='max-w-[250px]'
                    width={1000}
                    height={1000}
                    />
                </div>
            </div>
        </section>
    )
}
