import React from 'react'
import { Col, Row } from "antd"

import pro from "../../assets/profile-img.jpg"
import { AlertTwoTone, MessageTwoTone } from "@ant-design/icons";

const NavBar = () => {
  return (
    <div className="w-100 bg-white border-bottom border-1 border-primary">
    <Row>
        <Col span={8}>
        <h2 className="fs-3 ps-5 text-primary text-start pt-2 fw-bold">NiceAdmin</h2>
        
        </Col>

      
        <Col span={8} offset={8} >
        <Row>
          
        <Col span={4} >
        {/*  {i18n.language == "en" && <button onClick={() => { i18n.changeLanguage("ar"); }
       } className='btn btn-outline-primary w-100 mt-2'> Arabic</button>}
       {i18n.language == "ar" && <button onClick={() => { i18n.changeLanguage("en"); }
       } className='btn btn-outline-primary w-100 mt-2'> English</button>}
    */}
       
     
       </Col>
            <Col span={2} offset={6}><AlertTwoTone className="fs-5 pt-3" /></Col>
            <Col span={2}><MessageTwoTone className="fs-5 pt-3" /></Col>
            <Col span={8}><img src={pro} className="w-25  rounded-circle mt-1 "/> </Col>
        </Row>
     
        </Col>

    </Row>

  </div>
  )
}

export default NavBar