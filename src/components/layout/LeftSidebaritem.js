import React,{useState} from 'react'
import {GoTriangleDown} from 'react-icons/go'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

const LeftSidebaritem = (props) => {
    let [drop,setDrop]=useState(props.subdorpDown)
    let [show,setShow]=useState(false)
  return (
    <div>
      {drop 
      ?
      <div onClick={()=>setShow(!show)}  className='flex items-center justify-between cursor-pointer border-b border-solid border-[#767676] py-5'>
      <h3 className='w-full font-dm font-normal text-base text-[#767676] '>
        {props.color &&
         <span className='inline-block w-[11px] h-[11px] rounded-full mr-2' style={{background:props.color}}></span>
        }
       {props.title}</h3>
      {show ? 
      <AiOutlineMinus className='text-[#767676]'/>
      :
      <AiOutlinePlus className='text-[#767676]'/>
      }
    </div>
      :
      <div>
        <h3 className='w-full cursor-pointer font-dm font-normal text-base text-[#767676] border-b border-solid border-[#767676] py-5'>
        {props.color &&
         <span className='inline-block w-[11px] h-[11px] rounded-full mr-2' style={{background:props.color}}></span>
        }
          {props.title}</h3>
      </div>
      }
    {show &&
    <div>
      {props.children}
    </div>
    }
    </div>
  )
}

export default LeftSidebaritem