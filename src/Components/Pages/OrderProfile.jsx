import React from 'react'
import './../styles/OrderProfile.css'

const Order = ({item}) => {
  return (
    <div className='item_div_order'>
        <img src={'./img/' + item.img} alt="" />
        <h2>{item.title}</h2> 
        <p>{item.price}$</p>
      </div>
  )
}

export default Order
