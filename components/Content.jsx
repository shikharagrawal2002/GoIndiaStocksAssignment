import React,{useState} from 'react'
import Sidebar from './Sidebar'
import classNames from "classnames";
import Card from './Card';

const Content = () => {

  const [toggleCollapse, setToggleCollapse] = useState(false)

  const handleCallback = (childData) => {
    setToggleCollapse(childData)
  }

  const handleOnClick = (id) => {
    if (typeof window !== "undefined") {
      const myElement = document.getElementById(id);
      myElement.style.display = "block";
      if (id == 11){
        const myElement2 = document.getElementById(22);
        myElement2.style.display = "none";
      }else if (id == 22) {
        const myElement2 = document.getElementById(11);
        myElement2.style.display = "none";
      }
    }
  }

  const collapseImageClasses = classNames(
    "h-1/5 mb-10",
    {
      ["w-3/5"]: toggleCollapse,
      ["mr-10"]: !toggleCollapse,
      ["xs:m-0"]:!toggleCollapse,
      ["xs:mt-10"]:!toggleCollapse,
      ["xs:mr-5"]: !toggleCollapse,
      ["w-2/5"]: !toggleCollapse,
      ["xs:w-3/5"]: !toggleCollapse
      
    }
  );

   const collapseMarketClasses = classNames(
      'w-2/5 p-2 xs:hidden',
      {
        ["w-1/5"]: toggleCollapse
      }
    )

  return (
    <div className='relative bg-grey w-full flex'>
      <div className='flex xs:flex-col'>
        <div className='w-screen h-9 hidden xs:flex text-white font-extrabold'>
          <button className='w-1/2 bg-blue' onClick={()=> handleOnClick(11)}>DISCUSSION FORUM</button>
          <button className='w-1/2 bg-blue' onClick={()=> handleOnClick(22)}>MARKET STORIES</button>
        </div>
        <div className='flex xs:w-full'>
          <Sidebar parentCallback={handleCallback}/>
          <div id="11" className="w-3/5 p-2 ml-5 xs:w-11/12 xs:m-0 xs:flex-col">
              <h1 className='text-red font-extrabold text-lg mt-2 xs:hidden'>DISCUSSION FORUM</h1>
              <h2 className="font-extrabold text-lg mt-2 mb-2">Filters</h2>
              <div className='bg-white w-11/12 h-16 rounded-md drop-shadow-xl flex pl-7 pr-7 xs:p-0 xs:w-full xs:items-center'>
                  <div className='flex bg-darkred rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 xs:m-2 w-[25%] justify-center items-center'>
                      <p className='font-bold text-md tracking-widest xs:text-xs xs:whitespace-nowrap'>Sector 1</p>
                  </div>
                  <div className='flex bg-blue rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 xs:m-2 w-[25%] justify-center items-center'>
                      <p className='font-bold text-md tracking-widest xs:text-xs xs:whitespace-nowrap'>Sector 2</p>
                  </div>
                  <div className='flex bg-yellow rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 xs:m-2 w-[25%] justify-center items-center'>
                      <p className='font-bold text-md tracking-widest xs:text-xs xs:whitespace-nowrap'>Sector 3</p>
                  </div>
                  <div className='bg-darkgrey rounded-3xl w-1/2 items-center flex justify-start pt-2 pb-2 pl-3 pr-3 m-3'>
                      <img
                              className="magnifying-glass w-10 h-3/4"
                              alt="Magnifying glass"
                              src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/magnifying-glass-2.png"
                      />
                      <div className='w-[100%] flex justify-center items-center xs:hidden'>
                          Search here
                      </div>
                  </div>
              </div>
              <div className={classNames('w-11/12 xs:w-full',{["h-[43%]"]: toggleCollapse,["h-[58%]"]: !toggleCollapse})}><Card /></div>
          </div>
          <div id="22" className={collapseMarketClasses}>
              <h1 className='text-red font-extrabold text-lg mt-2 mb-10 xs:hidden'>MARKET STORIES</h1>
              <div className="w-fit flex flex-wrap xs:w-screen xs:justify-center">
                  <img
                      className={collapseImageClasses}
                      alt="Image"
                      src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/image-27-1@2x.png"
                  />
                  <img
                      className={collapseImageClasses}
                      alt="Image"
                      src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/image-23@2x.png"
                  />
                  <img
                      className={collapseImageClasses}
                      alt="Image"
                      src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/image-27@2x.png"
                  />
                  <img
                      className={collapseImageClasses}
                      alt="Image"
                      src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/image-27-1@2x.png"
                  />
                  <img
                      className={collapseImageClasses}
                      alt="Image"
                      src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/image-23@2x.png"
                  />
                  <img
                      className={collapseImageClasses}
                      alt="Image"
                      src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/image-27@2x.png"
                  />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content