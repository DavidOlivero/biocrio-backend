import { WebSocketConectionUseCases } from 'application/use-cases/websocket/websocket-conection';
import { Request, Response } from 'express';

export class WebSocketController {
  private websocketUseCases: WebSocketConectionUseCases =
    new WebSocketConectionUseCases();

  public setConection(): (req: Request, res: Response) => void {
    return (_req: Request, res: Response): void => {
      this.websocketUseCases.setConection();
      res.json({ statusMessage: 'La conexión se estableció con éxito' });
    };
  }

  public sendMessage(): (req: Request, res: Response) => void {
    return (_req: Request, res: Response): void => {
      this.websocketUseCases.sendMessage();
      res.json({ statusMessage: 'Mensaje enviado con éxito' });
    };
  }
}
