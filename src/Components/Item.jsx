import React from 'react'
import { addToOrder } from '../store/orderSlice';
import { useDispatch } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const Item = (props) => {
  const dispatch = useDispatch()
  return (
    <div className='item_item_all'>
      <div className='img_item_all'>
        <img src={'./img/' + props.item.img} alt="" onClick={() => props.toShow(props.item)} />
      </div>
        
        <div className='title_price'>
          <h2>{props.item.title}</h2>
          <b>{props.item.price}$</b>
        </div>
        <FaShoppingCart className='add_item_item' onClick={() => dispatch(addToOrder(props.item))}/>       
      </div>
  )
}

export default Item
