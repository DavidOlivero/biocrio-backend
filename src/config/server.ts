import express from "express";
import http from "http";

export const app = express()
export const httpServer = http.createServer()

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to biocrio api' })
})

export default app
