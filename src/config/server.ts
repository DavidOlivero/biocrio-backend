import { createServer } from 'node:http';

import { WebSocketConectionUseCases } from 'application/use-cases/websocket/websocket-conection';
import express, { Request, Response } from 'express';
import { UrisPath } from 'shared/enum/uris-path.const';

export const app = express();
export const httpServer = createServer(app);

new WebSocketConectionUseCases().setConection();

app.get(UrisPath.BaseUri, (_req: Request, res: Response): void => {
  res.json({ message: 'Welcome to biocrio api' });
});

export default app;
