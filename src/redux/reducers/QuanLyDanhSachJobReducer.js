import { SET_DANH_SACH_CONG_VIEC } from "../types/QuanLyDanhSachJob"

const stateDefault = {
  danhSachCongViec: []
}

export const QuanLyDanhSachCongViecReducer = (state = stateDefault, action) =>{

  switch (action.type) {
   case SET_DANH_SACH_CONG_VIEC : {
     state.danhSachCongViec = action.danhSachCongViec
     return {...state}
   }
      
      
  
    default:
       return {...state}
  }
}