
import axios, { Axios } from 'axios';
import { quanLyDanhSachJobService } from '../../services/QuanLyDanhSachJobService';


import { quanLyJobService } from "../../services/QuanLyJobService";
import { SET_DANH_SACH_CONG_VIEC } from '../types/QuanLyDanhSachJob';
import { DSCV_THEO_TEN, SET_CHI_TIET_CONG_VIEC } from '../types/QuanLyJobType';

// export const layThongTinChiTietCongViecAction = (id) => {

//   return async dispatch => {
//     try {
//       let result = await quanLyJobService.layThongTinCongViec(id);

//       console.log(result);
//       // dispatch({
//       //   type: SET_DANH_SACH_PHIM,
//       //   arrfilm: result.data.content
//       // })
//     } catch (error) {
//       console.log(error);
//     }
//   }

// }




export const layThongTinChiTietCongViecAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await quanLyJobService.layThongTinCongViec(id);
      // console.log('result', result.data);
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_CONG_VIEC,
          jobDetail: result.data
        })
      }

    } catch (error) {
      console.log(error);
    }
  }
}

export const layDanhSachCongViecAction = (id) => {
  return async (dispatch) => {
    
    try {
      let result = await quanLyDanhSachJobService.layDanhSachCongViec();
      // console.log('result', result.data);
      if (result.status === 200) {
        dispatch({
          type: SET_DANH_SACH_CONG_VIEC,
          danhSachCongViec: result.data
        })
      }

    } catch (error) {
      console.log(error);
    }
  }
}

export const layDSCVtheoTenAction = (name) => {
  return async (dispatch) => {
    try {
      console.log(name);
      let result = await quanLyJobService.layDSCVtheoTen(name);
      console.log('result', result);
      if (result.status === 200) {
        dispatch({
          type: DSCV_THEO_TEN,
          DSCV: result.data
        })
        console.log(result);
      }

    } catch (error) {
      console.log(error);
    }
  }
}
