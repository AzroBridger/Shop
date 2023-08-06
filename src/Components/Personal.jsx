import React from 'react'
import { useState } from 'react'
import './styles/Personal.css'
// import { useDispatch, useSelector } from 'react-redux'
import { FaLock, FaDoorOpen, FaPerson } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Person from './Pages/Person';
import Orders from './Pages/Orders';
import SetPass from './Pages/SetPass';


const Personal = ({signout, id}) => {
    const [side, setSide] = useState('person')
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
      setModalOpen(false);
    };
  
    const confirmAction = () => {
        signout()
        closeModal();
    };

    const openModal = () => {
        setModalOpen(true);
      };
    
  
    
  return (
    <div className='personal_app'>
      <div className='left_side_pers'>
        <h3 className='left_side_title'>ЛИЧНЫЙ КАБИНЕТ</h3>
        <div className='left_side_bar'>
          <button className={` ${side === 'person' ? 'button_online':null}`} onClick={() => setSide('person')}><FaPerson/><h4>Мой профиль</h4></button>
          <button className={` ${side === 'orders' ? 'button_online':null}`} onClick={() => setSide('orders')}><FaShoppingCart/><h4>Мои заказы</h4></button>
          <button className={` ${side === 'setpass' ? 'button_online':null}`} onClick={() => setSide('setpass')}><FaLock/><h4>Сменить пароль</h4></button>
          <button onClick={() => openModal()}><FaDoorOpen/><h4>Выйти из профиля</h4></button>
        </div>
      </div>
      <div className='right_side_pers'>
        {side === 'person' ? <Person id = {id}/> : null}
        {side === 'orders' ? <Orders/> : null}
        {side === 'setpass' ? <SetPass id = {id}/> : null}
      </div>
      {modalOpen && (
          <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Подтверждение</h2>
            <p>Вы уверены, что хотите продолжить?</p>
            <div className="button-container">
              <button onClick={confirmAction}>Да</button>
              <button onClick={closeModal}>Нет</button>
            </div>
          </div>
        </div>
        )}
    </div>
  )
}

export default Personal
