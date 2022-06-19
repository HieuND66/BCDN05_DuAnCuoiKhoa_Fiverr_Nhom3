import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './userInfo.scss'
import { UserOutlined, } from '@ant-design/icons';
import { Avatar } from 'antd';
// import 'antd/dist/antd.css';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { USER_LOGIN } from '../../utils/setting/setting';
import { Redirect } from 'react-router-dom';




export default function UserInfo() {
  let { userInfo } = useSelector(state => state.QuanLyUserReducer)
  // useEffect(() => {
  //   dispatch(layThongTinChiTietCongViecAction(id))
  // }, [])

  console.log(userInfo);
  console.log(userInfo.bookingJob);
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to='/login' />
  }
  return (
    <div className='user container pt-8'>
      <div className="user__left">
        <div className="user__left-info">
          <div className="user__left-info-top">

            <div className="user__left-avatar">
              <Avatar size={64} icon={<UserOutlined />} />
            </div>
            <div className="user__left-name pt-2">
              <h3 className='user-name'>Hieund</h3>
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
            <p className='add-skill py-1'>Add your skill</p>
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

      </div>
    </div>
  )
}
