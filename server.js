const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://18.130.50.205:1883',{username: 'paolo',password: 'w4f-ZmPVNJMXbXJ-RB8!'})

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})