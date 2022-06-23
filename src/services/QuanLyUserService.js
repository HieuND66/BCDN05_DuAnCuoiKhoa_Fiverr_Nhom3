// import {http} from '../utils/setting/settingAxios'

// import {baseService} from "./baseServices"
// export class QuanLyUserService extends baseService{

//   constructor() {
//     super()
//   }

//   dangNhap = (thongTinDangNhap) =>{

//       return this.post(`/api/auth/signin`, thongTinDangNhap)

//   }
//   signUp = (data) => {
//     return http.post('/api/auth/signup', data)
// }
// }

// // export class QuanLyUserService {

// //   dangNhap = (data) =>{ //thongTinDangNhap: {taikhoan, matkhau}
// //     return this.post(`/api/auth/signin`, data)
// //   }
// // }

// export const quanLyUserService = new QuanLyUserService()

import { http } from '../utils/setting/settingAxios'
export class QuanLyUserService {
  dangNhap = (thongTinDangNhap) => {
    return http.post(`/api/auth/signin`, thongTinDangNhap)

  }
  signUp = (data) => {
    return http.post('/api/auth/signup', data)
  }
}
export const quanLyUserService = new QuanLyUserService()