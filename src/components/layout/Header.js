import React, { useRef, useState,useEffect } from 'react'
import Container from './Container';
import Dropdown from './Dropdown';
import Flex from './Flex';
import {RiBarChartHorizontalLine} from 'react-icons/ri'
import List from './List'
import ListItem from './ListItem';
import Search from './Search';
import {BsSearch,BsPersonFill} from 'react-icons/bs'
import {GoTriangleDown} from 'react-icons/go'
import {FaShoppingCart} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import Image from './Image'
import { Link } from 'react-router-dom';

const Header = () => {
  let [showCatagoryDrop,setShowCatagoryDrop]=useState(false)
  let [showUserDrop,setshowUserDrop]=useState(false)
  let [showCartDrop,setshowCartDrop]=useState(false)
  let CatagoryRef=useRef()
  let userRef=useRef()
  let cartRef=useRef()
  useEffect(()=>{
    document.body.addEventListener('click',(e)=>{
      if(CatagoryRef.current.contains(e.target)){
        setShowCatagoryDrop(true)
      }else{
        setShowCatagoryDrop(false)
      }
      if(userRef.current.contains(e.target)){
        setshowUserDrop(true)
      }else{
        setshowUserDrop(false)
      }
      if(cartRef.current.contains(e.target)){
        setshowCartDrop(true)
      }else{
        setshowCartDrop(false)
      }
    })
  },[])
  return (
    <div className='bg-[#F5F5F5] py-6'>
       <Container>
       <Flex className="flex justify-between ">
        <div className='flex items-center'>
            <Dropdown  dropref={CatagoryRef} className='relative z-50'>
                <p className='flex items-center gap-x-2.5 '><RiBarChartHorizontalLine/><span className='font-dm text-sm font-normal hidden lg:inline-block'>Shop by Category </span></p>
                {showCatagoryDrop &&
                
                <List className="absolute border-solid  w-[263px] top-9 bg-primary ">
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#2D2D2D] hover:px-7  font-bold text-[#BEBEBE] px-5 py-4  ease-in duration-300 " itemName="Accesories"/>
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#2D2D2D] hover:px-7  font-bold text-[#BEBEBE] px-5 py-4  ease-in duration-300 " itemName="Furniture"/>
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#2D2D2D] hover:px-7  font-bold text-[#BEBEBE] px-5 py-4  ease-in duration-300 "itemName="Electronics"/>
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#2D2D2D] hover:px-7  font-bold text-[#BEBEBE] px-5 py-4  ease-in duration-300 " itemName="Clothes"/>
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#2D2D2D] hover:px-7  font-bold text-[#BEBEBE] px-5 py-4  ease-in duration-300 " itemName="Bags"/>
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#2D2D2D] hover:px-7  font-bold text-[#BEBEBE] px-5 py-4  ease-in duration-300 " itemName="Home appliances"/>
                   
                </List>
                }
                
            </Dropdown>
        </div>
        <div className='w-auto lg:w-[600px] relative'>
          <Search className="w-full py-4 px-5 plachoder:text-[#C4C4C4] placeholder:text-sm placeholder:font-dm" placeholder='Search Products' />
          <BsSearch className='absolute top-5 right-5 text-black'/>
        </div >
        <div className='flex items-center'>
          <Flex className="flex gap-x-10">
               <Dropdown className='relative z-50' dropref={userRef}>
               <div className='flex  items-center'>
                  <BsPersonFill/>
                  <GoTriangleDown/>
                </div>
                {showUserDrop &&
                
                <List className="absolute border-solid  w-[200px] top-9 right-0 bg-white ">
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#F0F0F0]  font-bold text-primary px-5 py-4  text-center hover:bg-primary ease-in duration-300" itemName="My Account"/>
                    <ListItem className="font-dm text-sm text-normal hover:text-bold hover:text-white border-b border-solid border-[#F0F0F0]  font-bold text-primary px-5 py-4  text-center hover:bg-primary ease-in duration-300" itemName="Furniture"/>
                   
                   
                </List>
                }
               </Dropdown>
 
                <div>
                <Dropdown className='relative z-50' dropref={cartRef}>
                <FaShoppingCart/>
                {showCartDrop &&
              <div className='w-[360px] absolute top-8 right-0 border border-solid border-[#F0F0F0] '>
                  <div className=' bg-[#F5F5F5] p-5'>
                <Flex className='flex gap-x-5 relative'>
                  <div>
                  <Image imgsrc="images/cart.png" />
                  </div>
                  <div className='flex flex-col justify-center'>
                  <h3 className='font-dm text-sm font-bold text-primary'>Black Smart Watch</h3>
                  <p className='font-dm text-sm font-bold text-primary mt-3'>$44.00</p>
                  <ImCross className='absolute top-2/4 text-sm right-0'/>
                  </div>
                </Flex>
                </div>
                <div className='p-5 bg-[#FFFFFF]'>
                  <h4 className='font-dm regular text-[#767676] text-base'>Subtotal:<span className='text-primary font-bold'> $44.00</span></h4>
                  <Link to="#" className='font-dm font-bold text-sm py-4 px-10 border border-solid border-[#2B2B2B] inline-block mt-3'>View Cart</Link>
                  <Link to="#" className='font-dm font-bold bg-primary text-white text-sm py-4 px-10 border border-solid border-[#2B2B2B] inline-block mt-3 ml-5'>Checkout</Link>
                </div>
              </div>
                }
               </Dropdown>
                  
                </div>
          </Flex>
        </div>
       </Flex>
       </Container>
    </div>
  )
}

export default Header