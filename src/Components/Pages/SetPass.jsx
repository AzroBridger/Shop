import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPass } from '../../store/usersSlice'
import { setUser } from '../../store/userSlice'
import Message from '../Message'
import './../styles/Warning.css'

const SetPass = ({id}) => {
  const [last_pass, setLast_pass] = useState(String)
  const [first_pass, setFirst_pass] = useState(String)
  const [second_pass, setSecond_pass] = useState(String)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const users = useSelector(state => state.users.users)
  const [bool, setBool] = useState()
  const [state, setState] = useState(false)
  const [text, setText] = useState('')
  const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
      setModalOpen(false);
    };
  
    const confirmAction = () => {
        setPassword()
        closeModal();
    };

    const openModal = () => {
        setModalOpen(true);
      };

  const message = (value) => {
    setState(true)
    setText(value)
    setTimeout(() => {
      setState(false)
    }, 2000)
  }

  useEffect(() => {
    dispatch(setUser(users.filter(el => el.id === id)))
  }, [bool]);

  const setPassword = () => {
    switch (last_pass === user[0].password) {
      case true:
        switch (first_pass === second_pass) {
          case true:
            dispatch(setPass(second_pass))
            setBool(!bool)
            message('Пароль успешно изменён!')
            setLast_pass('')
            setFirst_pass('')
            setSecond_pass('')
            break;
          case false:
            message('Пароли не совпадают!')
            break
          default:
            break;
        }
        break;

      case false:
        message('Проверьте пароли!')
        break
    
      default:
        break;
    }
  }

  return (
    <div className='page_set_pass'>
      <h2>Сменить пароль</h2>
      <div>
        <div>
          <div className='pass_box_set'>
            <div className='profile_set_box'>
              <p>Введите текущий пароль</p>
              <input type="password" value={last_pass} onChange={(e) => setLast_pass(e.target.value)}/>
            </div>
            <div className='pass_box_set'>
              <p>Введите новый пароль</p>
              <input type="password" value={first_pass} onChange={(e) => setFirst_pass(e.target.value)}/>
            </div>
            <div className='pass_box_set'>
              <p>Введите новый пароль повторно</p>
              <input type="password" value={second_pass} onChange={(e) => setSecond_pass(e.target.value)}/>
            </div>
          </div>
          <button className='submit_button_pass' onClick={() => openModal()}>Сменить пароль</button>
        </div>
      </div>
      {state && <Message text = {text}/>}
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

export default SetPass
