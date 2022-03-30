import React, { useEffect } from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {
    const pusher = new Pusher('106b1889c4197f9435e9', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="app">
      <div class="app__body">
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
