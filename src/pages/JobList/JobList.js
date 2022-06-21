import React, { useEffect } from 'react'
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import './joblist.scss'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachCongViecAction } from '../../redux/action/QuanLyJobAction';
import { layDanhSachLoaiCongViecAction } from '../../redux/action/QuanLyLoaiJobAction';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';


export default function JobList() {

  const dispatch = useDispatch();
  const { danhSachCongViec } = useSelector(state => state.QuanLyDanhSachCongViecReducer)

  useEffect(() => {
    dispatch(layDanhSachCongViecAction())
  }, [])
  // console.log(loaiCongViec);
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
    return danhSachCongViec.slice(0,28).map((job, index) => {
      return <NavLink to={`/job/${job._id}`}  key={index} className='card'>
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


  const [jobs, setJob] = useState(danhSachCongViec.slice(0,120));
  const [pageNumber, setPageNumber] = useState(0);
  const jobPerPage = 12
  const pageVisited = pageNumber * jobPerPage
  const displayJob = () => {

    return jobs.slice(pageVisited, pageVisited + jobPerPage).map((job, index) =>{
     return <NavLink to={`/job/${job._id}`}  key={index} className='card'>
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
  const pageCount = Math.ceil(jobs.length / jobPerPage);
  const changePage = ({selected}) =>{
    setPageNumber(selected) 
  }
  return (
    <div className="container">
      <div className='grid grid-cols-4 gap-12 pt-8'>
        
        {/* {displayJob()} */}
        {renderListJob()}
      </div>
      {/* <div className="pagination w-3/4 float-right my-12">

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={'Next'}
          pageCount= {pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousClassName={"previousBttn"}
          nextClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div> */}
    </div>

  )
}
