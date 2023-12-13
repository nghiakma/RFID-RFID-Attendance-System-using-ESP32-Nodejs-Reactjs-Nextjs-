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
app.use(cors(
    {
        origin: [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://192.168.33.103:3000",
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})