var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

io.on('connection', function(socket) {
    console.log('一个用户进入聊天室');
    socket.on('chat message', function(msg) {
        console.log(msg)
        io.emit('chat message', msg);
    });
});

http.listen(3000, function() {
    console.log('聊天室已在3000端口启动');
});
