import { Router } from 'express';
import { WebSocketController } from 'infrastructure/web/controllers/websocket/websocket.controller';
import { UrisPath } from 'shared/enum/uris-path.const';

const webSocketRouter = Router();
const webSocketController = new WebSocketController();

webSocketRouter.route(UrisPath.BaseUri);
webSocketRouter.post(
  UrisPath.SetConnection,
  webSocketController.setConection(),
);
webSocketRouter.post(UrisPath.SendData, webSocketController.sendMessage());

export default webSocketRouter;
