const express = require('express');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/404.html");
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
});