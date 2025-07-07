import express from "express";

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to biocrio api' })
})
app.listen(PORT, () => console.log(`Server statarted at port http://localhost:${PORT}`))
