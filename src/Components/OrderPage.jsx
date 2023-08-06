import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import './styles/OrderPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearOrder } from '../store/orderSlice'
import { addToOrders } from '../store/usersSlice'
import { setUser } from '../store/userSlice'
import ElementOrder from './ElementOrder'


const Order_page = () => {
  const users = useSelector(state => state.users.users)
  const id = useSelector(state => state.users.user_id)
  const dispatch = useDispatch()
  const order = useSelector(state => state.order.order)
  const auth = useSelector(state => state.user.auth)
  const [bool, setBool] = useState()
  let summ = 0
  order.forEach(el => summ += +el.price)

  useEffect(() => {
    dispatch(setUser(users.filter(el => el.id === id)))
}, [bool]);
  
  const addOrders = () => {
    dispatch(addToOrders(order))
    dispatch(clearOrder())
    setBool(!bool)
    
  }

  return (
    <div className='width'>
        <header>
            <span className='logo_header_header'>House Staff</span>
            <NavBar url = 'order'/>
          </header>   
        <div className='order_page'>
          <h2 className='order_page_title'>КОРЗИНА</h2>
          {auth && <div>
            {order.length ? 
            <div>
              <div className='order_div'>
                {order.map((el) => <ElementOrder el = {el} key = {el.id}/>)}
              </div>
              
            </div> : 
            <h3 className='order_title_null'>Корзина пуста</h3>}
          </div>}
          {auth === false ? <h3 className='order_title_null'>Войдите в аккаунт</h3>:null}
        </div>
            
        {auth && 
          <div>
            {order.length ? <div className='summ_object'>
            <p className='summ_header_header'>Сумма: {new Intl.NumberFormat().format(summ)}$</p>
            <button onClick={() => addOrders()}>Оформить заказ</button>
            </div>: null}
          </div>
        }
              
        
        
        <Footer/>
    </div>
  )
}

export default Order_page
