import React from 'react'
import { useSelector } from 'react-redux'
import OrderProfile from './OrderProfile'
import '../styles/Orders.css'

const Orders = () => {
  const user = useSelector(state => state.user.user[0])
  return (
    <div>
      <h2>Ваши заказы</h2>
      {user.orders.length ?
      <div className='orders_div_top'> 
        {user.orders.map(el => 
          <div key={el.id} className='order_part'>
            {el.map(element => <OrderProfile key = {element.id} item = {element}/>)}
          </div>
        )}
      </div>
      : null}
      {!user.orders.length && <div className='orders_page_null'><h2>Список заказов пуст</h2></div>}
    </div>
  )
}

export default Orders
