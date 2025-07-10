import { app } from "config/server";
import webSocketRouter from "./websocket/websocket.routes";

app.use('/websocket', webSocketRouter)
