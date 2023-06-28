import bodyParser from "body-parser";
import Server from "./casses/server";
import router from "./routes/router";
import cors from "cors";
const server = new Server();

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Routes
server.app.use("/", router);

server.start(() => {
  console.log(`Listening on port ${server.port}`);
});
