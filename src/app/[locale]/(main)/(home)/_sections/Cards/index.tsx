import Image from 'next/image'
import React from 'react'
import schoolCardImg from "@/assets/images/home/home-school-card.png";
import octareduCardImg from "@/assets/images/home/home-octaredu-card.png";
import { useTranslations } from 'next-intl';


export default function HomeCardsSection() {
    const t = useTranslations("pages.home.cards");
  return (
    <section>
      <div className={`max-w-8xl mx-auto flex justify-center flex-wrap gap-12 p-4 md:px-6 md:py-2`}>
        <div>
            <Card 
            logo='/logo-pink.svg'
            img={octareduCardImg}
            title={t("home.title")}
            button={t("home.button")}
            type='octaredu'
            link='https://home.octargo.com/'
            />
        </div>
        <div>
            <Card 
            logo='/logo-blue.svg'
            img={schoolCardImg}
            title={t("school.title")}
            button={t("school.button")}
            type='school'
            link='https://school.octargo.com/en/home'
            />
        </div>
      </div>
    </section>
  )
}


const Card = ({
    logo,
    img,
    title,
    button,
    type,
    link
}:{
    logo:string;
    img:any;
    title:string;
    button:string;
    type:"school" | "octaredu";
    link:string;
})=>{
    return(
        <div className='w-fit h-full'>
            {/* Logo */}
            <div className='flex items-center justify-center -mb-5'>
                <Image 
                src={logo}
                alt='logo'
                width={100}
                height={100}
                className='w-12 h-auto object-contain'
                />
            </div>
            {/* Card */}
            <div className='p-10 shadow-xl border rounded-xl flex flex-col justify-center gap-4 items-center '>
                {/* Image */}
                <div>
                    <Image 
                    src={img}
                    alt={`${type} card image`}
                    width={400}
                    height={400}
                    quality={100}
                    className='w-[100px] h-auto object-contain'
                    />
                </div>
                {/* Card Title */}
                <p className='font-bold text-xl'>{title}</p>
                {/* Link */}
                <a href={link} target='_blank' className={`btn ${type === "school"?"btn-primary":"btn-secondary"} `}>{button}</a>
            </div>
        </div>
    )
}
