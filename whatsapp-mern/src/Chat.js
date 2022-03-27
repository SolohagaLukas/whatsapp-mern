import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import React from 'react';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import "./Chat.css";

function Chat() {
  return (
    <div className='chat'>
      <div class="chat__header">
        <Avatar />

        <div class="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div class="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div class="chat__body">
        <p className='chat__message'>
          <span className='chat__name'>Lukas</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>

        <p className='chat__message chat__reciever'>
          <span className='chat__name'>Lukas</span>
          This is a message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>

      <div class="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat