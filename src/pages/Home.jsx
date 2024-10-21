import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import axios from 'axios';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import None from '../assets/none.jpg'
import Nothing from '../assets/nothing.svg'
import DateConvert from '../components/DateConvert';

import { CiSaveDown2 } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const ref = useRef(null);
  const [data, setData] = useState(null)
  const [pageSize, setPageSize] = useState(12)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  
  const [searchQuery, setSearchQuery] = useState('')
  const [language, setLanguage] = useState('en')
  const [country, setCountry] = useState('us')
  const [category, setCategory] = useState('general')
  const [isServer, setIsServer] = useState(false)

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://newsapi.org/v2/top-headlines?pageSize=${pageSize}&page=${page}&country=${country}&category=${category}&language=${language}&apiKey=82e7cf4414764da6a8451e4000acefcf`,
    };
  
    axios.request(config)
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      if (error.response.status == 426) {
        setIsServer(true)
        alert("Requests from the browser are not allowed on the Developer plan, except from localhost. Newsapi hanya bisa digunakan melalui localhost. Netlify dan Vercel tidak bisa menjalankan API dari newsapi.org.")
      }
      toast.error(error, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      console.log(error);
    });
    
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [page, pageSize, category, country, language])

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

  const handleAddNewArray = (newsImage, newsTitle, newsUrl, newsAuthor, newsDescription, newsSource, newsPublished) => {
    let savedNews = JSON.parse(localStorage.getItem('savedNews'));

    if (savedNews == null) {
      savedNews = [
        {
          id: 1,
          newsImage: newsImage,
          newsTitle: newsTitle,
          newsUrl: newsUrl,
          newsAuthor: newsAuthor,
          newsDescription: newsDescription,
          newsSource: newsSource,
          newsPublished: newsPublished,
        }
      ]
      localStorage.setItem('savedNews', JSON.stringify(savedNews));
    } else {
      const newObj = 
        {
          id: savedNews.length+1,
          newsImage: newsImage,
          newsTitle: newsTitle,
          newsUrl: newsUrl,
          newsAuthor: newsAuthor,
          newsDescription: newsDescription,
          newsSource: newsSource,
          newsPublished: newsPublished,
        }
  
      savedNews.push(newObj)
    
      localStorage.setItem('savedNews', JSON.stringify(savedNews));
    }
  }

  const handleSearchQuery = () => {
    setLoading(true)
    if (searchQuery != ''){
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://newsapi.org/v2/everything?q=${searchQuery}&language=${language}&pageSize=${pageSize}&page=${page}&apiKey=82e7cf4414764da6a8451e4000acefcf`,
      };
    
      axios.request(config)
      .then((response) => {
        setData(response.data)
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      })
      .catch((error) => {
        toast.error(error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
      });
    }
  }

  const handleLanguage = (event) => {
    setLanguage(event.currentTarget.value)
  }

  const handleCountry = (event) => {
    setCountry(event.currentTarget.value)
  }

  const handleCategory = (event) => {
    setCategory(event.currentTarget.value)
  }

  return (
    <div  className='w-full flex flex-col items-center bg-[#F9F9F9]'>  
      <div id="home"></div>
        <Navbar className=''/>
        <div className='h-full w-full xl:w-[1280px] flex justify-normal items-center gap-2 mt-4 mb-2 px-2 xl:px-0 md:px-4'>
          <Link to="/recent" className='flex justify-center items-center gap-2 bg-[#D0EAFA] py-2 px-4 rounded-xl text-[#005D8C] hover:bg-[#005D8C] duration-300 hover:text-[#D0EAFA]'>
            <div className='w-[24px] h-[24px]'>
              <MdHistory className='w-full h-full'/>
            </div>
            <div className='font-semibold'>
              Read History
            </div>
          </Link>
        </div>
        <div className='h-full w-full xl:w-[1280px] px-2 flex flex-col md:flex-row justify-center md:justify-normal items-center gap-4 mt-4 mb-2 xl:px-0 md:px-4'>
          <input
              className="text-gray-800 text-md bg-gray-200 w-full py-2 pl-4 md:px-8 rounded-xl font-semibold"
              type="search"
              placeholder="Search by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={() => handleSearchQuery()} className='bg-[#D0EAFA] w-full md:w-[150px] py-2 px-8 font-semibold rounded-xl text-[#005D8C] hover:bg-[#005D8C] duration-300 hover:text-[#D0EAFA]'>
            Search
          </button>
        </div>
        <div className='h-full w-full xl:w-[1280px] px-2 xl:px-0 lg:flex xl:gap-4'>
          <div className='h-full w-full xl:w-[1280px] flex flex-col justify-start items-start gap-2 mt-4 mb-2 xl:px-0 md:px-4'>
            <div className='font-semibold'>
              Search by Category
            </div>
            <div className='w-full h-[40px] rounded-lg'>
              <select onChange={handleCategory} className='w-full h-full pl-2 rounded-lg hover:bg-[#D0EAFA] duration-700'>
                <option defaultValue ref={ref} value={'general'}>General</option>
                <option ref={ref} value={'business'}>Business</option>
                <option ref={ref} value={'entertainment'}>Entertainment</option>
                <option ref={ref} value={'health'}>Health</option>
                <option ref={ref} value={'science'}>Science</option>
                <option ref={ref} value={'sports'}>Sports</option>
                <option ref={ref} value={'technology'}>Technology</option>
              </select>
            </div>
          </div>
          <div className='h-full w-full xl:w-[1280px] flex flex-col justify-start items-start gap-2 mt-4 mb-2 xl:px-0 md:px-4'>
            <div className='font-semibold'>
              Search by Country
            </div>
            <div className='w-full h-[40px] rounded-lg'>
              <select onChange={handleCountry} className='w-full h-full pl-2 rounded-lg hover:bg-[#D0EAFA] duration-700'>
                <option defaultValue ref={ref} value={'us'}>United States</option>
                <option ref={ref} value={'br'}>Brazil</option>
                <option ref={ref} value={'ca'}>Canada</option>
                <option ref={ref} value={'cn'}>China</option>
                <option ref={ref} value={'gb'}>England</option>
                <option ref={ref} value={'de'}>Germany</option>
                <option ref={ref} value={'fr'}>France</option>
                <option ref={ref} value={'id'}>Indonesia</option>
                <option ref={ref} value={'in'}>India</option>
                <option ref={ref} value={'it'}>Italy</option>
                <option ref={ref} value={'jp'}>Japan</option>
                <option ref={ref} value={'nl'}>Netherlands</option>
                <option ref={ref} value={'ru'}>Russia</option>
                <option ref={ref} value={'sg'}>Singapore</option>
              </select>
            </div>
          </div>
          <div className='h-full w-full xl:w-[1280px] flex flex-col justify-start items-start gap-2 mt-4 mb-2 xl:px-0 md:px-4'>
            <div className='font-semibold'>
              News Language
            </div>
            <div className='w-full h-[40px] rounded-lg'>
              <select onChange={handleLanguage} className='w-full h-full pl-2 rounded-lg hover:bg-[#D0EAFA] duration-700'>
                <option defaultValue ref={ref} value={'en'}>English</option>
                <option ref={ref} value={'it'}>Italian</option>
                <option ref={ref} value={'es'}>Español</option>
                <option ref={ref} value={'pt'}>Portuguese</option>
                <option ref={ref} value={'de'}>Deutsch</option>
                <option ref={ref} value={'nl'}>Dutch</option>
                <option ref={ref} value={'fr'}>French</option>
                <option ref={ref} value={'ar'}>Arabic</option>
              </select>
            </div>
          </div>
        </div>
        <div className='w-full xl:w-[1280px] flex flex-col items-center bg-[#F9F9F9] mb-4'>
          {
            ((data == null) || (loading == true)) ?
              <>
                {
                  isServer ?
                  <div className='h-full w-full xl:w-[1280px] flex flex-col justify-center items-center my-64 text-center'>
                    <div className='font-bold text-xl mb-8'>
                      Requests from the browser are not allowed on the Developer plan, except from localhost.
                    </div>
                    <div className='mb-8'>
                      Newsapi hanya bisa digunakan melalui localhost. Netlify dan Vercel tidak bisa menjalankan API dari newsapi.org.
                    </div>
                    <div className='mb-8'>
                      Jalankan melalui localhost.
                    </div>
                    <a href='https://github.com/Bimzking1/newsapp' target="_blank" className='flex gap-4 py-4 px-8 justify-center items-center bg-[#D0EAFA] rounded-xl text-[#005D8C] hover:bg-[#005D8C] duration-300 hover:text-[#D0EAFA]'>
                      <div className='w-[40px] h-[40px]'>
                        <FaGithub className='w-full h-full'/>
                      </div>
                      <div className='font-bold text-xl'>
                        Link Github
                      </div>
                    </a>
                  </div>
                  :
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
                }
              </>
              :
              <>
                {
                  (data.articles.length == 0) ?
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
                      data.articles.map((article, index) => {
                        return (
                          <a onClick={() => handleAddNewArray(article.urlToImage, article.title, article.url, article.author, article.description, article.source.name, article.publishedAt)} href={`${article.url}`} target="_blank" key={index} className='relative w-[300px] md:w-[280px] h-full rounded-lg shadow-lg hover:shadow-2xl duration-300 bg-white'>
                            <div className='z-50 absolute top-[10px] right-[10px] opacity-75 bg-white shadow hover:bg-[#D0EAFA] duration-700 rounded-sm w-[35px] h-[35px] flex justify-center items-center'>
                              <CiSaveDown2 className='w-[25px] h-[25px]'/>
                            </div>
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
                                {((article.description == null) || (article.description == "[Removed]")) ? "Description Removed" : article.description.length <= 100 ? article.description : article.description.slice(0, 150) + '...'}
                              </div>
                              <div className='text-sm'>
                                {((article.publishedAt == null) || (article.publishedAt == "[Removed]")) ? "Date Removed" : <DateConvert day={article.publishedAt}/>}
                              </div>
                              <div className='border-t-2 mt-2 flex flex-col text-sm'>
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
        <div className='h-full w-full xl:w-[1280px] mb-8 flex flex-col md:px-8 xl:px-0'>
          <div className='w-full mb-2 flex justify-center md:justify-start'>
            News Shown
          </div>
          <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4'>
            <div className='h-full w-full flex justify-center items-center md:justify-between'>
              <div className='flex gap-2'>
                <div onClick={() => handleSetPageSize(4)} className={`w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${pageSize == 4 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  4
                </div>
                <div onClick={() => handleSetPageSize(8)} className={`w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${pageSize == 8 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  8
                </div>
                <div onClick={() => handleSetPageSize(12)} className={`w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${pageSize == 12 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  12
                </div>
                <div onClick={() => handleSetPageSize(16)} className={`w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${pageSize == 16 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  16
                </div>
                <div onClick={() => handleSetPageSize(20)} className={`w-[40px] h-[40px] flex justify-center items-center cursor-pointer ${pageSize == 20 ? 'bg-[#005D8C] text-[#D0EAFA]' : 'bg-[#D0EAFA] text-[#005D8C]'} hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold`}>
                  20
                </div>
              </div>
            </div>
            <div className='flex gap-2'>
              <div onClick={() => handlePrevPage()} className='py-2 px-8 flex justify-center items-center cursor-pointer bg-[#D0EAFA] text-[#005D8C] hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold'>
                Prev
              </div>
              <div className='py-2 px-4 flex justify-center items-center bg-[#D0EAFA] text-[#005D8C] cursor-pointer hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold'>
                {page}
              </div>
              <div onClick={() => handleNextPage()} className='py-2 px-8 flex justify-center items-center cursor-pointer bg-[#D0EAFA] text-[#005D8C] hover:bg-[#005D8C] hover:text-[#D0EAFA] duration-300 rounded-lg font-semibold'>
                Next
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
        <Footer className=''/>
    </div>
  )
}

export default Home