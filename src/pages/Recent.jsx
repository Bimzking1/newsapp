import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useEffect, useState } from 'react';
import DateConvert from '../components/DateConvert';

import None from '../assets/none.jpg'
import Nothing from '../assets/nothing.svg'
import { MdOutlineArrowBackIos } from "react-icons/md";

import { Link } from 'react-router-dom';

const Recent = () => {

  const [savedNews, setSavedNews] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setSavedNews(JSON.parse(localStorage.getItem('savedNews')))
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  console.log('savedNews ', savedNews)

  return (
    <div  className='w-full flex flex-col items-center bg-[#F9F9F9]'>  
      <div id="home"></div>
        <Navbar className=''/>
        <div className='h-full w-full xl:w-[1280px] flex justify-center md:justify-normal items-center gap-2 mt-4 mb-2 xl:px-0 md:px-4'>
          <Link to="/" className='flex justify-center items-center gap-2 bg-[#D0EAFA] py-2 px-4 rounded-xl text-[#005D8C] hover:bg-[#005D8C] duration-300 hover:text-[#D0EAFA]'>
            <div className='w-[24px] h-[24px]'>
              <MdOutlineArrowBackIos className='w-full h-full'/>
            </div>
            <div className='font-semibold'>
              Back
            </div>
          </Link>
          <div className='font-semibold ml-4 text-xl'>
            Read History
          </div>
        </div>
        <div className='w-full xl:w-[1280px] flex flex-col items-center bg-[#F9F9F9] mb-4'>
          {
            ((savedNews == null) || (loading == true)) ?
              <div className='flex flex-col justify-center items-center'>
                <div className='h-full w-full place-items-center py-4 grid grid-cols-1 lg:grid-cols-4 gap-4'>
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                  <Skeleton height={'280px'} width={'280px'} className='rounded-2xl' />
                </div>
              </div>
              :
              <>
                {
                  (savedNews.length == 0) ?
                  <div className='w-[400px] h-[400px] flex flex-col justify-center items-center mb-4'>
                    <img
                      src={Nothing}
                      className='w-full h-full'
                    />
                    <div className='text-gray-400 text-xl'>
                      There is nothing here...
                    </div>
                  </div>
                  :
                  <div className='flex flex-col justify-center items-center'>
                    <div className='h-full w-full place-items-center py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                      savedNews.map((news, index) => {
                        return (
                          <a href={`${news.newsUrl}`} target="_blank" key={index} className='w-[300px] md:w-[280px] h-full rounded-lg shadow-lg hover:shadow-2xl duration-300 bg-white'>
                            <div className='flex justify-center items-center overflow-hidden rounded-t-lg'>
                              <img
                                src={((news.newsImage == null) || (news.newsImage) == "[Removed]") ? None : news.newsImage}
                                className='h-full w-auto rounded-t-lg border-b-2 max-w-[300px] md:max-w-[280px] hover:brightness-75 hover:scale-125 duration-700'
                              />
                            </div>
                            <div className='py-2 px-4 flex flex-col rounded-b-lg'>
                              <div className='text-md font-semibold'>
                                {((news.newsTitle == null) || (news.newsTitle == "[Removed]")) ? "Title Removed" : news.newsTitle}
                              </div>
                              <div className='text-sm my-4'>
                                {((news.newsDescription == null) || (news.newsDescription == "[Removed]")) ? "Description Removed" : news.newsDescription.length <= 100 ? news.newsDescription : news.newsDescription.slice(0, 150) + '...'}
                              </div>
                              <div className='text-sm'>
                                {((news.newsPublished == null) || (news.newsPublished == "[Removed]")) ? "Date Removed" : <DateConvert day={news.newsPublished}/>}
                              </div>
                              <div className='border-t-2 mt-2 flex flex-col text-sm'>
                                <div className='text-gray-500 mt-2 font-semibold'>
                                  Author
                                </div>
                                <div className='text-black font-semibold'>
                                  {((news.newsAuthor == null) || (news.newsAuthor == "[Removed]")) ? "Author Removed" : news.newsAuthor}
                                </div>
                              </div>
                              <div className='mt-2 text-red-500 font-semibold text-sm italic'>
                                {((news.newsSource == null) || (news.newsSource == "[Removed]")) ? "Source Removed" : news.newsSource}
                              </div>
                            </div>
                          </a>
                        )
                      })
                    }
                    </div>
                  </div>
                }
              </>
          }
        </div>
        <Footer className=''/>
    </div>
  )
}

export default Recent