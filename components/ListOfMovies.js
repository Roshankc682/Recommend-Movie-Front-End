import React , {useEffect,useState} from 'react'
import { motion } from "framer-motion"
import axios from 'axios'
import { BACK_END_URL ,MOVIES_RANDOM_LIST, MOVIES_LIST } from './urls';

// https://image.tmdb.org/t/p/original/y8yvIrmoM2PLuJcSto7OmOfsXQj.jpg

const ListOfMovies = () => {
    const [moviesData, setmoviesData] = useState([])

    useEffect(() => {

    }, [])

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >

        <div className="grid  lg:grid-cols-3 lg:gap-3 sm:grid-cols-1 md:grid-cols-2 mt-5">
            {[1,2,3,4,5,6].map((item,index) => {
                return (
                        <div key={index} className="py-10 s:m-1 bg-slate-600 m-1">
                            <div className="rounded overflow-hidden shadow-lg max-w-sm p-2 ">
                                <img src="https://image.tmdb.org/t/p/original/y8yvIrmoM2PLuJcSto7OmOfsXQj.jpg"
                                        alt="mountain" className=" rounded-md w-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="mb-2">
                                        <p className='text-white font-bold text-xl '>
                                            Titile
                                        </p>
                                        <p className="text-white">
                                            By : Adam smith
                                        </p>
                                        <div className="flex items-center">
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        </div>
                                </div>
                                <p className="text-gray-200">
                                    {"ewiioweioewio iewaskldjfkl  asdf asdf asdf asdf ssklslkl".slice(0,25)}
                                    <button className="hover:pointer hover:underline hover:text-green-500">see more</button>
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1 ml-2">
                                <span className="bg-gray-200 text-center text-sm rounded-full px-3 py-1 font-base mb-2">Action</span>
                                <span className="bg-gray-200 text-center text-sm rounded-full px-3 py-1 font-base mb-2">Action</span>
                                <span className="bg-gray-200  text-center text-sm rounded-full px-3 py-1 font-base mb-2">Action</span>
                            </div>
                        </div>
                )
            })}
        </div>
    </motion.div>
  )
}

export default ListOfMovies