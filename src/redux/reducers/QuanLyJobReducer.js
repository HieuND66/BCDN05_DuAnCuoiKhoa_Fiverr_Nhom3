import { DSCV_THEO_TEN, SET_CHI_TIET_CONG_VIEC } from "../types/QuanLyJobType"

const stateDefault = {
  jobDetail: {
    subType : {}
  },
  DSCVtheoTen:[]
}

 export const QuanLyJobReducer = (state = stateDefault, action) =>{
   switch (action.type) {
    case SET_CHI_TIET_CONG_VIEC : {
      state.jobDetail = action.jobDetail
      return {...state}
    }
    case DSCV_THEO_TEN : {
      state.DSCVtheoTen = action.DSCV
      console.log(state.DSCVtheoTen);
      return {...state}
    }
       
       
   
     default:
        return {...state}
   }
 }