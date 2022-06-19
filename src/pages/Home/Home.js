import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import JobList from '../JobList/JobList'

import HomeCarousel from './HomeCarousel/HomeCarousel'
import { layThongTinChiTietCongViecAction } from '../../redux/action/QuanLyJobAction';
export default function Home(props) {
     const dispatch = useDispatch();
     useEffect(() => {
          let {id} = props.match.params;
          dispatch(layThongTinChiTietCongViecAction(id))
          //lay thong tin url
          // let id  = '618d3a5895d99f001c0c0ce8'
          // dispatch(layThongTinCongViec(id))
        }, [])
     return (
          <div>
               <HomeCarousel />
               <JobList/>
          </div>
     )
}