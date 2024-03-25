const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req", req.url, req.method, req.headers);
  // process.exit();
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<header><title>NodeJs</title></header>");
  res.write("<body><h1>Hello from Node.Js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
