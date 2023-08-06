import React from 'react'
import Order from './Order'

const ElementOrder = ({el}) => {
  return (
    <div key = {el.id} item = {el} className='order_item'>
        <Order key = {el.id} item = {el}/>
        
    </div>
  )
}

export default ElementOrder
