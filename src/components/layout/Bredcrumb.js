import React from 'react'
import {FaAngleRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Bredcrumb = ({title}) => {
  return (
   <div className='mt-[124px] mb-[136px]'>
    <h1 className='font-dm capitalize font-bold text-[49px] text-primary mb-3 '>{window.location.pathname.split('/')[1]}</h1>
        <p className='font-dm text-xs font-normal flex items-center gap-x-2 text-[#767676] '><Link to='/'>Home</Link>  <FaAngleRight/> {window.location.pathname.split('/')[1]}</p>
   </div>
  )
}

export default Bredcrumb