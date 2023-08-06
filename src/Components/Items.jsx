import React from 'react'
import Item from './Item'
import './styles/Items.css';

const Items = (props) => {
  return (
    <main>
        {props.items.map(el => (
            <Item toShow = {props.toShow} key={el.id} item = {el}/>
        ))}
      </main>
  )
}

export default Items
