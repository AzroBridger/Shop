import React, { useState } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import './styles/Header.css';
import NavBar from './NavBar';


const Header = (props) => {
  let [search_place, setSearchplace] = useState(String)

  const checker = (event) => {
    event.stopPropagation()
    setSearchplace(event.target.value)
    props.err(false)
    
    if (search_place.length === 0){
      props.defaul()
    }
  }
  return (
    <header className='header'>
        <div>
            <span onClick = {() => props.defaul2(setSearchplace)}className='logo_header_header'>House Staff</span>
            <NavBar url = 'main' />

            <div className='loli'>
              <input name="text" id ='find' placeholder="Искать здесь" value={search_place} onChange={(e) => checker(e)} />
              <button className='first' onClick={() => props.toSearch(search_place)}></button>
              <FaRegWindowClose className='delete_input button' onClick = {() => props.defaul2(setSearchplace)}/>
            </div>

            
        </div>
        
    </header>
  )
}

export default Header
