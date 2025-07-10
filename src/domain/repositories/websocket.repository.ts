import { Server, IncomingMessage, ServerResponse } from "http";

export interface IWebSocketRepository {
  initSocket(server: Server<typeof IncomingMessage, typeof ServerResponse>): void;
  getSocketConection(): Server<typeof IncomingMessage, typeof ServerResponse>;
}
