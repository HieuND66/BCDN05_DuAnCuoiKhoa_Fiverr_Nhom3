import { SET_CHI_TIET_CONG_VIEC } from "../types/QuanLyJobType"

const stateDefault = {
  jobDetail: {
    subType : {}
  },
}

 export const QuanLyJobReducer = (state = stateDefault, action) =>{
   switch (action.type) {
    case SET_CHI_TIET_CONG_VIEC : {
      state.jobDetail = action.jobDetail
      return {...state}
    }
       
       
   
     default:
        return {...state}
   }
 }