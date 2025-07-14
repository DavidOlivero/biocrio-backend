import { Server as HTTPServer } from 'node:http';

import { IWebSocketRepository } from 'domain/repositories/websocket.repository';
import { BashScripts } from 'shared/enum/bash-scripts.enum';
import { WebsocketEvents } from 'shared/enum/websocket-events.enum';
import { Utils } from 'shared/utils/utils';
import { DefaultEventsMap, Server as SocketIOServer, Socket } from 'socket.io';

export class WebSocketConectionImpl implements IWebSocketRepository {
  private static instance: WebSocketConectionImpl | undefined;
  private ioInstance!: SocketIOServer | undefined;

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

    io.on(
      WebsocketEvents.Connection,
      (
        socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap>,
      ): void => {
        Utils.executeBashScript(BashScripts.WebSocketConnection, [socket.id]);
      },
    );

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
