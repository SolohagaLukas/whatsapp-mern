import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div class="sidebar__header">
            <Avatar src="https://media.tycsports.com/files/2022/03/04/397997/lionel-messi-seleccion-argentina_1440x810_wmk.jpg" />
            <div class="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div class="sidebar__search">
            <div class="sidebar__searchContainer">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <input placeholder="Search or start new chat" type="text" />
            </div>
        </div>

        <div class="sidebar">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>

    </div>
  )
}

export default Sidebar