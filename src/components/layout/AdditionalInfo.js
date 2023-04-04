import React from 'react'
import Flex from './Flex'
import Container from './Container'
import {RiNumber2} from 'react-icons/ri'
import {FaCaravan} from 'react-icons/fa'
import {FiRotateCcw} from 'react-icons/fi'

const AdditionalInfo = () => {
  return (
  <div className='py-3 md:py-7 border border-solid border-[#F0F0F0] mt-[-5px]'>
      <Container>
        <Flex className='flex justify-between'>
          <div className='flex items-center gap-2 md:gap-4'>
            <RiNumber2 className='text-[10px] md:text-2xl text-primary font-bold'/>
            <h3 className='font-dm text-[10px] md:text-base font-normal text-[#6D6D6D]'>Two years warranty</h3>
          </div>
          <div className='flex items-center gap-4'>
            <FaCaravan className='text-[10px] md:text-2xl text-primary font-bold'/>
            <h3 className='font-dm text-[10px]  md:text-base font-normal text-[#6D6D6D]'>Free shipping</h3>
          </div>
          <div className='flex items-center gap-4'>
            <FiRotateCcw className='text-[10px] md:text-2xl text-primary font-bold'/>
            <h3 className='font-dm text-[10px]  md:text-base font-normal text-[#6D6D6D]'>Return policy in 30 days</h3>
          </div>
        </Flex>
    </Container>
  </div>
  )
}

export default AdditionalInfo