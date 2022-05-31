const mqtt = require('mqtt')
const sub = mqtt.connect('mqtt://localhost:9000')
const mysql = require('mysql')


const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'WataSHi09',
    database: 'rfid'
})

db.connect(()=>{
    console.log('Database Conected soucefull')
})



sub.on('connect', () => {
    sub.subscribe('topic test')
})
sub.on('packetreceive',()=>{
    //console.log('Paquete recivido..')
})
sub.on('message', (topic, message) => {
    var now= new Date();
    var hora=now.getHours() + ':' + now.getMinutes() + ':'+ now.getSeconds() 
    message.toString()

    db.query(
        'INSERT INTO asistencia set ?',
        {
            idRFID: message,
            fecha: now,
            hora: hora
            },
            (err,rows)=>{
                if(!err) console.log('Asist save...OK')
        }
    )
    
})