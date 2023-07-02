import React,{useState, useEffect } from 'react'
import Image from 'next/image';
import classNames from "classnames";
import company from "../public/images/image-49.png";
import maleLogo from "../public/images/profile-3-2.png";
import femaleLogo from "../public/images/woman-2-1.png";
import share from "../public/images/share-3-3.png"
import message from "../public/images/message-3-3.png"
import view from "../public/images/view-3-3.png"
import like from "../public/images/heart-2-3.png"

const Card = () => {

    const handleCardToggle = (id) => {
        if (typeof window !== "undefined") {
            const myElement = document.getElementById(id);
            console.log(myElement)
            if (myElement.style.display == "flex"){
                myElement.style.display = "none";
            }else  {
                myElement.style.display = "flex"
            } 
          }
      };

  return (
    <div className='overflow-y-scroll h-full mt-3'>
        <div className='bg-white rounded-lg drop-shadow-2xl flex flex-col mb-4 mt-4 mr-4'>
            <div id="1" className={classNames('flex justify-center xs:m-5',{hidden: true})}>
                <Image className='w-1/2 xs:w-5/6' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(1)}>
                <div className='w-1/12 xs:w-1/4 xs:mt-2'>
                    <Image className="w-full" src={maleLogo} alt="Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl xs:text-[18px] whitespace-nowrap'>Lorem Ipsumt</h1>
                        <div className='flex bg-darkred rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 xs:m-2 w-[25%] xs:w-[40%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest xs:text-xs xs:whitespace-nowrap'>Sector 1</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg xs:text-sm'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue xs:w-1/3 xs:text-[14px] xs:mt-[50%] xs:whitespace-nowrap'>
                    2 min ago
                </div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%] xs:w-[60%]" src={like} alt="Like"/>
                    <p className='text-xl xs:text-lg'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%] xs:w-[60%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%] xs:w-[60%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap xs:text-lg'>2k <span className='xs:hidden'>Comments</span></p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%] xs:w-[60%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-lg drop-shadow-2xl flex flex-col mb-4 mt-4 mr-4'>
            <div id="1" className={classNames('flex justify-center xs:m-5',{hidden: true})}>
                <Image className='w-1/2 xs:w-5/6' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(1)}>
                <div className='w-1/12 xs:w-1/4 xs:mt-2'>
                    <Image className="w-full" src={maleLogo} alt="Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl xs:text-[18px] whitespace-nowrap'>Lorem Ipsumt</h1>
                        <div className='flex bg-blue rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 xs:m-2 w-[25%] xs:w-[40%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest xs:text-xs xs:whitespace-nowrap'>Sector 1</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg xs:text-sm'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue xs:w-1/3 xs:text-[14px] xs:mt-[50%] xs:whitespace-nowrap'>
                    2 min ago
                </div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%] xs:w-[60%]" src={like} alt="Like"/>
                    <p className='text-xl xs:text-lg'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%] xs:w-[60%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%] xs:w-[60%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap xs:text-lg'>2k <span className='xs:hidden'>Comments</span></p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%] xs:w-[60%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-lg drop-shadow-2xl flex flex-col mb-4 mt-4 mr-4'>
            <div id="1" className={classNames('flex justify-center xs:m-5',{hidden: true})}>
                <Image className='w-1/2 xs:w-5/6' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(1)}>
                <div className='w-1/12 xs:w-1/4 xs:mt-2'>
                    <Image className="w-full" src={femaleLogo} alt="Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl xs:text-[18px] whitespace-nowrap'>Lorem Ipsumt</h1>
                        <div className='flex bg-yellow rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 xs:m-2 w-[25%] xs:w-[40%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest xs:text-xs xs:whitespace-nowrap'>Sector 1</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg xs:text-sm'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue xs:w-1/3 xs:text-[14px] xs:mt-[50%] xs:whitespace-nowrap'>
                    2 min ago
                </div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%] xs:w-[60%]" src={like} alt="Like"/>
                    <p className='text-xl xs:text-lg'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%] xs:w-[60%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%] xs:w-[60%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap xs:text-lg'>2k <span className='xs:hidden'>Comments</span></p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%] xs:w-[60%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-lg drop-shadow-2xl flex flex-col mb-4 mt-4 mr-4'>
            <div id="1" className={classNames('flex justify-center xs:m-5',{hidden: true})}>
                <Image className='w-1/2 xs:w-5/6' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(1)}>
                <div className='w-1/12 xs:w-1/4 xs:mt-2'>
                    <Image className="w-full" src={maleLogo} alt="Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl xs:text-[18px] whitespace-nowrap'>Lorem Ipsumt</h1>
                        <div className='flex bg-darkred rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 xs:m-2 w-[25%] xs:w-[40%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest xs:text-xs xs:whitespace-nowrap'>Sector 1</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg xs:text-sm'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue xs:w-1/3 xs:text-[14px] xs:mt-[50%] xs:whitespace-nowrap'>
                    2 min ago
                </div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%] xs:w-[60%]" src={like} alt="Like"/>
                    <p className='text-xl xs:text-lg'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%] xs:w-[60%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%] xs:w-[60%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap xs:text-lg'>2k <span className='xs:hidden'>Comments</span></p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%] xs:w-[60%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card