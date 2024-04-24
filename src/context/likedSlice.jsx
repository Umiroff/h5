import { createSlice } from "@reduxjs/toolkit"

export const likedSlice = createSlice({
    name: 'liked',
    initialState: {
        value: []
    },
    reducers: {
      toggleLiked(state, action) {

      }
    },
  })
  
  export const { toggleLiked } = likedSlice.actions
  
  export default likedSlice.reducer