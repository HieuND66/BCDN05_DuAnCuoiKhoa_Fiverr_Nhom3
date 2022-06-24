import { Redirect, Route } from "react-router-dom"
import { Fragment, useEffect } from "react"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AppstoreAddOutlined,
    UserOutlined,
    LoginOutlined,
    BarsOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { layDSCVTheoCVChinhAction, layTTLoaiCVChinhAction } from "../../redux/action/QuanLyJobAction";
import { useDispatch, useSelector } from "react-redux";
import './JobType.scss'

export const JobType = (props) => {
    const { Header, Content, Sider } = Layout;
    // const { SubMenu } = Menu;

    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();

    const { DSLoaiCVChinh, DSTheoLoaiCVChinh } = useSelector(state => state.QuanLyJobReducer)
    console.log(DSLoaiCVChinh);
    console.log(DSTheoLoaiCVChinh);
    useEffect(() => {
        dispatch(layTTLoaiCVChinhAction())
    }, [])

        return <div className="container dsCongViec">
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />

                    <Menu  defaultSelectedKeys={['1']} mode="inline">
                        {
                            DSLoaiCVChinh.map((CVChinh, index) => {
                                return <Menu.Item key={index} >
                                    {/* <NavLink to={`/jobtype/${CVChinh._id}`}>{CVChinh.name}</NavLink> */}
                                    <p onClick={() => {
                                        dispatch(layDSCVTheoCVChinhAction(CVChinh.typeJob))
                                    }}>{CVChinh.name}</p>
                                </Menu.Item>
                            })
                        }

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className=""
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <div className="flex flex-wrap">
                        {DSLoaiCVChinh.map((cv, index) => {
                            return <div key={index} className='w-1/3 p-2'>
                                <div className="max-w-xs p-6 rounded-md shadow-md bg-emerald-400">
                                    <img src={cv.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    <div className="mt-6 mb-2">
                                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{cv.name}</span>
                                        {/* <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2> */}
                                    </div>
                                </div>
                            </div>
                        })}
                        </div>

                    </Content>
                </Layout>
            </Layout>



        </div>
}
