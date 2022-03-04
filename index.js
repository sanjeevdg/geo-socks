 const express = require("express");
 const http = require("http");
//const io = require("socket.io")();

const WebSocket = require("ws");
const port = process.env.PORT || 80;
//const index = require("./routes/index");

const app = express();
//app.use(index);

const server = http.createServer(app);

//const io = socketIo(server);

let interval;
// let position = require('./sockio/PositionSocket');

// position(io);

const wss = new WebSocket.Server({ server });


/*

io.on("connection", (socket) => {
  console.log("New client connected");

  
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);

io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

io.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });



});

  
const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
 io.emit("FromAPI", response);
console.log('in getApiAndEmit method.....');
io.on("setPosition", (position) => { 
// set in db here...});
console.log('woo got from client22222'+JSON.stringify(position));
});


socket.on("setPosition", (position) => { 
// set in db here...});
console.log('woo got from client'+JSON.stringify(position));
  //  io.emit("setPosition",position);


});



};

io.listen(port, {
  cors: {
    origin: ["http://127.0.0.1:4001"]
  }
});

*/


wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message, isBinary) {
    console.log(message.toString(), isBinary);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send('from server to client'+message.toString());
      }
    });
  });
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
server.listen(80, () => {
  console.log("Listening to port 4001");
});
