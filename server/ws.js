import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ server });

function broadcastCount() {
  const data = JSON.stringify({
    count: wss.clients.size,
  });

  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(data);
    }
  });
}

wss.on("connection", (ws) => {
  broadcastCount();

  ws.on("close", () => {
    broadcastCount();
  });
});
