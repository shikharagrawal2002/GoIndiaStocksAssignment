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
            <div id="1" className={classNames('flex justify-center',{hidden: true})}>
                <Image className='w-1/2' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(1)}>
                <div className='w-1/12'>
                    <Image className="w-full" src={maleLogo} alt="Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl'>Lorem Ipsumt</h1>
                        <div className='flex bg-darkred rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 w-[25%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest'>Sector 1</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue'>2 min ago</div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%]" src={like} alt="Like"/>
                    <p className='text-xl'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap'>2k Comments</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-lg drop-shadow-2xl flex flex-col mb-4 mt-4 mr-4'>
            <div id="2" className={classNames('flex justify-center',{hidden: true})}>
                <Image className='w-1/2' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(2)}>
                <div className='w-1/12'>
                    <Image className="w-full" src={maleLogo} alt="Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl'>Lorem Ipsumt</h1>
                        <div className='flex bg-blue rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 w-[25%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest'>Sector 2</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue'>2 min ago</div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%]" src={like} alt="Like"/>
                    <p className='text-xl'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap'>2k Comments</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-lg drop-shadow-2xl flex flex-col mb-4 mt-4 mr-4'>
            <div id="3" className={classNames('flex justify-center',{hidden: true})}>
                <Image className='w-1/2' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(3)}>
                <div className='w-1/12'>
                    <Image className="w-full" src={femaleLogo} alt="Female Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl'>Lorem Ipsumt</h1>
                        <div className='flex bg-yellow rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 w-[25%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest'>Sector 3</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue'>2 min ago</div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%]" src={like} alt="Like"/>
                    <p className='text-xl'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap'>2k Comments</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
        <div className='bg-white rounded-lg drop-shadow-2xl flex flex-col mb-4 mt-4 mr-4'>
            <div id="3" className={classNames('flex justify-center',{hidden: true})}>
                <Image className='w-1/2' src={company} alt="Company"/>
            </div>
            <div className='flex w-full p-5' onClick={()=>handleCardToggle(3)}>
                <div className='w-1/12'>
                    <Image className="w-full" src={femaleLogo} alt="Female Profile"/>
                </div>
                <div className='w-8/12 pl-4'>
                    <div className='flex items-center justify-between mb-3'>
                        <h1 className='font-bold text-2xl'>Lorem Ipsumt</h1>
                        <div className='flex bg-yellow rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 w-[25%] justify-center items-center'>
                            <p className='font-bold text-md tracking-widest'>Sector 3</p>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <p className='flex flex-wrap mt-5 text-lg'>lorem lpsum is simply dummy test of the printing and typesetting industry Lorem lpsum is</p>
                </div>
                <div className='flex justify-end w-3/12 font-bold text-blue'>2 min ago</div>
            </div>
            <div className='flex justify-between mt-3 mb-5 ml-[5%] mr-[5%]'>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[25%]" src={like} alt="Like"/>
                    <p className='text-xl'>2k</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[40%]" src={view} alt="Views"/>
                    <p>2k</p>
                </div> 
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-2 w-[30%]" src={message} alt="Message"/>
                    <p className='whitespace-nowrap'>2k Comments</p>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <Image className="mr-3 w-[25%]" src={share} alt="Share"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card