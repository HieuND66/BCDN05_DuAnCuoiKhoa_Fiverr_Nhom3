import React, { useEffect } from 'react'
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import './joblist.scss'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachCongViecAction } from '../../redux/action/QuanLyJobAction';


export default function JobList() {

  const dispatch = useDispatch();
  const { danhSachCongViec } = useSelector(state => state.QuanLyDanhSachCongViecReducer)
  useEffect(() => {
    dispatch(layDanhSachCongViecAction())
  }, [])
  // console.log(danhSachCongViec);
  let imgBackUp = 'https://fiverr.cybersoft.edu.vn/public/images/job/1636645826542_design-professional-wix-website-b6ab.jpg'
  const imageCard = (job) =>{
    if(job.subType){
      if(job.image && job.subType.image){
        return <img src={job.subType.image} alt="" />
      }else{
        return <img src={imgBackUp} alt="" />
      }
    } else if(job.image){
      return <img src={job.image} alt="" />
    } else{
      return <img src={imgBackUp} alt="" />
    }
    
    
  }
  const renderListJob = () => {
    return danhSachCongViec.slice(0,80).map((job, index) => {
      return <NavLink to={`/job/${job._id}`}  key={index} className={job._id ? 'card' : 'card card-none'}>
        <div className="card-header">
      {/* {job.subType ? <img src={job.subType.image ? job.subType.image  : job.image}  alt="rover"/>: <img src={job.image} alt="rover"/>} */}
      {imageCard(job)}
        </div>
        <div className="card-body">
          <div className="card-body__header h-24">

          <div className="user">
            <img src={job.image ? job.image : imgBackUp} alt="user" />
            <div className="user-info">
              <h5>{job.subType ? job.subType.name : 'Mack Kavein'}</h5>
            </div>
          </div>
          <h4>
           {job.name ? job.name.slice(0, 50) : 'Do outstanding roll up banner design'}
          </h4>
          </div>
          <div className="stars pt-2">
            <AiFillStar className='text-yellow-400 ' />
            <p className='point text-yellow-500 '>{job.rating}</p>
            <p className='bought text-gray-400'>(150)</p>
          </div>
        </div>
        <div className="card-footer flex justify-between items-center">
          <AiFillHeart className='text-gray-400' />
          <div className="card-price flex items-center">
            <p className='text-gray-500 text-xs font-medium'>STARTING AT</p>
            <p className='text-gray-700 text-sm font-medium pl-2'>${job.price}</p>
          </div>
        </div>
      </NavLink>
    })
  }
  return (
    <div className="container">
      <div className='grid grid-cols-4 gap-12 pt-8'>
        {renderListJob()}
        {/* <NavLink to='/job/618d3a5895d99f001c0c0ce8' className="card">
          <div className="card-header">
            <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
          </div>
          <div className="card-body">
            <div className="user">
              <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
              <div className="user-info">
                <h5>July Dec</h5>
              </div>
            </div>
            <h4>
              Why is the Tesla Cybertruck designed the way it?
            </h4>
            <div className="stars ">
              <AiFillStar className='text-yellow-400 ' />
              <p className='point text-yellow-500 '>4.9</p>
              <p className='bought text-gray-400'>(150)</p>
            </div>
          </div>
          <div className="card-footer flex justify-between items-center">
            <AiFillHeart className='text-gray-400' />
            <div className="card-price flex items-center">
              <p className='text-gray-500 text-xs font-medium'>STARTING AT</p>
              <p className='text-gray-700 text-sm font-medium pl-2'>$15</p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/job/618d3abc95d99f001c0c0cf7' className="card">
          <div className="card-header">
            <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="ballons" />
          </div>

          <div className="card-body">
            <div className="user">
              <img src="https://i.pravatar.cc/300" alt="user" />
              <div className="user-info">
                <h5>July Dec</h5>
              </div>
            </div>
            <h4>
              Why is the Tesla Cybertruck designed the way it?
            </h4>
            <div className="stars ">
              <AiFillStar className='text-yellow-400 ' />
              <p className='point text-yellow-500 '>4.9</p>
              <p className='bought text-gray-400'>(150)</p>
            </div>
          </div>
          <div className="card-footer flex justify-between items-center">
            <AiFillHeart className='text-gray-400' />
            <div className="card-price flex items-center">
              <p className='text-gray-500 text-xs font-medium'>STARTING AT</p>
              <p className='text-gray-700 text-sm font-medium pl-2'>$15</p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/job/618d3b6495d99f001c0c0d0d' className="card">
          <div className="card-header">
            <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
          </div>
          <div className="card-body">
            <div className="user">
              <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
              <div className="user-info">
                <h5>July Dec</h5>
              </div>
            </div>
            <h4>
              Why is the Tesla Cybertruck designed the way it?
            </h4>
            <div className="stars ">
              <AiFillStar className='text-yellow-400 ' />
              <p className='point text-yellow-500 '>4.9</p>
              <p className='bought text-gray-400'>(150)</p>
            </div>
          </div>
          <div className="card-footer flex justify-between items-center">
            <AiFillHeart className='text-gray-400' />
            <div className="card-price flex items-center">
              <p className='text-gray-500 text-xs font-medium'>STARTING AT</p>
              <p className='text-gray-700 text-sm font-medium pl-2'>$15</p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/job/618d3abc95d99f001c0c0cf7' className="card">
          <div className="card-header">
            <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="ballons" />
          </div>

          <div className="card-body">
            <div className="user">
              <img src="https://i.pravatar.cc/300" alt="user" />
              <div className="user-info">
                <h5>July Dec</h5>
              </div>
            </div>
            <h4>
              Why is the Tesla Cybertruck designed the way it?
            </h4>
            <div className="stars ">
              <AiFillStar className='text-yellow-400 ' />
              <p className='point text-yellow-500 '>4.9</p>
              <p className='bought text-gray-400'>(150)</p>
            </div>
          </div>
          <div className="card-footer flex justify-between items-center">
            <AiFillHeart className='text-gray-400' />
            <div className="card-price flex items-center">
              <p className='text-gray-500 text-xs font-medium'>STARTING AT</p>
              <p className='text-gray-700 text-sm font-medium pl-2'>$15</p>
            </div>
          </div>
        </NavLink> */}
      </div>
    </div>

  )
}
