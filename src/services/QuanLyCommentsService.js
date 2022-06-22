import {http} from '../utils/setting/settingAxios'

// import {baseService} from "./baseServices"
// export class QuanLyCommentsService extends baseService{

//   constructor() {
//     super()
//   }

//   layCommnets = (id) =>{
//     console.log(`/api/jobs/${id}`)
//     // return http.get(`/api/jobs/${id}`)
//     return this.get(`/api/comments/by-job/${id}`)
  
    
//   }
// }

export class QuanLyCommentsService {

  layCommnets = (id) =>{
    return http.get(`/api/comments/by-job/${id}`)
  }
}

export const quanLyCommentsService = new QuanLyCommentsService()