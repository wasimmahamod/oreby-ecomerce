import React, { useEffect, useState } from 'react';
import Image from './Image';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import {RiBarChartHorizontalFill} from 'react-icons/ri'
import Container from './Container';

const Navbar = () => {
    let [show,setShow]=useState(true)

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
    <nav className='py-7'>
      <Container className='bg-red-500'>
        <Flex className="lg:flex">
          <div className=" w-full lg:w-3/12">
            <Image  imgsrc="images/logo.png"/>
          </div>
          <div className=" w-full lg:w-9/12 ">
            <RiBarChartHorizontalFill onClick={()=>setShow(!show)}className='block lg:hidden ml-auto absolute top-7 right-2.5'/>
            {show &&
            <List className="lg:flex justify-end  lg:gap-x-10 mt-5 lg:mt-0 ">
              <ListItem className="font-dm text-sm  font-bold text-primary" itemName="Home"/>
              <ListItem className="font-dm text-sm font-reguler text-[#767676] hover:font-bold hover:text-primary hover:ml-2.5 ease-in duration-300 mt-2.5 lg:mt-0 " itemName="Shop"/>
              <ListItem className="font-dm text-sm font-reguler text-[#767676] hover:font-bold hover:text-primary hover:ml-2.5 ease-in duration-300 mt-2.5 lg:mt-0 " itemName="About"/>
              <ListItem className="font-dm text-sm font-reguler text-[#767676] hover:font-bold hover:text-primary hover:ml-2.5 ease-in duration-300 mt-2.5 lg:mt-0 " itemName="Contacts"/>
              <ListItem className="font-dm text-sm font-reguler text-[#767676] hover:font-bold hover:text-primary hover:ml-2.5 ease-in duration-300 mt-2.5 lg:mt-0 " itemName="Journal"/>
         
              
            </List>
            }
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar