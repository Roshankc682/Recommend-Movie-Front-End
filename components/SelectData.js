import React , { useState , useEffect} from 'react'
import Select from 'react-select';
import axios from 'axios'
import { BACK_END_URL , MOVIES_LIST } from './urls';


const SelectData = () => {

  const [selectedOption, setselectedOption] = useState(null)
  const [options, setoptions] = useState(null)

  const handleChange = (movie_data) => {
    setselectedOption(movie_data)
    console.log(movie_data)
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
    <>
        {options?
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
            :
            <h1>Loading ...</h1>
          }
    </>
  )
}

export default SelectData
