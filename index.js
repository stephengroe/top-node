const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
  let filePath;

  switch(req.url) {
    case '/':
    case '/index':
      filePath = __dirname + '/index.html';
      break;
    case '/about':
      filePath = __dirname + '/about.html';
      break;
    case '/contact':
      filePath = __dirname + '/contact.html';
      break;
    case '/style.css':
      filePath = __dirname + '/style.css';
      break;
    default:
      filePath = __dirname + '/404.html';
  }

  fs.readFile(filePath, (err, data) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data, "utf8");
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
});