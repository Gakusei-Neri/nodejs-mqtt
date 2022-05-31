const mqtt = require('mqtt')
const sub = mqtt.connect('mqtt://localhots:9000')

sub.on('connect', ()=>{
    sub.subscribe('topic test')
   })

sub.on('message', (topic,message)=>{
    message = message.toString()
    message = message.split(' ')
    message = parseInt(message[1])
    console.log(sub)

})