import React from 'react'

const InputBox = (props) => {
  return (
    <div className='mb-[23px]'>
        <h3 className='font-bold font-base text-primary mb-[10px]font-dm mb-3'>{props.title}</h3>
        <props.as placeholder={props.placeholder} className='placeholder:text-sm placeholder:font-dm placeholder:text-[#767676] border-b border-solid border-[#F0F0F0]  pb-2.5 w-full outline-0' />
    </div>
  )
}

export default InputBox