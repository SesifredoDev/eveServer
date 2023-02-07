const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = 3000;

io.on('connection', (socket) => {
    console.log("connection "+ socket.id)
    io.emit("devices", "phone")
})
httpServer.listen(port, () => console.log(`listening on port ${port}`));