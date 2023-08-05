const express = require('express');
const cors = require('cors');
const { json } = require('express');
const { Server } = require('socket.io');
const artworksRoutes = require('./routes/artworksRoutes');

const app = express();
app.use(cors()).use(json());

app.use('/api', artworksRoutes);

const server = app.listen(3001, () => {
  console.log('Server running on port 3001');
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinRoom', (artWorkId) => {
    socket.join(artWorkId);
    console.log(`User joined art work room: ${artWorkId}`);
  });

  socket.on('chatMessage', (artWorkId, message) => {
    io.to(artWorkId).emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
