const http = require("http");

const server = http.createServer(function (req, res) {
  res.write("Hello");
  res.end();
});

server.listen(3000);
