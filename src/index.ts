import { httpServer } from "config/server"
import "infrastructure/web/routes/routers-module";

const PORT = 3000

httpServer.listen(PORT, () => console.log(`Server statarted at port http://localhost:${PORT}`))
