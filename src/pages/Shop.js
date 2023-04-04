import React, { useState,useEffect,useRef } from 'react'
import Bredcrumb from '../components/layout/Bredcrumb';
import LeftSidebar from '../components/layout/LeftSidebar';
import Pagination from '../components/layout/Pagination';
import Container from './../components/layout/Container';
import Flex from './../components/layout/Flex'
import {BsFilterCircleFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

const Shop = () => {
  let [show,setShow]=useState(true)

  
  let [showNumber , setShowNumber]=useState(12)
  let handlepaginationClick=(e)=>{
    setShowNumber(e.target.value)
  }

  useEffect(()=>{
    function scrollWidth(e){
        if(window.innerWidth <1024){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    scrollWidth()
    window.addEventListener('resize',scrollWidth)
},[])

  return (
    <Container>
        <Bredcrumb title='Product'/>
        <Flex className='flex gap-x-10 mt-[130px] relative'>
          {show&& 
          (
            <div  className='w-full sm:w-[25%] z-50 bg-[#f5efef] sm:bg-transparent absolute sm:static top-0 left-0 p-5 '>
            <AiFillCloseCircle className='md:hidden' onClick={()=>setShow(false)}/>
            <LeftSidebar/>
          </div>
          )
          }
          
            <div className='w-full sm:w-[75%] relative'>
            <div className='sm:flex sm:max-md:mt-2 gap-x-10 justify-end mb-14'>
            <div className='flex items-end mb-4'>
            <BsFilterCircleFill onClick={()=>setShow(!show)} className='inline-block md:hidden text-2xl text-[#767676]'/>
            </div>
            <div className='flex  items-center gap-x-4'>
            <div>
            <span className='font-dm font-normal text-lg text-[#767676]'>Sort by:</span>
            </div>
            <select id="countries" class=" md:w-[239px] border border-solid border-[#F0F0F0]  bg-gray-50  focus:ring-blue-500 focus:border-black block  p-2.5   font-dm font-normal text-lg text-[#767676] " >
              <option selected>Featured</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            </div>
            <div className='flex  items-center gap-x-4'>
            <div>
            <span className='font-dm font-normal text-lg text-[#767676]'>Show:</span>
            </div>
            <select onChange={handlepaginationClick} id="countries" class=" md:w-[239px] border border-solid border-[#F0F0F0]  bg-gray-50  focus:ring-blue-500 focus:border-black block  p-2.5   font-dm font-normal text-lg text-[#767676] " >
              <option selected value='12'>12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48">48</option>
            </select>
            </div>
            
            </div>
            <Pagination itemsPerPage={showNumber} />
          
            </div>
        </Flex>
    </Container>
  )
}

export default Shop