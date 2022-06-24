import React, { useEffect } from 'react'
import './header.scss'
import '../../scss/_button.scss'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'
import { useDispatch, useSelector } from 'react-redux';
import style from './header.module.css'
import { TOKEN, USER_LOGIN } from '../../utils/setting/setting'
import { layDanhSachLoaiCongViecAction } from '../../redux/action/QuanLyLoaiJobAction'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';

let idUser = ''
const setUser = () =>{
  
  if(localStorage.getItem(USER_LOGIN)){

   return idUser = JSON.parse(localStorage.getItem(USER_LOGIN)).user._id

  }else{
    return idUser = '123'
    console.log(idUser = '123')
  }
}
setUser()


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" key={'1'} onClick={() => { history.push(`/user/${idUser}`) }}><UserOutlined /> View Profile</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" key={'2'} onClick={() => { history.push('/admin') }}><UserAddOutlined /> Dashboard</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" key={'3'} onClick={() => {
        localStorage.removeItem(USER_LOGIN)
        localStorage.removeItem(TOKEN)
        history.push('/')
      }}><LogoutOutlined /> Log Out</a>
    </Menu.Item>
  </Menu>
);

export const DropdownMenu = () => (
  <Space wrap>
    <Dropdown overlay={menu}>
      <Button className='mx-1'>
        <Space>
          {JSON.parse(localStorage.getItem(USER_LOGIN)).name}
          <DownOutlined />
        </Space>
      </Button>

    </Dropdown>

  </Space>
);
export default function Header() {

  const dispatch = useDispatch();

  const { loaiCongViec } = useSelector(state => state.QuanLyLoaiJobReducer)
  useEffect(() => {
    dispatch(layDanhSachLoaiCongViecAction())
  }, [])
  const rederJobType = () => {
    return loaiCongViec.map((loai, index) => {
      return <li className='menu-tiem px-1 ' key={index}>
        <NavLink to={`/jobtype/${loai._id}`} className='text-gray-500 hover:text-gray-500 font-semibold uppercase'>{loai.name}</NavLink>
      </li>
    })
  }

  // console.log(loaiCongViec);
  return (
    <div id="herader">
      <div className="header-package fiverr-header">
        <div className="header-row-wrapper">
          <div className="header-row row-main container">

            <a href="/?source=top_nav" className="site-logo">
              <svg width={89} height={27} viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="rgb(255, 255, 255)"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z" /></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z" /></g></svg>
            </a>
            <nav className='fiverr-nav fiverr-nav-right'>
              <ul>
                <li className="display-from-md">
                  <a href="/" className="business-nav-link nav-link" target="_blank">Business Tools</a>
                </li>

                <li className="display-from-md">
                  {
                    localStorage.getItem(TOKEN) ? <div className='flex'>
                      <UserOutlined className={`${style.anticon} items-center`} />
                      {/* <p className='mt-1 mb-0 pl-1 text-lg'>{JSON.parse(localStorage.getItem(USER_LOGIN)).hoTen}</p> */}
                      <DropdownMenu />
                    
                    </div> : <>
                    <NavLink to='/login' className=" link-item self-center py-3  text-base font-bold hover:text-green-500  text-white" activeClassName='border-b-2 border-active text-green-500'>SING IN</NavLink>
                    <NavLink to='/signup' className="btn first mx-8 py-3 font-bold hover:text-green-500  text-white" activeClassName='border-b-2 border-active text-green-500'>SING UP</NavLink>

                    </>
                  }
                 
                </li>


              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="CategoriesMenu">
        <ul className='categories container flex flex-wrap'>
          {rederJobType()}
        </ul>
      </div>
    </div>


  )
}
