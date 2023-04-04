import React from 'react'


const Dropdown = ({className,children,title,onClick,dropref}) => {
  return (
    <div className={className} ref={dropref}>
        <p>{title}</p>
        {children}
    </div>
  )
}

export default Dropdown