// import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import Logo from '../assets/logo.png'

const navbar = () => {

  return (
    <div className='w-full flex flex-col items-center justify-center bg-gray-800z-50'>
        <div className='px-4 w-full flex justify-center items-center border-b border-[#005D8C] py-4 h-fit bg-[#D0EAFA]'>
            <div className='w-full xl:w-[1280px] flex flex-row justify-between items-center'>
                <div className="flex flex-col justify-center items-center text-[#1c1c1c] dark:text-[#FBFAF5] h-[56px]">
                  <img
                    src={Logo}
                    className="w-full h-full"
                  />
                </div>
                {/* <div className='flex justify-center items-center gap-8'>
                    <div className='w-[50px] h-[50px]'>
                        <FaRegCircleUser className='w-full h-full'/>
                    </div>
                </div> */}
            </div>
        </div>
        <div className='w-full h-[15px] bg-[#D0EAFA]'></div>
    </div>
  )
}

export default navbar