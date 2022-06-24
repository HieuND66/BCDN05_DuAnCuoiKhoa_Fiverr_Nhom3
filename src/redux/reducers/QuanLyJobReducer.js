import { DSCV_THEO_TEN, LAY_DSCV_THEO_CV_CHINH, LAY_TT_LOAI_CV_CHINH, SET_CHI_TIET_CONG_VIEC } from "../types/QuanLyJobType"

const stateDefault = {
  jobDetail: {
    subType : {}
  },
  DSCVtheoTen:[],
  DSLoaiCVChinh:[],
  DSTheoLoaiCVChinh:[],
  tenCVChinh:'',
}

 export const QuanLyJobReducer = (state = stateDefault, action) =>{
   switch (action.type) {
    case SET_CHI_TIET_CONG_VIEC : {
      state.jobDetail = action.jobDetail
      return {...state}
    }
    case DSCV_THEO_TEN : {
      state.DSCVtheoTen = action.DSCV
      return {...state}
    }
    case LAY_TT_LOAI_CV_CHINH : {
      state.DSLoaiCVChinh = action.dsCVChinh
      state.tenCVChinh = action.tenCVChinh
      return {...state}
    }
    case LAY_DSCV_THEO_CV_CHINH : {
      state.DSTheoLoaiCVChinh = action.dsCV;
      return {...state}
    }
       
     default:
        return {...state}
   }
 }