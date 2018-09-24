const {io} = require('../server')

// el metodo on es para especificar que vamos a escuhar
// el metodo emit es para especificar que vamos a emitir

// conection de un usuario
io.on('connection', (client) => {
  console.log('cliente conectado')

  // desconeccion de un usuario
  client.on('disconnect', () => {
    console.log('cliente desconectado')
  })

  // emitimos mensaje al cliente
  client.emit('sendMessage', {
    server: 'Admin',
    message: 'te damos la Bienvenida desde del server'
  })

  // escuchamos desde el cliente(topic)
  // message: mensaje, callback: funcion que ejecutaremos para una vez recibamos el mensaje, y podemos enviar mendiate este mensajeas al client
  client.on('sendMessage', (data, callback) => {
    console.log(data)
    client.broadcast.emit('sendMessage', data)

    // if (message.user) {
    //   let respu = {resp: 'Todo salio bien!'}
    //   callback(respu)
    // } else {
    //   let respu = {resp: 'Todo salio maaal!!!!'}
    //   callback(respu)
    // }
  })
})
