import {http} from '../utils/setting/settingAxios'


export class QuanLyJobService {

  layThongTinCongViec = (id) =>{
    return http.get(`/api/jobs/${id}`)
  }
  layDSCVtheoTen = (name) => {
    return http.get(`/api/jobs/by-name?name=${name}`)
}
  layTTLoaiCVChinh = (id) => {
    return http.get(`/api/type-jobs/${id}`)
}
  layDSCVTheoCVChinh = (type) => {
    return http.get(`/api/jobs/by-type?type=${type}&skip=0&llimit=15`)
}

}

export const quanLyJobService = new QuanLyJobService()