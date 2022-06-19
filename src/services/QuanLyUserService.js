import {http} from '../utils/setting/settingAxios'

import {baseService} from "./baseServices"
export class QuanLyUserService extends baseService{

  constructor() {
    super()
  }

  dangNhap = (thongTinDangNhap) =>{

      return this.post(`/api/auth/signin`, thongTinDangNhap)

  
    
  }
}

// export class QuanLyUserService {

//   dangNhap = (thongTinDangNhap) =>{ //thongTinDangNhap: {taikhoan, matkhau}
//     return http.post(`/api/auth/signin`, thongTinDangNhap)
//   }
// }

export const quanLyUserService = new QuanLyUserService()