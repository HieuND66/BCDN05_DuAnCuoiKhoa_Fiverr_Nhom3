import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { QuanLyDatCongViecReducer } from "./reducers/QuanLyDatJobReducer";
import { QuanLyJobReducer } from "./reducers/QuanLyJobReducer";
import {QuanLyCommentsReducer} from "./reducers/QuanLyCommentsReducer"
import {QuanLyUserReducer} from "./reducers/QuanLyUserReducer"
import { QuanLyDanhSachCongViecReducer } from "./reducers/QuanLyDanhSachJobReducer";
import { QuanLyLoaiJobReducer } from "./reducers/QuanLyLoaiJobReducer";
import { LoadingReducer } from "./reducers/LoadingReducer/LoadingReducer";

const rootReducer = combineReducers({

  QuanLyJobReducer,
  QuanLyDatCongViecReducer,
  QuanLyCommentsReducer,
  QuanLyUserReducer,
  QuanLyDanhSachCongViecReducer,
  QuanLyLoaiJobReducer,
  LoadingReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))