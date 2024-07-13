import React from 'react'
import { useState } from 'react';
import logo from "../../assets/Untitled design.png"

import {
  AppstoreOutlined,
  BarChartOutlined,
  BankOutlined,
  UserOutlined,

} from '@ant-design/icons';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';



const items= [
 
  {
    key: 'sub1',
    label: 'Customer Data Dashboard',
    icon:<AppstoreOutlined className='me-2 fs-5' />,
    children: [
      { key: '1', label: <Link to={"/"} className='text-decoration-none '><BankOutlined className='me-2 fs-5'/>Home</Link>},
      { key: '2', label:  <Link to={"/user"}  className='text-decoration-none'><UserOutlined className='me-2 fs-5'/>All User</Link> },
      { key: '3', label:  <Link to={"/vi"} className='text-decoration-none'><BarChartOutlined className='me-2 fs-5'/>All transactions</Link> },
     
    ],
  },
 
 
 
 
];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <div className='py-3'>
        <div className='w-50 mx-auto'>
        <img src={logo} className='w-75'/>
        </div>
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
     
      inlineCollapsed={collapsed}
      items={items}
    />
  </div>
    </>
  )
}

export default SideBar