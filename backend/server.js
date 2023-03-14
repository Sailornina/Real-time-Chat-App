import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

const CHAT_BOT = 'ChatBot';

let chatRoom = '';
let allUsers = []

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi everyone!');
});

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`, socket.connected);

  socket.on('join-room', (data) => {
    const { username, room } = data; // Data sent from client.
    socket.join(room);

    const createdTime = Date.now();

    socket.to(room).emit('receive_message', {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      createdTime,
    });

    // Save the new user to the room
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit('chatroom-users', chatRoomUsers);
    socket.emit('chatroom-users', chatRoomUsers);
  });
});


httpServer.listen(8080);

