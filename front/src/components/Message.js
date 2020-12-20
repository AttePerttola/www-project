import React from 'react'
import './Message.css'

const Message = ({id,message}) => {
    return (
        <div className='msgBox' key = {id}>
            
            <p className='content'>{message.content}</p>
            <p className='author'>{message.username}</p>
        </div>
    )
    
    
  
}

export default Message