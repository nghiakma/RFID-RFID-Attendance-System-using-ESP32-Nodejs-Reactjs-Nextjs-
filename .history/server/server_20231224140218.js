const cors = require('cors');
const express = require('express')
const app = express()
const port = 42600
const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
/*
Cấu hình CORS policy
 */
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
app.use(cors(
    {
        origin: [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://172.20.10.6:3000",
            "http://mqtt.coder96.com:3000",
            "http://localhost:3001",
            "http://127.0.0.1:3001",
        ],
        // origin: '*',
        credentials: true,
        exposedHeaders: ["set-cookie"]
    }
));



/*
Cấu hình body parser
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
Các routers 
*/
require('./app/routers/history.router')(app);
require('./app/routers/user.router')(app);
require('./app/routers/admin.router')(app);
app.get('/', (req, res) => {
    fs.readFile('./index.html', (error, content) => {
        if (error) {
            res.writeHead(500);
            res.end('Internal server error');
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(content);
        }
    });
});

const clients = [];

function broadcast(socket, data) {
    console.log(clients.length);
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] !== socket) {
            clients[i].send(data.toString());
        }
    }
}

wss.on('connection', (socket, req) => {
    clients.push(socket);
    socket.on('message', (message) => {
        console.log('received: %s', message);
        broadcast(socket, message);
    });
    socket.on('close', () => {
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
        console.log('disconnected');
    });
});
server.listen(port, () => {
    console.log('Server listening on port 3000');
});