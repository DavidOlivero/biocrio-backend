import { IWebSocketRepository } from "domain/repositories/websocket.repository";
import { IncomingMessage, Server, ServerResponse } from "http";

export class WebSocketConectionImpl implements IWebSocketRepository {
  private ioInstance!: Server<typeof IncomingMessage, typeof ServerResponse>;

  public initSocket(server: Server<typeof IncomingMessage, typeof ServerResponse>): void {
    const io = new Server(server);

    io.on('connection', () => {
      console.log('Client has conected')
    });

    this.ioInstance = io;
    io;
  }


  public getSocketConection(): Server<typeof IncomingMessage, typeof ServerResponse> {
    if (!this.ioInstance) {
      throw new Error("Socket.IO no ha sido inicializado. Llama a initSocketIO primero.");
    }
    return this.ioInstance;
  }
}
