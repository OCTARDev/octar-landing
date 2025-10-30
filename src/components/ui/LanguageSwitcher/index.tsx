"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { GrLanguage } from "react-icons/gr";
import { FaChevronDown , FaCheck} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";

const LanguageSwitcher = ({isUp=false,className=""}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams(); // Add this hook
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Language display mapping
  const languageMap = {
    en: { name: "English", nativeName: "English", flag: "/layout/uk-flag.webp" },
    ar: { name: "Arabic", nativeName: "العربية", flag: "/layout/sa-flag.webp" }
  };



  const changeLanguage = (newLocale:string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;
    
    // Preserve search parameters
    const searchString = searchParams.toString();
    const fullPath = searchString ? `${newPath}?${searchString}` : newPath;
    
    router.replace(fullPath);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event:any) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const currentLanguage = languageMap[currentLocale as keyof typeof languageMap];

  return (
    <motion.div 
    whileHover={{scale:1.02}}

    className={`relative flex-grow z-50 ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
        w-full flex items-center justify-between gap-2 px-3 py-2 bg-white
        border border-gray-200  rounded-lg shadow-sm hover:shadow-md
        transition-all duration-200 hover:border-gray-300  focus:outline-none focus:ring-2
        focus:ring-blue-500 focus:border-transparent
        `}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <div className="flex items-center gap-2">
          <span className="flex-shrink-0 ">
            <Image 
            width={1000}
            height={1000}
            src={currentLanguage?.flag}
            alt={currentLanguage?.name || "Language"}
            className="w-8 rounded-sm object-cover"
            />
          </span>
          <span className="font-bold tracking-wider text-base text-primaryA1">
            {currentLanguage?.name}
          </span>
        </div>
      </button>
      <AnimatePresence>
      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div 
        exit={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        className={`
          ${isUp ? "bottom-full mb-1":"top-full mt-1"}
          absolute   start-0  min-w-32 bg-neutral10
          border border-primaryA1  
         rounded-lg shadow-lg z-50 `}>
          {routing.locales.map((locale) => {
            const language = languageMap[locale];
            const isSelected = locale === currentLocale;
            
            return (
              <button
                key={locale}
                onClick={() => changeLanguage(locale)}
                className={`
                   flex items-center justify-between px-4 py-3 w-full 
                  text-left hover:bg-indigo-700 hover:text-gray-200 rounded-lg
                  transition-colors duration-150 font-medium ${
                  isSelected 
                    ? "bg-blue-50 text-primaryA1 " 
                    : "text-black"
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <span className="flex-shrink-0">
                    <Image 
                    width={2000}
                    height={1500}
                    src={language?.flag}
                    alt={language?.name || "Language"}
                    quality={100}
                    className="w-8  rounded-sm object-cover"
                    />
                  </span>
                  <span>
                    {language?.nativeName}
                  </span>
                </div>
              </button>
            );
          })}
        </motion.div>
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcher;


