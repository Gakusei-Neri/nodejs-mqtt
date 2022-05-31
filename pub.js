const mqtt = require('mqtt')
const serialport = require('serialport')
const port = new serialport('COM11',{
    bautRead: 9600
})

const parser = port.pipe(new serialport.parsers.Readline())

const pub = mqtt.connect('mqtt://localhost:9000')

pub.on('connect', ()=>{
    console.log("Send messages...")
    parser.on('data', (data)=>{
        
        pub.publish('topic test', data)
    })
    
})