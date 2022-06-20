import { SET_CHI_TIET_CONG_VIEC } from "../types/QuanLyJobType"
import { SET_LOAI_CONG_VIEC } from "../types/QuanLyLoaiJobType"

const stateDefault = {

  loaiCongViec: []
}

 export const QuanLyLoaiJobReducer = (state = stateDefault, action) =>{
   switch (action.type) {
    case SET_LOAI_CONG_VIEC : {
      state.loaiCongViec = action.loaiCongViec
      return {...state}
    }
       
       
   
     default:
        return {...state}
   }
 }