import app from "config/server"
import "infrastructure/web/routes/routers-module";

const PORT = 3000

app.listen(PORT, () => console.log(`Server statarted at port http://localhost:${PORT}`))
