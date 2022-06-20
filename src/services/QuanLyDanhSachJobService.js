import {http} from '../utils/setting/settingAxios'

// import {baseService} from "./baseServices"
// export class QuanLyJobService extends baseService{

//   constructor() {
//     super()
//   }

//   layThongTinCongViec = (id) =>{
//     console.log(`/api/jobs/${id}`)
//     // return http.get(`/api/jobs/${id}`)
//     return this.get(`/api/jobs/${id}`)
  
    
//   }
// }

export class QuanLyDanhSachJobService {

  layDanhSachCongViec = () =>{
    return http.get(`/api/jobs`)
  }
}

export const quanLyDanhSachJobService = new QuanLyDanhSachJobService()