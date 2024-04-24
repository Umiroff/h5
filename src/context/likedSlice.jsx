import { createSlice } from "@reduxjs/toolkit"

export const likedSlice = createSlice({
    name: 'liked',
    initialState: {
        value: JSON.parse(localStorage.getItem('wishlist')) || []
    },
    reducers: {
      toggleLiked(state, action) {
        let index = state.value.findIndex((el) => el.id === action.payload.id)
        if(index < 0) {
          state.value = [...state.value, action.payload]
        } else {
          state.value = state.value.filter(el => el.id !== action.payload.id)
        }
        localStorage.setItem('wishlist', JSON.stringify(state.value))
      }
    },
  })
  
  export const { toggleLiked } = likedSlice.actions
  
  export default likedSlice.reducer