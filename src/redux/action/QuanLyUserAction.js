
import { quanLyUserService } from '../../services/QuanLyUserService';
import { DANG_NHAP } from '../types/QuanLyUserType';
import {history} from '../../App'
import { message } from 'antd';


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

export const signUp = (infoRegister) => {
  return async (dispatch) => {
      try {
          const result = await quanLyUserService.signUp(infoRegister)
          if (result.status === 201) {
              message.success('Bạn đã đăng kí thành công')
              history.push('/login')//chuyển hướng về trang đăng nhập
          }
      }
      catch (error) {
          message.error(`Vui lòng điền lại thông tin`);
      }
  }
}
