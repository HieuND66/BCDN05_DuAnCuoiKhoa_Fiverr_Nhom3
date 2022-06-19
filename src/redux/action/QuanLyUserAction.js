
import { quanLyUserService } from '../../services/QuanLyUserService';
import { DANG_NHAP } from '../types/QuanLyUserType';

import {history} from '../../App'




export const DangNhapAction = (thongTinDangNhap) => {
  // console.log(thongTinDangNhap);
  return async (dispatch) => {
    try {
      let result = await quanLyUserService.dangNhap(thongTinDangNhap);

      // console.log('result', result.data);
      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP,
          thongTinDangNhap: result.data
        })
        //Chuyển hướng đăng nhập về trang trước đó
        alert('You have succesfully signed in our website.')
        history.goBack()//chuyển hướng về trang trước đó
      }

    } catch (error) {
      console.log(error.response.data);
    }
  }
}



