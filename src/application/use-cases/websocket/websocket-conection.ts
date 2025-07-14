import { httpServer } from 'config/server';
import { WebSocketConectionImpl } from 'infrastructure/database/websocket/websocket.impl';

export class WebSocketConectionUseCases {
  private websocketHandler: WebSocketConectionImpl;

  public constructor() {
    this.websocketHandler = WebSocketConectionImpl.getInstance();
  }

  public setConection(): void {
    this.websocketHandler.initSocket(httpServer);
  }

  public sendMessage(): void {
    this.websocketHandler.getSocketConection().emit('message', {
      message: 'Evento enviado desde el servidor',
      creationDate: new Date().getDate(),
    });
  }
}
