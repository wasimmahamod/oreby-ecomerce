import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Headding from './Headding'
import Product from './Product'

const Offers = () => {
  return (
    <div className='mt-[50px] md:mt-[128px]'>
    <Container>
        <Headding title='Special Offers'/>
        <Flex className='sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between gap-x-10'>
            <div className='sm:max-w-[290px] lg:max-w-[370px] md:max-lg:max-w-[345px]'>
                <Product src='images/product1.png' badge={false}/>
            </div>
            <div className='sm:max-w-[290px] lg:max-w-[370px] md:max-lg:max-w-[345px]'>
            <Product src='images/product1.png' badge={true}/>
            </div>
            <div className='sm:max-w-[290px] lg:max-w-[370px] md:max-lg:max-w-[345px]'>
            <Product src='images/product1.png' badge={true}/>
            </div>
            <div className='sm:max-w-[290px] lg:max-w-[370px] md:max-lg:max-w-[345px]'>
            <Product src='images/product1.png' badge={true}/>
            </div>

        </Flex>
    </Container>
    </div>
  )
}

export default Offers