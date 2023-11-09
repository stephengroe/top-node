const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
  let filePath;
  let status = 200;

  switch(req.url) {
    case '/':
    case '/index':
      filePath = '/index.html';
      break;
    case '/about':
      filePath = '/about.html';
      break;
    case '/contact':
      filePath = '/contact.html';
      break;
    case '/style.css':
      filePath = '/style.css';
      break;
    default:
      filePath = '/404.html';
      status = 404;
  }

  filePath = __dirname + filePath;

  fs.readFile(filePath, (err, data) => {
    res.writeHead(status, {'Content-Type': 'text/html'});
    res.write(data)
    res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
});