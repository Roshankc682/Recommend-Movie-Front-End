import React ,{useState,useEffect} from 'react'
import {OUT_URL} from './urls'


const ListMoviesData = ({data}) => {
    const [datafromfront, setdatafromfront] = useState([])

    useEffect(() => {
        setdatafromfront(data)
        // console.log(data)
    }, [datafromfront])

    const starRatingfunc = (rating) =>{
        let numrate=[]
        for(let i=0;i<=rating;i++){
            numrate.push(i)
        }
        return numrate
    }
  return (

            <div className="grid  lg:grid-cols-3 lg:gap-3 sm:grid-cols-1 md:grid-cols-2 mt-5">
                {
                    datafromfront.length < 0
                    ?
                        <h1 className="text-white text-[100px]">Try again</h1>
                    :
                    datafromfront.map((item,index) => {
                            // console.log(5*(item["vote_average"]/10))
                            return (
                                    <div key={index} className="py-10 s:m-1 bg-slate-600 m-1">

                                    <div className="rounded overflow-hidden shadow-lg max-w-sm p-2 ">
                                        <img src={item["backdrop_path"]?OUT_URL+item["backdrop_path"]:"https://st2.depositphotos.com/3687485/9010/v/600/depositphotos_90102796-stock-illustration-cinema-film-clapper-board-vector.jpg"}
                                                alt="movies" className="m-auto w-[200px] h-[170px] rounded-md" />
                                    </div>
                                    <div className="px-6 py-4">
                                        <div className="mb-2">
                                                <p className='text-white font-bold text-xl '>
                                                    {item["original_title"]?item["original_title"]:null}
                                                </p>
                                                {/* <p className="text-white">
                                                    By : N/A
                                                </p> */}
                                            <div className="flex items-center mt-2">
                                                {(starRatingfunc(5*(item["vote_average"]/10))).map((item,index)=>{
                                                    return (
                                                            <svg key={index} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <p className="text-gray-200">
                                            {item["overview"].slice(0,50)}
                                            <button className="font-bold text-green-500 ml-1 hover:pointer hover:underline hover:text-red-500">see more</button>
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 ml-2">
                                        {item["genres"].length < 0
                                            ?
                                                null
                                            :
                                                item["genres"].map((item,index)=>{
                                                    return (
                                                        <span key={index} className="bg-gray-200 text-center text-sm rounded-full px-3 py-1 font-base mb-2">{item["name"]}</span>
                                                    )
                                                })

                                            }
                                    </div>
                                </div>

                            )
                })}
            </div>
  )
}

export default ListMoviesData