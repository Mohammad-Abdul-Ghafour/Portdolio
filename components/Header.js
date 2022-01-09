import React from 'react'
import Link from 'next/link';
import { useEffect } from 'react';
import BackgroundAnimation from './ReactBackground'
import Image from 'next/image';
import me from './assets/me.png'

const Header = () => {
    useEffect(() => {
        return () => {
            {window.addEventListener("scroll",function(){
                const header = document.getElementById('headerNav');
                header.classList.toggle('sticky',window.scrollY > 0)
            })}
        }
    }, [])
    return (
        <div className='flex bg-slate-900 h-screen w-full' id='headerNav'>
            <div className='w-1/2'> 
                <Image src={me} alt="Mohammad Abdul Ghafour" width={"200"} height={"250"}/>
                <div id="Me">
                <img src="" alt="" />
                <h1>Mohammad Abdul Ghafour</h1>
                <h3>Computers Eng / Web Dev</h3>
                </div>
                <nav>
                    <ul>
                        <li><Link href="">Profile</Link></li>
                        <li><Link href="">Projects</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='w-1/2'>

                <BackgroundAnimation/>
            </div>
        </div>
    )
}

export default Header
