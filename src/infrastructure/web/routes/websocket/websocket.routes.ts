import { Router } from 'express';
import { WebSocketController } from '../../controllers/websocket/websocket.controller';

const webSocketRouter = Router();
const webSocketController = new WebSocketController();

webSocketRouter.route('/');
webSocketRouter.post('/set-conection', webSocketController.setConection());
webSocketRouter.post('/send-data', webSocketController.sendMessage());

export default webSocketRouter;
