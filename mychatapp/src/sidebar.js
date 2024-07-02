import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Sidebarchat from './Sidebarchat';
import { Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        {/* <h1>i am a sidebar</h1> */}
        <div className='sidebar_header'>
            <Avatar src='C:\Users\sabarivasan\Pictures\Screenshots\Screenshot (2).png'/>
            <div className='sidebar_rightheader'>
                
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            </div>
        </div>
        <div className='searchbar'>
            <div className='searchbar_container'>
                <SearchOutlinedIcon />
                <input placeholder='Search' type='text'/>
            </div>
        </div>
        <div className='sidebar_chats'>
            <Sidebarchat />
            <Sidebarchat />
            <Sidebarchat />
        </div>
    </div>
  );
}

export default Sidebar;

