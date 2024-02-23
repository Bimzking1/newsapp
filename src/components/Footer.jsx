// import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#D0EAFA]'>
      <div className='bg-[#D0EAFA] w-full xl:w-[1280px] text-[#005D8C] text-sm text-center md:text-left md:py-8 md:px-8 pb-8'>
        <div className='w-full md:flex'>

            <div className='flex justify-center items-center md:items-start flex-col w-full md:w-1/4 py-2 pt-8 md:pt-2 px-2 pl-4 lg:w-2/5'>
                <a href="#home" className='w-4/5'>
                    <img
                        src={Logo}
                    />
                </a>
                <div className='text-lg md:text-sm my-8 px-4 md:px-0 lg:w-4/5'>
                    DNA is the largest news publisher company
                    and service providers in Indonesia.
                    We help our customers to fullfilled their
                    satisfaction.
                </div>
                <div className='flex justify-center md:justify-start py-4 gap-4'>
                    <a href='https://www.instagram.com/' target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineInstagram style={{ color:'#005D8C', width: '100%', height: '100%' }}/>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <BsFacebook style={{color: "#005D8C", width: '100%', height: '100%'}} />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" className='w-[40px] md:w-[30px]'>
                        <AiOutlineYoutube style={{color: "#005D8C", width: '100%', height: '100%' }} />
                    </a>
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Services
                </div>
                <div className='md:py-1'>
                    Application Guide
                </div>
                <div className='md:py-1'>
                    Become Professional
                </div>
                <div className='md:py-1'>
                    Go International
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Discover
                </div>
                <div className='md:py-1'>
                    Modern Websites
                </div>
                <div className='md:py-1'>
                    Mobile Application
                </div>
                <div className='md:py-1'>
                    Products
                </div>
                <div className='md:py-1'>
                    New Feature
                </div>
                <div className='md:py-1'>
                    Community
                </div>
            </div>

            <div className='md:w-1/4 lg:w-1/5 py-2 px-2'>
                <div className='font-bold text-xl mb-2'>
                    Products
                </div>
                <div className='md:py-1'>
                    Websites
                </div>
                <div className='md:py-1'>
                    Applications
                </div>
                <div className='md:py-1'>
                    Design
                </div>
            </div>

        </div>
        <hr className='mt-8'/>
        <div className='text-center md:flex gap-8 text-xs mt-8 lg:px-4'>
            <div className='mb-2'>
                © Bimo - DNA 2024. All Rights Reserved
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                About Us
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                User Agreement
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Privacy Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Terms of Services
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Cookie Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Copyright Policy
            </div>
            <div className='font-bold mb-2 hidden md:block'>
                Brand Policy
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer