import React from 'react'
import './styles/Message.css'

const Message = (props) => {
  return (
    <div className='message_box_message'>
          <h3>{props.text}</h3>
    </div>
  )
}

export default Message
