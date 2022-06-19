import { SET_COMMENTS } from "../types/QuanLyCommentType"

const stateDefault = {
  comments: []
}

export const QuanLyCommentsReducer = (state = stateDefault, action) =>{
  
  switch (action.type) {
   case SET_COMMENTS : {
     state.comments = action.comments
     return {...state}
   }
      
      
  
    default:
       return {...state}
  }
}