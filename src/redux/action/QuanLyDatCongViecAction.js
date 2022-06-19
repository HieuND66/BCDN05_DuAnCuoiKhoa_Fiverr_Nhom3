
import axios, { Axios } from 'axios';


import { datJobService } from "../../services/DatJobService";
import { SET_DAT_CONG_VIEC } from '../types/QuanLyDatJobType';


// export const layThongTinChiTietCongViecAction = (id) => {

//   return async dispatch => {
//     try {
//       let result = await quanLyJobService.layThongTinCongViec(id);

//       console.log(result);
//       // dispatch({
//       //   type: SET_DANH_SACH_PHIM,
//       //   arrfilm: result.data.content
//       // })
//     } catch (error) {
//       console.log(error);
//     }
//   }

// }




export const layThongTinDatCongViecAction = (id) => {
  return async (dispatch) => {
    try {
      let result = await datJobService.layThongTinDatCongViec(id);
      console.log('result', result.data);
      // if (result.status === 200) {
      //   dispatch({
      //     type: SET_CHI_TIET_CONG_VIEC,
      //     jobDetail: result.data
      //   })
      // }

    } catch (error) {
      console.log(error);
    }
  }
}



