import Image from 'next/image'
import React from 'react'
import zeeImg from "@/assets/points/coins.png"
import jokerImg from "@/assets/home/home-joker-coins.png"
import pointsImg from "@/assets/points/points.png"
import useProfilePoints from '@/lib/tanstack/Profile/usePoints'
import { useSelector } from 'react-redux'
import ErrorBoundary from '@/hooks/ErrorBoundary'


export default function PointsSection({className=""}:{className?:string}) {
    const isLogged = useSelector((state:any)=>state.user.user);
    const {data,...methods} = useProfilePoints({user:isLogged});
    const response = data?.data?.data || {};
    
  return (
    <ErrorBoundary {...methods}>
        <div className={`bg-black/50 px-4 py-2 grid grid-cols-3 gap-4 rounded-lg font-bold text-neutral10  ${className}`}>
            {/* coins */}
            <div className='flex items-center gap-2'>
                <div className='flex-shrink-0'>
                    <Image 
                    src={zeeImg}
                    alt='Zee Coin Image'
                    width={200}
                    height={205}
                    className='w-[20px] h-auto'
                    />
                </div>
                <div>{response?.zee_coins}</div>
            </div>
            {/* Joker */}
            <div className='flex items-center gap-2'>
                <div className='flex-shrink-0'>
                    <Image 
                    src={jokerImg}
                    alt='Joker Image'
                    width={70}
                    height={140}
                    className='w-[35px] h-auto object-contain'
                    unoptimized
                    />
                </div>
                <div>{response?.joker}</div>
            </div>
            {/* Points */}
            <div className='flex items-center gap-2'>
                <div className='flex-shrink-0'>
                    <Image 
                    src={pointsImg}
                    alt='Points Image'
                    width={200}
                    height={205}
                    className='w-[20px] h-auto'
                    />
                </div>
                <div>{response?.points}</div>
            </div>
            
        </div>
    </ErrorBoundary>
  )
}
