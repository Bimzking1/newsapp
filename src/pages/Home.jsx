// import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import DateConvert from '../components/DateConvert';

import None from '../assets/none.jpg'
import Nothing from '../assets/nothing.svg'
import { CiSaveDown2 } from "react-icons/ci";
import { MdHistory } from "react-icons/md";

import { Link } from 'react-router-dom';

const Home = () => {

  const [data, setData] = useState(null)
  const [pageSize, setPageSize] = useState(12)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   let config = {
  //     method: 'get',
  //     maxBodyLength: Infinity,
  //     url: `https://newsapi.org/v2/top-headlines?country=us&pageSize=${pageSize}&page=${page}&apiKey=82e7cf4414764da6a8451e4000acefcf`,
  //   };
  
  //   axios.request(config)
  //   .then((response) => {
  //     console.log('responz: ', response);
  //     setData(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
    
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000);
  // }, [page, pageSize])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [page, pageSize])

  const handleSetPageSize = (pageValue) => {
    setLoading(true)
    setPageSize(pageValue)
    setPage(1)
  }

  const handlePrevPage = () => {
    setLoading(true)
    setPage(page-1)
  }

  const handleNextPage = () => {
    setLoading(true)
    setPage(page+1)
  }

  console.log('data: ', data);
  const articles = [
    {
      source: {
        id: "abc-news",
        name: "ABC News"
      },
        author: "Aaron Katersky, Peter Charalambous",
        title: "Letitia James says she's prepared to seize Trump's buildings if he can't pay his $354M civil fraud fine - ABC News",
        description: "The New York attorney general made the remarks in an interview with ABC News.",
        url: "https://abcnews.go.com/US/letitia-james-shes-prepared-seize-trumps-assets-pay/story?id=107381482",
        urlToImage: "https://i.abcnewsfe.com/a/f358c2a2-6ff1-4954-9a5b-c5ff66d3bfc3/James-file-2-gty-ml-240220_1708457880152_hpMain_16x9.jpg?w=1600",
        publishedAt: "2024-02-21T12:03:31Z",
        content: "Four days after a judge ordered former President Donald Trump to pay $354 million in his civil fraud case, New York Attorney General Letitia James told ABC News that she is prepared to seize the form… [+2240 chars]"
      },
      {
      source: {
        id: null,
        name: "BBC News"
      },
        author: null,
        title: "Gaza ceasefire vote: Commons debate descends into chaos - BBC.com",
        description: "Speaker Sir Lindsay Hoyle apologises after being accused of allowing the debate to be \"hijacked\" by Labour.",
        url: "https://www.bbc.com/news/uk-politics-68362405",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/E1FA/production/_132705875_microsoftteams-image.png",
        publishedAt: "2024-02-22T03:03:32Z",
        content: "By Becky MortonPolitical reporter\r\nWatch: Chaos in the Commons over Gaza ceasefire vote\r\nA Commons debate on calls for a ceasefire in Gaza descended into chaos, after the Speaker was accused of allow… [+5183 chars]"
      },
      {
      source: {
        id: "the-verge",
        name: "The Verge"
      },
        author: "Allison Johnson",
        title: "The Samsung Galaxy S23 series will get AI features in late March - The Verge",
        description: "Samsung’s Galaxy S23 series, along with its latest foldables and tablets, will get new AI features soon by way of a One UI 6.1 update.",
        url: "https://www.theverge.com/2024/2/21/24079508/samsung-galaxy-s23-ai-one-ui-6-1",
        urlToImage: "https://cdn.vox-cdn.com/thumbor/_NreMGywwx_06OSCp5MKw-du1-8=/0x0:2000x1333/1200x628/filters:focal(1000x667:1001x668)/cdn.vox-cdn.com/uploads/chorus_asset/file/25230411/DSC06337_processed.jpg",
        publishedAt: "2024-02-22T03:00:00Z",
        content: "The Samsung Galaxy S23 series will get AI features in late March\r\nThe Samsung Galaxy S23 series will get AI features in late March\r\n / One UI 6.1 is coming soon to recent Galaxy phones, foldables, an… [+1678 chars]"
      },
      {
      source: {
        id: "cnn",
        name: "CNN"
      },
        author: "Alli Rosenbloom",
        title: "Josh Brolin’s hilarious ‘Dune: Part Two’ movie summary, decoded - CNN",
        description: "Josh Brolin is known as a doting father and movie star of epic proportions, but above all, the man is a gifted wordsmith.",
        url: "https://www.cnn.com/2024/02/21/entertainment/josh-brolin-dune-part-two-movie-summary/index.html",
        urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2013755735.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2024-02-22T02:47:00Z",
        content: "Josh Brolin is known as a doting father and movie star of epic proportions, but above all, the man is a gifted wordsmith.\r\nBrolin who plays Gurney Halleck in the Denis Villeneuve Dune movies took a m… [+2860 chars]"
      },
      {
      source: {
        id: null,
        name: "[Removed]"
      },
        author: null,
        title: "[Removed]",
        description: "[Removed]",
        url: "https://removed.com",
        urlToImage: null,
        publishedAt: "1970-01-01T00:00:00Z",
        content: "[Removed]"
      },
      {
      source: {
        id: "business-insider",
        name: "Business Insider"
      },
        author: "Matthew Fox",
        title: "An Nvidia earnings blowout could actually be bad news for the stock, JPMorgan says - Yahoo Finance",
        description: "\"Soooo, bad is bad, good is fine/bad, but too good might be not good,\" JPMorgan said of Nvidia's upcoming earnings report.",
        url: "https://markets.businessinsider.com/news/stocks/nvidia-q4-earnings-blowout-bad-news-nvda-stock-price-outlook-2024-2",
        urlToImage: "https://s.yimg.com/ny/api/res/1.2/uWAnPioPseCKpwI4D8tjQQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/business_insider_articles_888/281a6b31144fff9514c35f06d8aba419",
        publishedAt: "2024-02-22T01:57:00Z",
        content: "<ul><li>Investor expectations for Nvidia's upcoming earnings report are sky-high.\r\n</li><li>JPMorgan said Nvidia's stock price could negatively react to a blowout earnings report.\r\n</li><li>\"The bigg… [+2097 chars]"
      },
      {
      source: {
        id: null,
        name: "BBC News"
      },
        author: null,
        title: "Major Alabama hospital pauses IVF after court rules frozen embryos are children - BBC.com",
        description: "The case in Alabama stems from a lawsuit brought by three couples whose frozen embryos were lost at a clinic.",
        url: "https://www.bbc.com/news/world-us-canada-68366337",
        urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/140A0/production/_132708028_gettyimages-1498980269.jpg",
        publishedAt: "2024-02-22T01:33:25Z",
        content: "In vitro fertilization is a common form of fertility care in the US.\r\nA ruling from the Alabama Supreme Court that frozen embryos are considered children, and that a person could be held liable for a… [+7138 chars]"
      },
      {
      source: {
        id: "cnn",
        name: "CNN"
      },
        author: "Michelle Watson",
        title: "Arizona prosecutor refuses to extradite suspect in New York killing, citing Manhattan DA’s handling of previous cases - CNN",
        description: "A suspect in the killing of a woman at a New York City hotel – who was arrested in Arizona in connection with a different case – will not be extradited, Maricopa County Attorney Rachel Mitchell said Wednesday, citing the handling of other cases by Manhattan p…",
        url: "https://www.cnn.com/2024/02/21/us/arizona-prosecutor-refuses-extradition-soho-killing-case/index.html",
        urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/61fa0be6234e47c3a2fa087a3e4.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2024-02-22T01:05:00Z",
        content: "A suspect in the killing of a woman at a New York City hotel who was arrested in Arizona in connection with a different case will not be extradited, Maricopa County Attorney Rachel Mitchell said Wedn… [+4395 chars]"
      },
  ]

  return (
    <div  className='w-full flex flex-col items-center bg-[#F9F9F9]'>  
        <Navbar className=''/>
        <div className='h-full w-full xl:w-[1280px] flex items-center gap-2 mt-4 mb-2 px-2 xl:px-0'>
          <div className='flex justify-center items-center gap-2 bg-[#D0EAFA] py-2 px-4 rounded-xl text-[#005D8C] hover:bg-[#005D8C] duration-300 hover:text-[#D0EAFA]'>
            <div className='w-[24px] h-[24px]'>
              <MdHistory className='w-full h-full'/>
            </div>
            <div className='font-semibold'>
              Recently Read
            </div>
          </div>
          <div className='flex justify-center items-center gap-2 bg-[#D0EAFA] py-2 px-4 rounded-xl text-[#005D8C] hover:bg-[#005D8C] duration-300 hover:text-[#D0EAFA]'>
            <div className='w-[24px] h-[24px]'>
              <CiSaveDown2 className='w-full h-full'/>
            </div>
            <div className='font-semibold'>
              Saved
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[1280px] flex flex-col items-center bg-[#F9F9F9] mb-4'>
          {
            ((data != null) || (loading == true)) ?
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
                  (articles.length == 0) ?
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
                    <div className='h-full w-full place-items-center py-4 grid grid-cols-1 lg:grid-cols-4 gap-4'>
                    {
                      articles.map((article, index) => {
                        return (
                          <a href={`${article.url}`} target="_blank" key={index} className='w-[300px] md:w-[280px] h-full rounded-lg shadow-lg hover:shadow-2xl duration-300 bg-white'>
                            <div className='flex justify-center items-center overflow-hidden rounded-t-lg'>
                              <img
                                src={((article.urlToImage == null) || (article.urlToImage) == "[Removed]") ? None : article.urlToImage}
                                className='h-full w-auto rounded-t-lg border-b-2 max-w-[300px] md:max-w-[280px] hover:brightness-75 hover:scale-125 duration-700'
                              />
                            </div>
                            <div className='py-2 px-4 flex flex-col rounded-b-lg'>
                              <div className='text-md font-semibold'>
                                {((article.title == null) || (article.title == "[Removed]")) ? "Title Removed" : article.title.slice(0, 70) + '...'}
                              </div>
                              <div className='text-sm my-4'>
                                {((article.description == null) || (article.description == "[Removed]")) ? "Description Removed" : article.description.length <= 100 ? article.description : article.description.slice(0, 100) + '...'}
                              </div>
                              <div>
                                {((article.publishedAt == null) || (article.publishedAt == "[Removed]")) ? "Date Removed" : <DateConvert day={article.publishedAt}/>}
                              </div>
                              <div className='border-t-2 mt-2 flex flex-col'>
                                <div className='text-gray-500 mt-2 font-semibold'>
                                  Author
                                </div>
                                <div className='text-black font-semibold'>
                                  {((article.author == null) || (article.author == "[Removed]")) ? "Author Removed" : article.author}
                                </div>
                              </div>
                              <div className='mt-2 text-red-500 font-semibold text-sm italic'>
                                {((article.source.name == null) || (article.source.name == "[Removed]")) ? "Source Removed" : article.source.name}
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
        <div className='h-full w-full xl:w-[1280px] mb-8 flex flex-col'>
          <div className='w-full mb-2 flex justify-center'>
            News Shown
          </div>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <div className='h-full w-full flex justify-center items-center'>
              <div className='flex gap-2'>
                <div onClick={() => handleSetPageSize(4)} className={`w-[40px] h-[40px] flex justify-center items-center ${pageSize == 4 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  4
                </div>
                <div onClick={() => handleSetPageSize(8)} className={`w-[40px] h-[40px] flex justify-center items-center ${pageSize == 8 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  8
                </div>
                <div onClick={() => handleSetPageSize(12)} className={`w-[40px] h-[40px] flex justify-center items-center ${pageSize == 12 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  12
                </div>
                <div onClick={() => handleSetPageSize(16)} className={`w-[40px] h-[40px] flex justify-center items-center ${pageSize == 16 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  16
                </div>
                <div onClick={() => handleSetPageSize(20)} className={`w-[40px] h-[40px] flex justify-center items-center ${pageSize == 20 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  20
                </div>
              </div>
            </div>
            <div className='flex gap-2'>
              <div onClick={() => handlePrevPage()} className='py-2 px-8 flex justify-center items-center bg-[#D0EAFA] text-[#005D8C] hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold'>
                Prev
              </div>
              <div className='py-2 px-4 flex justify-center items-center bg-[#D0EAFA] text-[#005D8C] hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold'>
                {page}
              </div>
              <div onClick={() => handleNextPage()} className='py-2 px-8 flex justify-center items-center bg-[#D0EAFA] text-[#005D8C] hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold'>
                Next
              </div>
            </div>
          </div>
        </div>
        <Footer className=''/>
    </div>
  )
}

export default Home