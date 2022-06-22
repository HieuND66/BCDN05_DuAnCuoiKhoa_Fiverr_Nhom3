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

export class QuanLyJobService {

  layThongTinCongViec = (id) =>{
    return http.get(`/api/jobs/${id}`)
  }
  layDSCVtheoTen = (name) => {
    return http.get(`/api/jobs/by-name?name=${name}`)
}
}

export const quanLyJobService = new QuanLyJobService()