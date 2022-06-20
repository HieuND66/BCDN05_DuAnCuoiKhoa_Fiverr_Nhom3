import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import { QuanLyDatCongViecReducer } from "./reducers/QuanLyDatJobReducer";
import { QuanLyJobReducer } from "./reducers/QuanLyJobReducer";
import {QuanLyCommentsReducer} from "./reducers/QuanLyCommentsReducer"
import {QuanLyUserReducer} from "./reducers/QuanLyUserReducer"
import { QuanLyDanhSachCongViecReducer } from "./reducers/QuanLyDanhSachJobReducer";

const rootReducer = combineReducers({
  QuanLyJobReducer,
  QuanLyDatCongViecReducer,
  QuanLyCommentsReducer,
  QuanLyUserReducer,
  QuanLyDanhSachCongViecReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))