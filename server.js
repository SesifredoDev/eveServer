const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = 3000;
currentDevices = []

io.on('connection', (socket) => {
    console.log("connection "+ socket.id)
    io.on("ping",  data =>{
      console.log("ping")
      data.push({"clientID":socket.id})
      currentDevices.push(data)
      io.emit("devices", currentDevices)
    })
})
httpServer.listen(port, () => console.log(`listening on port ${port}`));