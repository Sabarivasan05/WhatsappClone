import React from 'react'
import "./Sidebarchat.css"   
import { Avatar } from '@mui/material'
function Sidebarchat() {
  return (
    <div className='sidebarchat'>
        <Avatar />
        <div className='chat_info'>
            <h2>Mani</h2>
            <p>Reacted 🔥 to your message</p>
        </div>
    </div>
  )
}

export default Sidebarchat