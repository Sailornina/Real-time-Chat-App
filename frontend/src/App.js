import './index.css';
import { useState } from 'react';
import { io } from 'socket.io-client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const socket = io("ws://localhost:3000");

export const App = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <Home
              username={username}
              setUsername={setUsername}
              room={room}
              setRoom={setRoom}
              socket={socket}
            />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
