import React,{useState} from 'react'
import {GoTriangleDown} from 'react-icons/go'

import Flex from './Flex'
import LeftSidebaritem from './LeftSidebaritem'

const SidebarContent = ({dropDown,droptitle,data}) => {
  let [drop,setDrop]=useState(dropDown)
  let [show,setShow]=useState(dropDown)
  return (
    <div className='mb-14'>
      {drop 
      ?
      <div onClick={()=>setShow(!show)}  className='flex items-center justify-between cursor-pointer mb-9'>
      <h3 className='font-dm font-bold text-xl '>{droptitle}</h3>
      <GoTriangleDown/>
    </div>
      :
      <div>
        <h3 className='cursor-pointer font-dm font-bold text-xl mb-9 '>{droptitle}</h3>
      </div>
      }
    {show &&
      <div>
      {data.map((item,index)=>(
        item.subcategory 
        ?
        <LeftSidebaritem subdorpDown={item.subcategory? true:false}  title={item.name}   >
          {item.subcategory&&item.subcategory.map((sitem)=>(
          <h1 className='w-full cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676] py-5'>
          {sitem.name}
          </h1>
          ))}
        </LeftSidebaritem>
        :
        <LeftSidebaritem subdorpDown={item.subcategory? true:false}  title={item.name} color={item.code} >{item.subcategory&&item.subcategory.map((sitem)=>(
          <h1 className='w-full cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676] py-5'>
          {sitem.name}
          </h1>
          ))}
        </LeftSidebaritem>
      ))}
    </div>
    }
    {!drop &&
     <div>
     {data.map((item,index)=>(
       item.subcategory 
       ?
       <LeftSidebaritem subdorpDown={item.subcategory? true:false}  title={item.name}   >
         {item.subcategory&&item.subcategory.map((sitem)=>(
         <h1 className='w-full cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676] py-5'>
         {sitem.name}
         </h1>
         ))}
       </LeftSidebaritem>
       :
       <LeftSidebaritem subdorpDown={item.subcategory? true:false}  title={item.name} color={item.code} >
        {item.subcategory&&item.subcategory.map((sitem)=>(
         <h1 className='w-full cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676] py-5'>
         {sitem.name}
         </h1>
         ))}
       </LeftSidebaritem>
     ))}
   </div>
    }
    </div>
  )
}

export default SidebarContent