import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material'
import React, { useState } from 'react';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import "./Chat.css";
import axios from './axios';

function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('messages/new', {
      message: input,
      name: "Me",
      timestamp: "Just now",
      received: true,//false for receive messages from another people, true for my own messages
    });

    setInput('');
  };

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
        {messages.map((message) => (
          <p className={`chat__message ${message.received && 'chat__reciever'}`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div class="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="Type a message" 
            type="text" 
          />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat