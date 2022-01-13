import React from 'react'
import Link from 'next/link';
import { useEffect } from 'react';
import BackgroundAnimation from './ReactBackground'
import Image from 'next/image';
import me from './assets/me.png'

const Banner = () => {

    return (
        <div className='flex bg-slate-900 w-full' id='headerNav'>
            <div className='w-1/2 mt-20'>
                <div className='text-right'>
                    <h1 className='text-white'>Mohammad Abdul Ghafour</h1>
                    <h3 className='text-rose-600'>Computers Eng / Web Dev</h3>
                </div>
                <div className='w-1/2 h-full'>
                    <Image src={me} alt="Mohammad Abdul Ghafour" />
                </div>

            </div>
            <div className='w-1/2'>
                <BackgroundAnimation />
            </div>
        </div>
    )
}

export default Banner
