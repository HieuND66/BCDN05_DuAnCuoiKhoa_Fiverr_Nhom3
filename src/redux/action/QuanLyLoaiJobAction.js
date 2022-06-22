
import axios, { Axios } from 'axios';
import { quaLyLoaiJobService } from '../../services/QuaLyLoaiJobService';
import { SET_LOAI_CONG_VIEC } from '../types/QuanLyLoaiJobType';
import { hideLoadingAction, playLoadingAction } from './LoadingAction/LoadingAction';

export const layDanhSachLoaiCongViecAction = (id) => {

  return async (dispatch) => {
    
    try {
      dispatch(playLoadingAction)
      let result = await quaLyLoaiJobService.layDanhSachLoaiCongViec();
      // console.log('result', result.data);
      if (result.status === 200) {
        dispatch({
          type: SET_LOAI_CONG_VIEC,
          loaiCongViec: result.data
        })
      }
      dispatch(hideLoadingAction)
    } catch (error) {
      console.log(error);
    }
  }
}


