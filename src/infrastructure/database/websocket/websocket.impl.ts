import { IWebSocketRepository } from 'domain/repositories/websocket.repository';
import { Server as SocketIOServer } from 'socket.io';
import { Server as HTTPServer } from 'node:http';

export class WebSocketConectionImpl implements IWebSocketRepository {
  private static instance: WebSocketConectionImpl;
  private ioInstance!: SocketIOServer;

  public static getInstance(): WebSocketConectionImpl {
    if (!this.instance) {
      this.instance = new WebSocketConectionImpl();
    }
    return this.instance;
  }

  public initSocket(server: HTTPServer): void {
    const io = new SocketIOServer(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket) => {
      console.log('📡 Cliente conectado con ID:', socket.id);
    });

    this.ioInstance = io;
    io;
  }

  public getSocketConection(): SocketIOServer {
    if (!this.ioInstance) {
      throw new Error(
        'Socket.IO no ha sido inicializado. Llama a initSocketIO primero.',
      );
    }
    return this.ioInstance;
  }
}
