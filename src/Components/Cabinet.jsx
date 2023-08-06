import React, { useState } from 'react'
import Footer from './Footer';
import './styles/Cabinet.css'
import Message from './Message'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/userSlice';
import { setUsers } from '../store/usersSlice';
import { setAuth } from '../store/userSlice';
import NavBar from './NavBar';
import Personal from './Personal';


const Cabinet = () => {
  const [login, setLogin] = useState(String)
  const [pass, setPass] = useState(String)
  const users = useSelector(state => state.users.users)
  const [button, setButton] = useState('in')
  const [text, setText] = useState('')
  const [state, setState] = useState(false)
  const [email, setEmail] = useState(String)
  const auth = useSelector(state => state.user.auth)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  

  const message = (value) => {
    setState(true)
    setText(value)
    setTimeout(() => {
      setState(false)
    }, 2000)
  }

  const signout = () => {
    dispatch(setUser([]))
    dispatch(setAuth(false))
  }
  
  const signIn = () => {
    switch (users.map((el) => el.login.toLowerCase()).includes(login.toLowerCase())) {
      case true:
        switch (users.map((el) => el.password.toLowerCase()).includes(pass.toLowerCase())) {
          case true:
            dispatch(setAuth(true))
            dispatch(setUser(users.filter((el) => el.login.toLowerCase().includes(login.toLowerCase()))))
            setLogin('')
            setPass('')
            setEmail('')
            break;
          case false:
            message('Проверьте пароль!')
            break
          default:
            break;
        }
        break;
        case false:
          message('Проверьте логин!')
          break
      default:
        break;
    }
  }

  const signUp = () => {
    switch (users.map((el) => el.login.toLowerCase()).includes(login.toLowerCase())) {
      case true:
        message('Такой логин уже существует!')
        break;
      case false:
        switch (users.map((el) => el.email.toLowerCase()).includes(email.toLowerCase())) {
          case true:
            message('Такая почта уже существует!')
            break;
          case false:
            switch (login.length > 4) {
              case true:
                switch(pass.length > 4){
                  case true:
                    switch(email.length > 4) {
                      case true:
                        dispatch(setUsers({id: new Date().toISOString(),login: login, password: pass, type:'user', email : email, name: String(), surname: String(), country: String(), city: String(), adress: String(), orders:[]}))
                        message('Вы успешно зарегистрировались!')
                        setButton('in')
                      break
                      case false:
                        message('Длина почты должна быть больше!')
                      break;
                      default:
                        break;
                    }
                    
                  break;
                  case false:
                    message('Длина пароля должна быть больше!')
                    break;
                  default:
                    break;
                }
                
                break;
              case false:
                message('Длина логина должна быть больше!')
                break;
              default:
                break;
            }
            
          break
          default:
            break;
        }
        break
      default:
        break;
    }
  }

  return (
    <div>
        <header>
            <span className='logo_header_header'>House Staff</span>
            <NavBar url = 'cabinet'/>
          
        </header>
        {auth === false ? <div>
        {/* <div className='button_box'> 
          <button className={` ${button === 'in' ? 'button_active':null}`} onClick={() => {setButton('in')}}>Вход</button>
          <button className={` ${button === 'up' ? 'button_active':null}`} onClick={() => {setButton('up')}}>Регистрация</button>
        </div> */}
        
         {button === 'in' ? <div className='reg_form'>
          <div className="registration-cssave">
            <div className='form'>
              <div className='left_side_login'>
                <h3 className="text-center">Вход</h3>
                <div className="form-group">
                  <input className="form-control item" type="text"  maxLength="15" minLength="4" placeholder="Логин" required value={login} onChange={(e) => setLogin(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <input className="form-control item" type="password"  minLength='6'  placeholder="Пароль" required value={pass} onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block create-account" type="submit" onClick={() => signIn()}>Вход в аккаунт</button>
                    {/* <button onClick={() => {setLogin('azro'); setPass('Morento1324')}}>Log</button> */}
                    
                </div>
              </div>
              
              <div className='right_side_login'>
                <button onClick={() => {setButton('up')}}>Не зарегистрированы?</button>
              </div>
            </div>
            
          </div>
        </div>
            
        : null}
        {button === 'up' ? <div className='reg_form'>
          <div className="registration-cssave">
            <div className='form'>
              <div className='left_side_login'>
                <h3 className="text-center">Регистрация</h3>
                <div className="form-group">
                <input className="form-control item" type="text"  maxLength="15" minLength="4" placeholder="Логин" required value={login} onChange={(e) => setLogin(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <input className="form-control item" type="password"  minLength="6"  placeholder="Пароль" required value={pass} onChange={(e) => setPass(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <input className="form-control item" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-block create-account" type="submit" onClick={() => signUp()}>Зарегистрировать аккаунт</button>
                </div>
                
              </div>
              <div className='right_side_login'>
                  <button onClick={() => {setButton('in')}}>Уже есть аккаунт</button>
                </div>
            </div>
          </div>
        </div>: null}
        </div> : <div>{user.map(user => <Personal key = {user.id} id={user.id} signout={signout} /> )}</div>
        
        
        }
        {state && <Message text = {text}/>}
        <Footer/>
        
    </div>
  )
}

export default Cabinet
