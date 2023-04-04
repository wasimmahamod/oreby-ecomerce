import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({itemName,className}) => {
  return (
    <li className={className}><Link to="#">{itemName}</Link></li>
  )
}

export default ListItem