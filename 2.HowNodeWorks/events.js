const http = require('http');

const EventEmitter = require("events");

class Sales extends EventEmitter {
    constructor() {
      super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("There was a new Sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", stock => {
    console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

////////////////////////////////////////////////////////////////////////////////////////
////// HTTP:

const server  = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  res.end('Request received');
});

server.on('request', (req, res) => {
  res.end('Another request')
});

server.on('close', () => {
  console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for request');
})