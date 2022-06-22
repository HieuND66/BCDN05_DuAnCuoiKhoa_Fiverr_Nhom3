import {http} from '../utils/setting/settingAxios'
import {baseService} from "./baseServices"

// export class DatJobService extends baseService{

//   constructor() {
//     super()
//   }

//   layThongTinDatCongViec = (id) =>{
//     console.log(`/api/jobs/${id}`)
//     // return http.get(`/api/jobs/${id}`)
//     return this.patch(`/api/jobs/booking/${id}`)
  
    
//   }
// }

export class DatJobService {

  layThongTinDatCongViec = (id) =>{
    return http.patch(`/api/jobs/booking/${id}`)
  }
}

export const datJobService = new DatJobService()