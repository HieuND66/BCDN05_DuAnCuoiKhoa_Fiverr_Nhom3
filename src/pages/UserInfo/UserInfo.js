import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './userInfo.scss'
import { UserOutlined, } from '@ant-design/icons';
import { Avatar } from 'antd';
// import 'antd/dist/antd.css';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { USER_LOGIN } from '../../utils/setting/setting';
import { Redirect } from 'react-router-dom';
import { layThongTinChiTietCongViecAction } from '../../redux/action/QuanLyJobAction';
import { AiFillStar } from "react-icons/ai";



export default function UserInfo() {
  
  const dispatch = useDispatch();
  let { userInfo } = useSelector(state => state.QuanLyUserReducer)
  const {jobDetail} = useSelector(state => state.QuanLyJobReducer)
  const userLocal = JSON.parse(localStorage.getItem(USER_LOGIN)).user

   console.log(userLocal.bookingJob[0]);
  useEffect(() => {
    dispatch(layThongTinChiTietCongViecAction(userLocal.bookingJob[0]))
  
  }, []);
  
  let sliceImg = ''
  if (jobDetail.subType) {
    sliceImg = jobDetail.subType.image
  } else {
    sliceImg = jobDetail.image
  }
 
  const renderJobBooking = () =>{
    return  <div className="container-checkout ">
    <img src={sliceImg} alt="Pancake" />
    <div className="container__text leading-8">
      <h1>{jobDetail.subType ? jobDetail.subType.name : jobDetail.name}</h1>
      <div className="stars text-2xl ">
        <AiFillStar className='text-yellow-400 pr-1' />
        <AiFillStar className='text-yellow-400 pr-1' />
        <AiFillStar className='text-yellow-400 pr-1' />
        <AiFillStar className='text-yellow-400 pr-1' />
        <AiFillStar className='text-yellow-400 pr-1' />

        <p className="point text-yellow-500 px-1 mb-0">{jobDetail.rating}</p>
        <p className="bought mb-0 pl-1">(150)</p>
      </div>
  
      <p className="py-2 text-xl uppercase">
      {jobDetail.name}
      </p>

    </div>
  </div>
   }
 
  const rednerSkill = () =>{
   return userLocal.skill.map((skil, indx) =>{
    return <p className='add-skill py-1' key={indx}>{skil}</p>
    })
  }
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to='/login' />
  }
  return (
    <div className='user container pt-8 flex justify-between'>
      <div className="user__left">
        <div className="user__left-info">
          <div className="user__left-info-top">

            <div className="user__left-avatar">
             
                <img src={userLocal.avatar} alt="" />
              
            </div>
            <div className="user__left-name pt-2">
              <h3 className='user-name'>{userLocal.name}</h3>
            </div>
            <div className="user__left-edit text-xl">
              <EditOutlined />
            </div>
          </div>
          <div className="user__left-info-bottom">

          </div>
        </div>
        <div className="user__left-contact mt-4">
          <div className="user__left-contact-des pb-6">
            <p>Description</p>
            <button className='user-edti'>Edit Description</button>
          </div>
          <div className="user__left-contact-languges pt-3 pb-6">
            <div className="user__left-contact-languges-header ">
              <p>Languges</p>
              <button className='user-edit'>Add New</button>
            </div>
            <ul className='pt-1'>
              <li>English</li>
            </ul>
          </div>
          <div className="user__left-contact-link  pt-3">
            <div className="user-facebook flex pb-2">
              <PlusOutlined className='pr-4 cursor-pointer' />
              <p>Facebook</p>
            </div>
            <div className="user-google flex pb-2">
              <PlusOutlined className='pr-4 cursor-pointer ' />
              <p>Google</p>
            </div>
            <div className="user-github flex pb-2">
              <PlusOutlined className='pr-4 cursor-pointer ' />
              <p>Github</p>
            </div>
          </div>
          <div className="user__left-contact-skill pb-4 ">
            <div className="skill-wrap flex justify-between">
              <p>Skill</p>
              <button className='user-edit'>Add New</button>
            </div>
            
            {rednerSkill()}
            <p className='add-skill py-1'>Add your skill...</p>
          </div>
          <div className="user__left-contact-skill pb-4 ">
            <div className="skill-wrap flex justify-between">
              <p>Education</p>
              <button className='user-edit '>Add New</button>
            </div>
            <p className='add-skill py-1'>Add your education</p>
          </div>
          <div className="user__left-contact-skill pb-4 ">
            <div className="skill-wrap flex justify-between">

              <p>Certlfication</p>
              <button className='user-edit'>Add New</button>
            </div>
            <p className='add-skill py-1'>Add your certlfication</p>
          </div>
        </div>
      </div>
      <div className="user__right">
        <h1 className='text-gray-500 py-6 text-xl'>List of purchased products</h1>
      {renderJobBooking()}
      </div>
    </div>
  )
}
