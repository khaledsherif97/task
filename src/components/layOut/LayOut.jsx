import React from 'react'
import NavBar from '../navBar/navBar'
import { Col, Row } from 'antd'
import SideBar from '../sideBar/sideBar'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <>
    <NavBar/>
   <Row>
    <Col span={5} className=' bg-white '>
    <SideBar/>
    </Col>
    <Col span={19} className=' bg-body-tertiary px-5 py-2 min-vh-100'>
    <Outlet />
    </Col>
   </Row>
    
    </>
  )
}

export default LayOut