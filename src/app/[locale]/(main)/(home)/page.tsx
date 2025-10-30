"use client";
import React from 'react'
import HomeHeroSection from './_sections/Hero';
import HomeCardsSection from './_sections/Cards';

export default function Home() {

  return (
    <div className='flex-grow px-4 relative'>
      <HomeHeroSection />
      <HomeCardsSection />
    </div>
  )
}

