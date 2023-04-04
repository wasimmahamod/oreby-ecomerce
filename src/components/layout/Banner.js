import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./Image";
import { Link } from "react-router-dom";

const Baner = () => {
  let [activeDots,setActiveDots]=useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setActiveDots(next );
    },
    appendDots: dots => (
      <div
        style={{
          position:'absolute',
          top:'50%',
          transform:'translateY(-50%)',
          left:'9%'
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
      style={i === activeDots?
      {  width: "30px",
      color: "#262626",
      borderRight: "3px #262626 solid",
      padding:'10px 0'}
      : 
      {width: "30px",
      color: "#262626",
      borderRight: "3px white solid",
      padding:'10px 0',
      color:'transparent'}}

      >
        0{i + 1}
      </div>
    ), 
     responsive: [
      {
        breakpoint: 576,
        settings: {
          appendDots: dots => (
            <div
              style={{
                position:'absolute',
                top:'50%',
                transform:'translateY(-50%)',
                left:'2%'
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style={i === activeDots?
            {  width: "30px",
            color: "#262626",
            borderRight: "2px #262626 solid",
            fontSize:'12px'
          }
            : 
            {width: "30px",
            color: "#262626",
            borderRight: "2px white solid",
            color:'transparent',
            fontSize:'12px'
          }}
      
            >
              0{i + 1}
            </div>
          ), 
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      <Link to="#">
        <div >
          <Image className='w-[100%] ' imgsrc="images/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div >
          <Image className='w-[100%]' imgsrc="images/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div >
          <Image className='w-[100%]' imgsrc="images/banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Baner;
