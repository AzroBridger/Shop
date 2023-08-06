import React from 'react'
import './styles/Fullitem.css';
import { FaWindowClose, FaShoppingCart } from "react-icons/fa";
import { addToOrder } from '../store/orderSlice';
import { useDispatch } from 'react-redux';


const FullItem = (props) => {
  const dispatch = useDispatch()
  return (
    <div className='full_item_fullItem'>
        <div className=''>
            <FaWindowClose className='close_button_fullitem' onClick={() => props.toShow(props.item)}/>
            <img src={'./img/' + props.item.img} alt=""  />
            <h2>{props.item.title}</h2> 
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <FaShoppingCart className='add_item_item' onClick={() => dispatch(addToOrder(props.item))}/>
        </div>
      </div>
  )
}

export default FullItem
