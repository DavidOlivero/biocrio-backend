import { Server as HTPServer } from "node:http";
import { Server as SocketIOServer } from "socket.io";

export interface IWebSocketRepository {
  initSocket(server: HTPServer): void;
  getSocketConection(): SocketIOServer;
}
