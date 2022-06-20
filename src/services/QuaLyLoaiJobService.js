import {http} from '../utils/setting/settingAxios'



export class QuaLyLoaiJobService {

  layDanhSachLoaiCongViec = () =>{
    return http.get(`/api/type-jobs`)
  }
}

export const quaLyLoaiJobService = new QuaLyLoaiJobService()