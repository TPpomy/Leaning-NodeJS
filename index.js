const http = require("http");
const fs = require("fs");

const indexpaege = fs.readFileSync(`${__dirname}/webpages/index.html`);
const productpage = fs.readFileSync(`${__dirname}/webpages/product.html`);

const port = 3000;
const server = http.createServer(function (req, res) {
  const pathname = req.url;
  if (pathname === "/" || pathname === "/home") {
    res.write(indexpaege);
  }
  if (pathname === "/product") {
    res.write(productpage);
  }
  res.end();
});

server.listen(port, "localhost", () => {
  console.log(`Listening Port ${port}`);
});
