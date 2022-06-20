
import axios, { Axios } from 'axios';
import { quaLyLoaiJobService } from '../../services/QuaLyLoaiJobService';
import { SET_LOAI_CONG_VIEC } from '../types/QuanLyLoaiJobType';



export const layDanhSachLoaiCongViecAction = (id) => {

  return async (dispatch) => {
    
    try {
      let result = await quaLyLoaiJobService.layDanhSachLoaiCongViec();
      console.log('result', result.data);
      if (result.status === 200) {
        dispatch({
          type: SET_LOAI_CONG_VIEC,
          loaiCongViec: result.data
        })
      }

    } catch (error) {
      console.log(error);
    }
  }
}


