import React,{useState} from 'react'
import Image from 'next/image';
import classNames from "classnames";
import comment from "../public/images/comment-1.png";
import bell from "../public/images/bell-1-1.png";
import user from "../public/images/user-2-1.png";
import arrowDown from "../public/images/arrow-point-to-down-1.png";
import dollar from "../public/images/dollar-symbol-1.png";

const Sidebar = (props) => {

    const [toggleCollapse, setToggleCollapse] = useState(true);
    
    const collapseIconClasses = classNames(
        "flex justify-center items-center",
        {
          "rotate-180": toggleCollapse,
          
        }
    );

    const wrapperClasses = classNames(
    "bg-light flex flex-col bg-blue2",
    {
        ["w-96"]: !toggleCollapse,
        ["w-0"]: toggleCollapse,
    }
    );

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
        props.parentCallback(toggleCollapse);
      };

  return (
    <div className="flex flex-row-reverse h-screen">
        <div className="text-white m-auto" style={{ transition: "width 2s cubic-bezier(0.2, 0, 0, 1) 0s" }}>
            <div className="text-4xl bg-blue2 rounded-r-2xl h-32 w-10 justify-center items-center flex">
                <button className={collapseIconClasses}
                    onClick={handleSidebarToggle}>&lt;
                </button>
            </div>
        </div>
        <div className={wrapperClasses} style={{ transition: "width 1s cubic-bezier(0.2, 0, 0, 1) 0s" }}>
            <div className="flex items-center left-0 top-0">
                <div className={classNames("flex flex-col w-full",{hidden: toggleCollapse})}>
                    <div className='flex justify-between items-center text-white w-full p-3'>
                        <Image className="w-[20%]" alt="User" src={user}/>
                        <h1 className="text-2xl w-[70%] p-5">Hello, User</h1>
                        <Image className="w-14 p-2" alt="Bell" src={bell} />
                    </div>
                    <hr></hr>
                    <div>
                        <div className='flex bg-darkBlue justify-between items-center text-white w-full p-1'>
                            <Image className="w-[15%]" alt="comment" src={comment}/>
                            <h1 className="text-2xl w-[70%] p-3">Discussion Forum</h1>
                            <Image className="w-[20%] p-2" alt="Bell" src={arrowDown} />
                        </div>
                        <div className='flex justify-between items-center text-white w-full p-1'>
                            <Image className="w-[15%]" alt="dollar" src={dollar}/>
                            <h1 className="text-2xl w-[70%] p-3">Market Stories</h1>
                            <Image className="w-[20%] p-2" alt="arrowDown" src={arrowDown} />
                        </div>
                        <div className='flex justify-between items-center text-white w-full p-1'>
                            <div className="w-[15%]"/>
                            <h1 className="text-2xl w-[70%] p-3">Sentiment</h1>
                            <div className="w-[20%] p-2" />
                        </div>
                        <div className='flex justify-between items-center text-white w-full p-1'>
                            <div className="w-[15%]"/>
                            <h1 className="text-2xl w-[70%] p-3">Market</h1>
                            <div className="w-[20%] p-2" />
                        </div>
                        <div className='flex justify-between items-center text-white w-full p-1'>
                            <div className="w-[15%]"/>
                            <h1 className="text-2xl w-[70%] p-3">Sector</h1>
                            <div className="w-[20%] p-2" />
                        </div>
                        <div className='flex justify-between items-center text-white w-full p-1'>
                            <div className="w-[15%]"/>
                            <h1 className="text-2xl w-[70%] p-3">Watchlist</h1>
                            <div className="w-[20%] p-2" />
                        </div>
                        <div className='flex justify-between items-center text-white w-full p-1'>
                            <div className="w-[15%]"/>
                            <h1 className="text-2xl w-[70%] p-3">Events</h1>
                            <div className="w-[20%] p-2" />
                        </div>
                        <div className='flex justify-between items-center text-white w-full p-1'>
                            <div className="w-[15%]"/>
                            <h1 className="text-2xl w-[70%] p-3">News/Interview</h1>
                            <div className="w-[20%] p-2" />
                        </div>
                    </div>
                    {/* <div className="overlap-8">
                        

                        <div className="text-wrapper-31">Market Stories</div>
                        <img className="arrow-point-to-down-2" alt="Arrow point to down" src="arrow-point-to-down-2.png" />
                        <img className="dollar-symbol" alt="Dollar symbol" src="dollar-symbol-1.png" />
                        <img className="rectangle-4" alt="Rectangle" src="rectangle-8.svg" />
                    <Image className="comment" alt="Comment" src={comment} />
                    <img className="arrow-point-to-down-3" alt="Arrow point to down" src="/public/images/arrow-point-to-down-1.png" />
                    </div>
                    <div className="text-wrapper-33"></div>
                    <div className="text-wrapper-34"></div>
                    <div className="text-wrapper-35"></div>
                    <div className="text-wrapper-36"></div>
                    <div className="text-wrapper-37"></div>
                    <div className="text-wrapper-38">Sentiment</div>
                    <img className="line-2" alt="Line" src="line-1.svg" />
                    <img className="line-3" alt="Line" src="line-2.svg" /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;