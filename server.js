const http = require('http');
const fs = require('fs');
const path = require('path');

// Helper to serve files
function serveFile(res, filename) {
  const filePath = path.join(__dirname, filename);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading file');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home.html') {
    serveFile(res, 'home.html');
  } else if (req.url === '/about') {
    serveFile(res, 'about.html');
  } else if (req.url === '/contact') {
    serveFile(res, 'contact.html');
  } else {
    serveFile(res, '404.html');
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
