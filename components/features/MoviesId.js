import { createSlice } from '@reduxjs/toolkit'


const initialStateValue = {
    MoviesId:  [],
}

export const counterSlice = createSlice({
 name: '_MOBIES_ID_',
 initialState: initialStateValue,
 reducers: {
    _set_id_: (state,action) => {
        state.MoviesId = action.payload
       },
    _del_id_: (state,action) => {
    state.MoviesId = null
    }
 },
})


export const {_set_id_,_del_id_} = counterSlice.actions

export default counterSlice.reducer

