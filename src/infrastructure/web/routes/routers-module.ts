import { app } from 'config/server';
import { UrisPath } from 'shared/enum/uris-path.const';

import webSocketRouter from './websocket/websocket.routes';

app.use(UrisPath.Websocket, webSocketRouter);
