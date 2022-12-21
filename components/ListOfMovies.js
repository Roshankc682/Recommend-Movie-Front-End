import React , {useEffect,useState} from 'react'
import { motion } from "framer-motion"
import axios from 'axios'
import { BACK_END_URL ,MOVIES_RANDOM_LIST, MOVIES_LIST,GET_RECOMMEND_MOVIE } from './urls';
import ListMoviesData from './ListMoviesData'
import ShimmerLoading from './ShimmerLoading';

import { useSelector } from "react-redux"
import toast, { Toaster } from "react-hot-toast";

const ListOfMovies = () => {

    const [WholeListLoading, setWholeListLoading] = useState(false)

    const [LoadingRandom, setLoadingRandom] = useState(false)
    const [RandomMovie, setRandomMovie] = useState([])

    const [LoadingoviesData, setLoadingoviesData] = useState(false)

    const [componentRender, setcomponentRender] = useState("list")

    const [recommendMovieData, setrecommendMovieData] = useState([])

    const [MoviesName, setMoviesName] = useState("")


    const notifysuccess = (message) => toast.success(message);
    const notifyerr = (message) => toast.error(message);

    const random_movies = () =>{
        setLoadingRandom(true)
        setWholeListLoading(true)

        axios.get(BACK_END_URL+MOVIES_RANDOM_LIST)
        .then((response)=>{
            setRandomMovie(response.data)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setLoadingRandom(false)
            setWholeListLoading(false)
            setcomponentRender("list")
        })
    }
    useEffect(() => {
        setWholeListLoading(true)
        random_movies()
    }, [])

    let dat__ = useSelector((state)=>(state._MOBIES_ID_.MoviesId.label))

    useEffect(()=>{
        if(dat__){
              setMoviesName(dat__)
        }else{}
    })

    const _recommend_func = () =>{
        setLoadingoviesData(true)
        let ran = Math.random(Math.random() * 10);
        setcomponentRender(ran)
        axios.get(BACK_END_URL+GET_RECOMMEND_MOVIE+dat__)
        .then((response)=>{
            // console.log(response.data)
            setrecommendMovieData(response.data)
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            console.log("wow...")
            setLoadingoviesData(false)
        })
    }

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
                        setrecommendMovieData([])
                        setcomponentRender("list")
                        random_movies()

                    }}
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        List a Movies
            </button>
        }
        {LoadingoviesData
        ?
            <button
                type="button"
                disabled
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Loading ....
            </button>
        :
            <button
                type="button"
                onClick={()=>{
                    if(MoviesName){}else{
                        notifyerr("Choose movie from above select option and then click Recommend Movie")
                        return false
                    }
                    _recommend_func()
                }}
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Recommend Movie
            </button>
        }

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
                {componentRender == "list"
                ?
                    <ListMoviesData data={RandomMovie}/>
                :
                    null
                }
                {LoadingoviesData
                    ?
                        <ShimmerLoading/>
                    :
                        <ListMoviesData data={recommendMovieData} />
                }


            </motion.div>
        }
    <Toaster />
    </>
  )
}

export default ListOfMovies