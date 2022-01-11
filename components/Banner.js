import React from 'react'
import Link from 'next/link';
import { useEffect } from 'react';
import BackgroundAnimation from './ReactBackground'
import Image from 'next/image';
import me from './assets/me.png'

const Banner = () => {

    return (
        <div className='flex bg-slate-900 h-screen w-full' id='headerNav'>
            <div className='w-1/2 mt-20'>
            <h1>Mohammad Abdul Ghafour</h1>
                <h3>Computers Eng / Web Dev</h3>
                <div className='w-96 ml-40'>
                <Image src={me} alt="Mohammad Abdul Ghafour"/>
                </div>
                <div id="Me">
                    <img src="" alt="" />
                </div>

            </div>
            <div className='w-1/2'>
                
                <BackgroundAnimation />
            </div>
        </div>
    )
}

export default Banner
