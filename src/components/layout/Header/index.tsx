"use client";
import { useState } from 'react'
import styles from "../styles.module.css";
import { FaBars, FaPhone, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Link  from 'next/link';
import Sidebar from '../Sidebar';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import {useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { logOut } from '@/redux/slices/user';
import { motion } from 'framer-motion';
import Dropdown from '@/components/ui/Dropdown';
import { IoMdLogOut, IoMdMail } from 'react-icons/io';
import ErrorBoundary from '@/hooks/ErrorBoundary';

export default function Header() {

  

  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const t = useTranslations("components.layout.header");
  

  
  return (
    <motion.header 
    animate={{ opacity: 1 , y: 0}}
    initial={{ opacity: 0 , y:"-100vh"}}
    transition={{ duration: 1 }}
    className='capitalize bg-[#F5F5F5]'>
      <div className={`${styles.fullscreen} ${!isOpen?"hidden":""} `} onClick={toggleMenu}></div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>      
      <nav className={`${styles.navbar} `}>
        {/* Left */}
        <div className='flex items-center justify-between lg:flex-grow-0 flex-grow'>
          <Link className='flex gap-3 items-center text-primaryRed' href={`/`}>
              <Image src="/logo-blue.svg" className='w-12 h-auto' alt='logo' priority width={1000} height={1000}/>
              <span className='font-bold'>OCTAR Education</span>
          </Link>

        </div>
        {/* Middle */}
        <div className='items-center gap-6 hidden lg:flex'>
          <div className='flex items-center gap-2 text-primaryA1 font-bold text-sm'>
            <span><FaPhone className='rotate-90' size={18}/></span>
            <span>01000000</span>
          </div>
          <div className='flex items-center gap-2 text-primaryA1 font-bold text-sm'>
            <span><IoMdMail className='' size={18}/></span>
            <span>info@email.com</span>
          </div>
          
        </div>
        {/* Right */}
        <div className='flex gap-1 sm:gap-6 items-center justify-between capitalize py-2'>  

          <LanguageSwitcher 
          className='hidden lg:flex'
          />
          
        
        <button onClick={toggleMenu} className="lg:hidden text-primaryRed">
          <FaBars size={20} />
        </button>
        </div>
      </nav>
        
    </motion.header>
  )
}
