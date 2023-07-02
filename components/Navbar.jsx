import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../public/images/logo.webp"

const Navbar = () => {
  return (
    <div className='relative left-0 top-0 w-full z-10 bg-white'>
        <div className='m-auto flex justify-between items-center text-black'> 
            <Link href='/' className='w-1/4'>
                <Image
                    className="h-[10%] w-[20%] ml-3 mr-3"
                    alt="Image"
                    src={Logo}/>
            </Link>
            <div className='bg-grey h-[45px] rounded-md w-1/2 items-center flex justify-end p-3 m-4'>
                <img
                        className="magnifying-glass"
                        alt="Magnifying glass"
                        src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/magnifying-glass-2.png"
                />
            </div>
            <ul className='flex items-center mr-5 w-1/4 justify-end'>
                <li className='m-3'>
                <Link href='/contact'>Contact Us</Link>
                </li>
                <li className='m-3'>
                    <Link href='/signup'>
                        <button className='pt-2 pb-2 pr-4 pl-4 border-2 border-black bg-white rounded-md'>SIGN UP</button>
                    </Link>
                </li>
                <li className='m-3'>
                    <Link href='/signin'><button className='pt-2 pb-2 pr-4 pl-4 border-2 border-black rounded-md'>SIGN IN</button></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar