
import axios, { Axios } from 'axios';
import { quanLyCommentsService } from '../../services/QuanLyCommentsService';
import { SET_COMMENTS } from '../types/QuanLyCommentType';

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




export const layCommentsAction = (id) => {
  
  return async (dispatch) => {
    try {
      let result = await quanLyCommentsService.layCommnets(id);
      // console.log('result', result.data);
      if (result.status === 200) {
        dispatch({
          type: SET_COMMENTS,
          comments: result.data
        })
      }

    } catch (error) {
      console.log(error);
    }
  }
}



