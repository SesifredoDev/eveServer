const
    io = require("socket.io-client"),
    socket = io.connect("https://8000-sesifredodev-eveserver-93r39wtw7qr.ws-eu84.gitpod.io");

socket.on("devices", (data)=>{
    console.log(data)
})

