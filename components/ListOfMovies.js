import React , {useEffect,useState} from 'react'
import { motion } from "framer-motion"
import axios from 'axios'
import { BACK_END_URL ,MOVIES_RANDOM_LIST, MOVIES_LIST } from './urls';
import ListMoviesData from './ListMoviesData'
import ShimmerLoading from './ShimmerLoading';

// https://image.tmdb.org/t/p/original/y8yvIrmoM2PLuJcSto7OmOfsXQj.jpg

const ListOfMovies = () => {

    const [WholeListLoading, setWholeListLoading] = useState(false)

    const [LoadingRandom, setLoadingRandom] = useState(false)
    const [RandomMovie, setRandomMovie] = useState([])

    const [LoadingoviesData, setLoadingoviesData] = useState(false)
    const [moviesData, setmoviesData] = useState([])

    const [componentRender, setcomponentRender] = useState("list")

    const random_movies = () =>{
        axios.get(BACK_END_URL+MOVIES_RANDOM_LIST)
        .then((response)=>{
            setRandomMovie(response.data)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setLoadingRandom(false)
            setWholeListLoading(false)
        })
    }
    useEffect(() => {
        setWholeListLoading(true)
        random_movies()
    }, [])

  return (
    <>
        <div className="mt-3">
        {LoadingRandom
        ?
                <button
                        disabled
                        type="button"
                        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Loading ...
                </button>
        :
            <button
                    type="button"
                    onClick={()=>{
                        setLoadingRandom(true)
                        setWholeListLoading(true)
                        random_movies()
                    }}
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        List a Movies
            </button>
        }
                <button
                    type="button"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Recommend Movie
                </button>

        </div>
        {WholeListLoading
            ?
                <ShimmerLoading />
            :
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {componentRender=="list"
                ?
                    <ListMoviesData data={RandomMovie}/>
                :
                    <ListMoviesData />
                }


            </motion.div>
        }
    </>
  )
}

export default ListOfMovies