import React from 'react'
import not from "../../assets/NOT FOUND.png"

const NotFound = () => {
  return (
    <div className='w-50 mx-auto  rounded-4  shadow-lg'>
        <img src={not} className='w-100  rounded-4 '/>
    </div>
  )
}

export default NotFound