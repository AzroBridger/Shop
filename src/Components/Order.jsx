import React from 'react'
import { FaTrash } from 'react-icons/fa'
import './styles/Order.css';
import { removeFromOrder } from '../store/orderSlice';
import { useDispatch } from 'react-redux';


const Order = (props) => {
  const dispatch = useDispatch()
  return (
    <div className='item_div_order'>
        <img src={'./img/' + props.item.img} alt="" />
        <h2>{props.item.title}</h2> 
        <p>{props.item.price}$</p>
        <FaTrash className='delete_order_order' onClick={() => dispatch(removeFromOrder(props.item.id))}/>
      </div>
  )
}

export default Order
