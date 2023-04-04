import React from 'react'
import { Link } from 'react-router-dom'
import Bredcrumb from '../components/layout/Bredcrumb'
import Container from '../components/layout/Container'
import Flex from '../components/layout/Flex'
import Image from '../components/layout/Image'

const About = () => {
  return (
    <Container>
        <Bredcrumb/>
        <Flex className='block md:flex gap-x-10'>
        <div className='md:w-2/4'>
            <Link>
            <Image imgsrc='images/aboutimg1.png'/>
            </Link>
        </div>
        <div className='md:w-2/4 mt-5 md:mt-0'>
            <Link>
            <Image imgsrc='images/aboutimg.png'/>
            </Link>
        </div>
        </Flex>
        <div className='mt-20 md:mt-[128px]'>
            <h4 className='text-2xl md:text-[39px] font-normal font-dm leading-10 md:leading-[52px] text-primary'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
        </div>
       <div className='mt-[50px] md:mt-[118px]'>
       <Flex className='block md:flex gap-x-10 justify-between'>
            <div className='w-full md:w-[32%]'>
                <h4 className='text-[25px] font-bold font-dm text-primary'>Our Vision</h4>
                <p className='font-dm text-base font-normal text-[#767676]leanding-7 mt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='w-full md:w-[32%] mt-10 md:mt-0'>
                <h4 className='text-[25px] font-bold font-dm text-primary'>Our Story</h4>
                <p className='font-dm text-base font-normal text-[#767676]leanding-7 mt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className='w-full md:w-[32%] mt-10 md:mt-0'>
                <h4 className='text-[25px] font-bold font-dm text-primary'>Our Brands</h4>
                <p className='font-dm text-base font-normal text-[#767676]leanding-7 mt-[11px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </Flex>
       </div>
    </Container>
  )
}

export default About