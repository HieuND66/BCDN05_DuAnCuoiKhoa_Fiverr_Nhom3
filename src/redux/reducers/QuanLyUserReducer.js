import { TOKEN, USER_LOGIN } from "../../utils/setting/setting"
import { DANG_NHAP } from "../types/QuanLyUserType"


let user = {};
if(localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
  userLogin: user,
  userInfo: {}
}

 export const QuanLyUserReducer = (state = stateDefault, action) =>{
  
   switch (action.type) {
    case DANG_NHAP: {
      const {thongTinDangNhap} = action;
      // console.log(thongTinDangNhap);
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))
      localStorage.setItem(TOKEN, JSON.stringify(thongTinDangNhap.token))
      return {...state, userLogin:thongTinDangNhap}
    }
       
   
     default:
        return {...state}
   }
 }