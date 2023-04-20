const PORT = process.env.PORT || 8080;

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(PORT, () =>
  console.log(`JSON Server is running on port ${PORT}`)
);