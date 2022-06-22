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

//   dangNhap = (data) =>{ //thongTinDangNhap: {taikhoan, matkhau}
//     return this.post(`/api/auth/signin`, data)
//   }
// }

export const quanLyUserService = new QuanLyUserService()