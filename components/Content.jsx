import React,{useState} from 'react'
import Sidebar from './Sidebar'
import classNames from "classnames";
import Card from './Card';

const Content = () => {

  const [toggleCollapse, setToggleCollapse] = useState(false)

  const handleCallback = (childData) => {
    setToggleCollapse(childData)
  }

  const collapseImageClasses = classNames(
    "h-1/5 mb-10",
    {
      ["w-3/5"]: toggleCollapse,
      ["mr-10"]: !toggleCollapse,
      ["w-2/5"]: !toggleCollapse
      
    }
  );

   const collapseMarketClasses = classNames(
      'w-2/5 p-2',
      {
        ["w-1/5"]: toggleCollapse
      }
    )

  return (
    <div className='relative bg-grey w-full flex'>
      <Sidebar parentCallback={handleCallback}/>
      <div className="w-3/5 p-2 ml-5">
          <h1 className='text-red font-extrabold text-lg mt-2'>DISCUSSION FORUM</h1>
          <h2 className="font-extrabold text-lg mt-2 mb-2">Filters</h2>
          <div className='bg-white w-11/12 h-16 rounded-md drop-shadow-xl flex pl-7 pr-7'>
              <div className='flex bg-darkred rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 w-[25%] justify-center items-center'>
                  <p className='font-bold text-md tracking-widest'>Sector 1</p>
              </div>
              <div className='flex bg-blue rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 w-[25%] justify-center items-center'>
                  <p className='font-bold text-md tracking-widest'>Sector 2</p>
              </div>
              <div className='flex bg-yellow rounded-3xl text-white pt-2 pb-2 pl-3 pr-3 m-3 w-[25%] justify-center items-center'>
                  <p className='font-bold text-md tracking-widest'>Sector 3</p>
              </div>
              <div className='bg-darkgrey rounded-3xl w-1/2 items-center flex justify-start pt-2 pb-2 pl-3 pr-3 m-3'>
                  <img
                          className="magnifying-glass"
                          alt="Magnifying glass"
                          src="https://generation-sessions.s3.amazonaws.com/7adc4e39521ec7a59156fd7e1199bb0d/img/magnifying-glass-2.png"
                  />
                  <div className='w-[100%] flex justify-center items-center'>
                      Search here
                  </div>
              </div>
          </div>
          <div className={classNames('w-11/12',{["h-[43%]"]: toggleCollapse,["h-[58%]"]: !toggleCollapse})}><Card /></div>
      </div>
      <div className={collapseMarketClasses}>
          <h1 className='text-red font-extrabold text-lg mt-2 mb-10'>MARKET STORIES</h1>
          <div className="w-fit flex flex-wrap">
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
  )
}

export default Content