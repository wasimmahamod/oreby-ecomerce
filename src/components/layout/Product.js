import React from 'react'
import Badge from './Badge'
import Image from './Image'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {MdOutlineRotateRight} from 'react-icons/md'
import {FaShoppingCart} from 'react-icons/fa'
import Flex from './Flex'

const Product = ({src,badge}) => {
  return (
    <div >
   <div className=' relative group overflow-y-hidden'>
   <Image className='w-full' imgsrc={src}/>
        {badge&& 
        <Badge title='New'/>
        }
            <div className='bg-white w-full  absolute group-hover:bottom-0 bottom-[-44%] lg:bottom-[-100%] xl:bottom-[-44%] left-0 p-6 duration-300 ease-in-out'>
            <Flex className='flex justify-end '>
          <div className='flex items-center gap-2 md:gap-4 '>
            <h3 className='font-dm text-base font-normal hover:text-primary hover:font-bold text-[#6D6D6D]'>Add to Wish List</h3>
            <BsFillSuitHeartFill className='text-base text-primary font-bold'/>
          </div>
  
            </Flex>
            <Flex className='flex justify-end mt-4'>
          <div className='flex items-center gap-2 md:gap-4'>
            <h3 className='font-dm text-base font-normal text-[#6D6D6D]hover:text-primary hover:font-bold'>Compare</h3>
            <MdOutlineRotateRight className='text-base text-primary font-bold'/>
          </div>
  
            </Flex>
            <Flex className='flex justify-end mt-4'>
          <div className='flex items-center gap-2 md:gap-4'>
            <h3 className='font-dm text-base font-normal text-[#6D6D6D]hover:text-primary hover:font-bold'>Add to Cart</h3>
            <FaShoppingCart className='text-base text-primary font-bold'/>
          </div>
  
            </Flex>
            </div>
   </div>
   <div className='mb-4 md:mb-0'>
    <Flex className='flex justify-between mt-6'>
    <h3 className='font-dm text-md md:text-xl font-bold text-primary '>Basic Crew Neck Tee</h3>
    <p className='font-dm font-normal text-sm md:text-base text-[#767676]'>$44.00</p>
    </Flex>
    <p className='font-dm font-normal text-base text-[#767676] mt-4'>Black</p>
   </div>
    </div>
  )
}

export default Product