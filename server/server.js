const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public'); //normalize the path, changing the /server/../public into /public
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
    console.log('New User Connected');

    socket.on('createMessage', (message) => {
        console.log('Create Message', message);
    })

    socket.emit('newMessage', {
        from: 'Ahmad',
        text: 'Hay, this is andrew',
        createdAt: 41121
    });

    socket.on("disconnect", () => {
        console.log('Client disconnected');
    });

});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});