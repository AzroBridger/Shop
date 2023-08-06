import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = ({url}) => {
  const auth = useSelector(state => state.user.auth)
  const user = useSelector(state => state.user.user)
  return (
      <ul className='nav_header_header'>
        <Link to='/' className={` ${url === 'main' ? 'maini':'linki'}`}><li>Главная</li></Link>
        <Link to='/help' className={` ${url === 'help' ? 'maini':'linki'}`}><li>Поддержка</li></Link>
        <Link to='/order' className={` ${url === 'order' ? 'maini':'linki'}`}><li>Корзина</li></Link>
        <Link to='/cabinet' className={` ${url === 'cabinet' ? 'maini':'linki'}`}><li>Кабинет</li></Link>
        
      </ul>
  )
}

export default NavBar
