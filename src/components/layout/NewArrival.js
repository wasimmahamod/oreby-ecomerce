import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Headding from './Headding'
import Product from './Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'

const NewArrival = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='bg-[#C7C7C7] w-[64px] h-[64px] rounded-full !flex justify-center items-center absolute top-[50%] translate-y-[-50%] right-[25px]'
        style={{ ...style, 
        }}
        onClick={onClick}
      ><BsArrowRight className='text-2xl text-white '/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      className='bg-[#C7C7C7] w-[64px] h-[64px] rounded-full !flex justify-center items-center absolute top-[50%] translate-y-[-50%] left-0 z-50'
        style={{ ...style,}}
        onClick={onClick}
      ><BsArrowLeft className='text-2xl text-white'/></div>
    );
  }

  var settings = {
    dots: false,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          
        }
      }
    ]
  };
  return (
    <div className='mt-[50px] md:mt-[128px]'>
        <Container>
            <Headding title='New Arrivals'/>
            <Slider {...settings}>
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
                <div className='sm:max-w-[290px] lg:max-w-[370px] md:max-lg:max-w-[345px]'>
                <Product src='images/product1.png' badge={true}/>
                </div>
            </Slider>
            {/* <Flex className='sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between gap-x-10'> */}
               
    
            {/* </Flex> */}
        </Container>
    </div>
  )
}

export default NewArrival