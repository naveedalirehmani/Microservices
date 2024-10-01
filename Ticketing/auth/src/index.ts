import * as http from "http";

import app from "./app";

const PORT = process.env.PORT || 3000;

const httpServer: http.Server = http.createServer(app);

async function startServer(): Promise<void> {
  httpServer.listen(PORT, () => {
    console.log("listening to server on", PORT);
  });
}

startServer();