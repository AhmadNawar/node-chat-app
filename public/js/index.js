var socket = io();
socket.on('connect', function () {
    console.log('Connect to server');
    socket.emit('createMessage', {
        from: 'ahmad',
        text: 'Hay, this is andrew',
    })
    socket.on('newMessage', function (message) {
        console.log('New email', message);
    });
});
socket.on('disconnect', function () {
    console.log('Disconnected from server');
});