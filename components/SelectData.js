import React , { useState , useEffect} from 'react'
import Select from 'react-select';
import axios from 'axios'
import { BACK_END_URL , MOVIES_LIST } from './urls';
import { _set_id_ } from './features/MoviesId'
import toast, { Toaster } from "react-hot-toast";

import { useDispatch } from "react-redux"


const SelectData = () => {

  const notifysuccess = (message) => toast.success(message);
  const notifyerr = (message) => toast.error(message);

  const [selectedOption, setselectedOption] = useState(null)
  const [options, setoptions] = useState(null)
  const dispatch = useDispatch()

  const handleChange = (movie_data) => {
    setselectedOption(movie_data)
    dispatch(_set_id_(movie_data));
    notifysuccess("You select "+movie_data["value"]+". Now click on Recommend Movie")
  }

  useEffect(() => {
      axios.get(BACK_END_URL+MOVIES_LIST).then((response) => {
        setoptions(response.data)
      }
      ).catch((err)=>{
        console.log(err)
      })
  }, [])

  return (
    <div className="mt-2 mb-4">
        {options?
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
            :
            <h1 className="text-white font-extrabold">Loading ...</h1>
          }
      <Toaster />
    </div>
  )
}

export default SelectData
