import React from 'react'
import "./Chat.css"
import { Avatar } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';


function Chat() {
  return (
    <div className='Chat'>
        <div className='chatheader'>
            <Avatar />
            <div className='chat_headerinfo'>
                <h3>Mani</h3>
                <p>Last seen at...</p>
            </div>
            <div className='chatheader_right'>
                <IconButton>
                    <VideocamOutlinedIcon />
                </IconButton>
                <IconButton>
                    <CallOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
            </div>
        </div>
        <div className='chatbody'>
            <p className='chatmessage'>
                <span className='chat_name'>Sabarivasan</span>
                hii
                <span className='timestamp'>{new Date().toUTCString()}</span>
            </p>

            <p className='chatmessage chatreciever'>
                <span className='chat_name'>Sabarivasan</span>
                hii
                <span className='timestamp'>{new Date().toUTCString()}</span>
            </p>
        </div>
        <div className='chatfooter'>
            <SentimentSatisfiedAltIcon />
            <AttachFileIcon/>
            
            <form>
                <input placeholder='type message...'/>
                <button type='submit'>send a message</button>
            </form>
            <MicIcon/>
        </div>



    </div>
  )
}

export default Chat