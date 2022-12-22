import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { OUT_URL,BACK_END_URL,GET_SINGEL_MOVIE_DATA,YOUTUBE_SEARCH } from '../../components/urls';
import { useRouter } from 'next/router'
import ShimmerPage from '../../components/ShimmerPage';

const id = ({data}) => {

  const router = useRouter()

  const [loading, setloading] = useState(true)

  const [serverdata, setserverdata] = useState([])


  useEffect(() => {
    setserverdata(data)
  }, [])

  useEffect(() => {
    try{
      if(serverdata.length>=0){}else{
        if(serverdata["message"]=="error"){
          router.push("/")
        }else{
          setloading(false)
        }
      }
    }catch{
      router.push("/")
    }
  }, [serverdata])

  const starRatingfunc = (rating) =>{
    let numrate=[]
    for(let i=0;i<=rating;i++){
        numrate.push(i)
    }
    return numrate
}

  return (
      <>
      {loading
        ?
          <ShimmerPage/>
          :
          <>
          <Head>
            <title>Relevent Movies</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="flex h-screen justify-center items-center">
                  <div className="m-auto w-[70%] shadow-2xl bg-slate-800 rounded-lg">
                  <button
                    onClick={()=>{
                      router.push("/")
                    }}
                    type="button"
                    className="m-2"
                  >
                    <img src="/bk-btn.svg" className="w-[30px] h-[30px] bg-red-500 hover:bg-white m-3 rounded-2xl" />
                  </button>
                      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-0 mb-3">
                        <div className="m-auto md:mt-2 md:mb-2 md:ml-2 md:mr-2">
                          <img
                            className="rounded-lg"
                            src={serverdata["backdrop_path"]?OUT_URL+serverdata["backdrop_path"]:null}
                            alt="movies_image"
                          />
                        </div>

                        <div className="text-white m-auto">
                          <h1 className="text-[30px] px-3 py-1">
                            {serverdata["original_title"]?serverdata["original_title"]:null}
                          </h1>
                          <p className="px-3 py-1">
                            {serverdata["release_date"]?serverdata["release_date"]:null}
                          </p>
                          <div className="flex flex-wrap gap-1 ml-2 mt-2">
                          {serverdata["genres"].length < 0
                                            ?
                                                null
                                            :
                                                serverdata["genres"].map((item,index)=>{
                                                    return (
                                                      <span key={index} className="bg-gray-400 text-center text-sm rounded-full px-3 py-1 font-base mb-2">{item["name"]}</span>
                                                    )
                                                })

                          }
                        </div>
                        <div className="flex px-2 py-1">
                        {(starRatingfunc(5*(serverdata["vote_average"]/10))).map((item,index)=>{
                                                    return (
                                                            <svg key={index} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    )
                            })}
                        </div>
                        <p className='px-2 py-1'>
                          {serverdata["overview"]}
                        </p>
                        <button
                          className="text-green-600 mb-2 ml-2 bg-transparent hover:bg-blue-500  font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                          onClick={()=>{
                            router.push(YOUTUBE_SEARCH+serverdata["original_title"])
                          }}
                        >
                            Watch
                        </button>
                        </div>
                      </div>
                  </div>
          </div>
          </>
      }
      </>
  )
}

export async function getServerSideProps(context) {
  try{
    const response_data = await fetch(BACK_END_URL+GET_SINGEL_MOVIE_DATA+context.query.id)
    const data = await response_data.json()
    return { props: { data } }
  }catch{
    let data = {
      message:"error"
    }
    return {props:{data}}
  }

}
export default id