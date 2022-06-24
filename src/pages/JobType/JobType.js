import { Redirect, Route } from "react-router-dom"
import { Fragment, useEffect } from "react"
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { layDSCVTheoCVChinhAction, layTTLoaiCVChinhAction } from "../../redux/action/QuanLyJobAction";
import { useDispatch, useSelector } from "react-redux";
import './JobType.scss'
import { history } from "../../App";

export const JobType = (props) => {
    const { Header, Content, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const { DSLoaiCVChinh,tenCVChinh } = useSelector(state => state.QuanLyJobReducer)
    useEffect(() => {
        dispatch(layTTLoaiCVChinhAction(props.match.params.id))
    }, [props.match.params.id])
        return <div className="container dsCongViec mt-5">
            <h1 className="text-center text-2xl uppercase my-4">{tenCVChinh}</h1>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} className="hidden md:block">
                    <div className="logo" />

                    <Menu  defaultSelectedKeys={['1']} mode="inline">
                        {
                            DSLoaiCVChinh.map((CVChinh, index) => {
                                return <Menu.Item key={index} >
                                    <p  onClick={() => { history.push('/joblist') }}>{CVChinh.name}</p>
                                </Menu.Item>
                            })
                        }

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className=""
                    >
                        <div className="flex flex-wrap">
                        {DSLoaiCVChinh.map((cv, index) => {
                            return <div key={index} className='w-full md:w-1/2 lg:w-1/3 p-2 cursor-pointer' onClick={() => { history.push('/joblist') }}>
                                <div className="max-w-xs p-6 rounded-md shadow-md bg-green-400">
                                    <img src={cv.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    <div className="mt-6 mb-2">
                                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{cv.name}</span>
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
