const server = require("./src/app.js");
const { conn } = require("./src/db.js");
// const io = require('socket.io')(server);

// io.on('connection', (socket) => {
//   console.log('a user connected');

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });

//   socket.on('new task', (task) => {
//     // Agregar la tarea a la base de datos
//     // Emitir un evento a todos los clientes conectados para que actualicen su estado
//     io.emit('task added', task);
//   });

//   socket.on('update task', (task) => {
//     // Actualizar la tarea en la base de datos
//     // Emitir un evento a todos los clientes conectados para que actualicen su estado
//     io.emit('task updated', task);
//   });

//   socket.on('delete task', (taskId) => {
//     // Eliminar la tarea de la base de datos
//     // Emitir un evento a todos los clientes conectados para que actualicen su estado
//     io.emit('task deleted', taskId);
//   });
// });

// Syncing all the models at once.
conn.sync({ force: false}).then(() => {
  server.listen(3001, () => {
    console.log("Listening at 3001");
  });
});