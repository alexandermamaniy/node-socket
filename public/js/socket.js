
var socket = io()
// conecion de un usuario
socket.on('connect', () => {
  console.log('conectado al server')
})

// desconecion de un usuario
socket.on('disconnect', () => {
  console.log('server desconectado')
})

// escuchar un mensaje desde el server
socket.on('sendMessage', (message) => {
  console.log('Server:', message)
})

// emitir un mensaje al server
// topic, message, callback, que se ejcutara una vez que el server nos confirme si salio todo bien, los parametros que recibimos son los que nos envia el server
socket.emit('sendMessage', {
  user: 'Alex',
  message: 'Hola mundo'
}, (message) => {
  console.log('server :', message)
})
