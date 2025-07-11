import { WebSocketConectionUseCases } from "application/use-cases/websocket/websocket-conection";
import { createServer } from "node:http";
import express from "express";

export const app = express()
export const httpServer = createServer(app)

new WebSocketConectionUseCases().setConection()

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to biocrio api' })
})

export default app
