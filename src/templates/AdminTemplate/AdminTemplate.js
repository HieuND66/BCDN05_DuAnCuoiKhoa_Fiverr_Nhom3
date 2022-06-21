import React from 'react'
import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Fragment } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function AdminTemplate(props) {
     const { Component, ...restProps } = props;
     const [collapsed, setCollapsed] = useState(false);

     const onCollapse = (collapsed) => {
          // console.log(collapsed);
          setCollapsed(collapsed);
     };
     useEffect(() => {
          window.scrollTo(0, 0)
     })

     return <Route {...restProps} render={(propsRoute) => {
          return <Fragment>
               <Layout style={{ minHeight: '100vh', }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                         <div className="logo" style={{ color: "green", textAlign: "center", paddingTop: "5px", fontSize: "32px" }}>
                              <span>Fiver</span>
                         </div>
                         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                              <SubMenu key={"sub1"} icon={<UserOutlined />} title="User">
                                   <Menu.Item key="19" icon={<UserOutlined />}>
                                        <NavLink to="/admin/user">User</NavLink>
                                   </Menu.Item>
                                   <Menu.Item key="20" icon={<UserOutlined />}>
                                        <NavLink to="/admin/user/add">Add User</NavLink>
                                   </Menu.Item>
                              </SubMenu>
                         </Menu>
                    </Sider>
                    <Layout className="site-layout">
                         <Header className="site-layout-background" style={{ padding: 0, }}>

                         </Header>
                         <Content style={{ padding: "40px" }}>
                              <div>
                                   {/* <Component {...restProps} /> */}
                                   Bill is a cat.
                              </div>
                         </Content>
                    </Layout>
               </Layout>
          </Fragment>
     }}>

     </Route>
}
