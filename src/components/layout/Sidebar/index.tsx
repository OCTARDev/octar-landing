"use client";
import React from 'react';
import styles from "../styles.module.css";
import Link  from 'next/link';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

type Props = {
    isOpen: boolean;
    toggleMenu: ()=>void;
}

export default function Sidebar({isOpen,toggleMenu}:Props) {
    const t = useTranslations("components.layout.sidebar");

  return (
    <aside className={`${styles.sidebar}  ${isOpen?`${styles.expanded}`:""} flex flex-col gap-2 overflow-x-hidden`}>
        <div className='flex justify-between items-center gap-3 px-8 pt-3 fs-4 fw-bold '> 
            <Link className='flex gap-3 items-center text-primaryRed w' href={"/"}>
                <Image 
                src="/logo-blue.svg" 
                priority 
                height={1000} 
                width={1000} 
                quality={100} 
                className='w-12 h-auto' 
                alt='logo'
                />
                <span className='font-bold  text-lg text-primaryA1'>OCTAR Education</span>
            </Link>
            <span className='cursor-pointer  text-primaryA1 hover:text-secondaryA1  rounded-full' onClick={toggleMenu}>
                < RiArrowGoBackFill size={28}/>
            </span>
        </div>
        <hr className='border-2 mb-4 mt-2'/>

        {/* <hr className='border-2'/> */}
        <div className='flex flex-col gap-1 px-10 flex-grow'>
            {/* Middle */}
            <div className='flex flex-col gap-8'>

            </div>
            <hr className='border-2 -mx-10 mb-5 mt-auto'/>
            {/* Bottom */}
            <div className='pb-5 flex flex-col gap-4 items-start'>
                <div className='flex items-center gap-2 text-primaryA1 font-bold text-sm'>
                    <span><FaPhone className='rotate-90' size={18}/></span>
                    <span>01000000</span>
                </div>
                <div className='flex items-center gap-2 text-primaryA1 font-bold text-sm'>
                    <span><IoMdMail className='' size={18}/></span>
                    <span>info@email.com</span>
                </div>
                <LanguageSwitcher 
                className='!flex-grow-0'
                isUp={true}
                /> 
            </div>
        </div>


    </aside>
  )
}
