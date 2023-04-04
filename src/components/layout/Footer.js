import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex flex-wrap md:flex-nowrap ">
          <div className="w-[50%] sm:w-[30%] lg:w-[15%] mt-10 lg:mt-0">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="w-[50%] sm:w-[30%] lg:w-[15%] mt-10 lg:mt-0">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-[50%] sm:w-[30%] lg:w-[15%] mt-10 lg:mt-0">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                itemName="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[50%] lg:w-[25%] justify-start lg:justify-center mt-10 lg:mt-0">
            <div>
              <h4 className="mb-4 font-dm text-base  md:font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-[50%] lg:w-[25%] mt-10 lg:mt-0">
            <Image imgsrc="images/logo.png" />
          </div>
        </Flex>
      <div className="pt-[65px]">
      <Flex className='flex justify-between items-center gap-x-5 lg:gap-x-0'>
            <div className="flex gap-x-6 text-primary">
                <FaFacebookF/>
                <FaLinkedinIn/>
                <AiFillInstagram/>
            </div>
            <h4 className="font-dm text-sm text-normal text-[#6D6D6D]">2020 Orebi Minimal eCommerce Figma Template by Adveits</h4>
        </Flex>
      </div>
      </Container>
    </div>
  );
};

export default Footer;
