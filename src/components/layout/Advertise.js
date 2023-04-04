import React from 'react'
import Flex from './Flex'
import Image from './Image'
import { Link } from 'react-router-dom'
import Container from './Container'

const Advertise = () => {
  return (
    <div className='mt-[50px] lg:mt-[130px]'>
       <Container>
       <Flex className='flex gap-3 lg:gap-10'>
            <div className='max-w-2/4'>
                <Link to='#'>
                <Image imgsrc='images/ad1.png'/>
                </Link>
            </div>
            <div className='max-w-2/4'>
                <div>
                <Link to='#'>
                <Image imgsrc='images/ad2.png'/>
                </Link>
                </div>
                <div className='mt-3 lg:mt-10'>
                <Link to='#'>
                <Image imgsrc='images/ad3.png'/>
                </Link>
                </div>
            </div>
        </Flex>
       </Container>
    </div>
  )
}

export default Advertise