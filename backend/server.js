import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

const port = process.env.PORT || 8080;
const app = express();
const httpServer = createServer(app);

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
});


httpServer.listen(3000);

