import Image from 'next/image'
import React from 'react'
import schoolCardImg from "@/assets/images/home/home-school-card.png";
import octareduCardImg from "@/assets/images/home/home-octaredu-card.png";


export default function HomeCardsSection() {
  return (
    <section>
      <div className={`max-w-6xl mx-auto flex justify-center flex-wrap gap-8 p-4 md:p-10`}>
        <div>
            <Card 
            logo='/logo-pink.svg'
            img={octareduCardImg}
            title='OCTAR for Home'
            button='Start learning at home now'
            type='octaredu'
            link='https://octaredu.com/en/home/'
            />
        </div>
        <div>
            <Card 
            logo='/logo-blue.svg'
            img={schoolCardImg}
            title='OCTAR for Schools'
            button='Register for schools now'
            type='school'
            link='https://school.octaredu.com/en/home'
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
                    className='w-[200px] h-auto object-contain'
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