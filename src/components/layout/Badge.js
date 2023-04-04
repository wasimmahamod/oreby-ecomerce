import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='bg-primary text-white py-2 px-8 lg:py-0 xl:py-2 lg:px-4 xl:px-8 absolute top-5 left-5'>{title}</span>
  )
}

export default Badge