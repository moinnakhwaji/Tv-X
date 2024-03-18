import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}
export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        loadperson:(state,actions)=>{
            state.info = actions.payload
        },
        removeperson:(state,actions)=>{
            state.info = null
        }

    },
})
     
      
  
  // Action creators are generated for each case reducer function
  export const {loadperson,removeperson} = personSlice.actions
  
  export default personSlice.reducer