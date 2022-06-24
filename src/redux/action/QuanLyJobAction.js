
import axios, { Axios } from 'axios';
import { quanLyDanhSachJobService } from '../../services/QuanLyDanhSachJobService';
import { quanLyJobService } from "../../services/QuanLyJobService";
import { SET_DANH_SACH_CONG_VIEC } from '../types/QuanLyDanhSachJob';
import { DSCV_THEO_TEN, LAY_DSCV_THEO_CV_CHINH, LAY_TT_LOAI_CV_CHINH, SET_CHI_TIET_CONG_VIEC } from '../types/QuanLyJobType';

export const layThongTinChiTietCongViecAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await quanLyJobService.layThongTinCongViec(id);
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

export const layTTLoaiCVChinhAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await quanLyJobService.layTTLoaiCVChinh(id);
      if (result.status === 200) {
        dispatch({
          type: LAY_TT_LOAI_CV_CHINH,
          dsCVChinh: result.data.subTypeJobs,
          tenCVChinh: result.data.name,
        })
      }

    } catch (error) {
      console.log(error);
    }
  }
}
export const layDSCVTheoCVChinhAction = (type) => {
  return async (dispatch) => {
    try {
      let result = await quanLyJobService.layDSCVTheoCVChinh(type);
      if (result.status === 200) {
        console.log(result.data);
        dispatch({
          type: LAY_DSCV_THEO_CV_CHINH,
          dsCV: result.data
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
}