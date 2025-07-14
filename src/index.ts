import 'infrastructure/web/routes/routers-module';

import { httpServer } from 'config/server';

const PORT = 3000;

httpServer.listen(PORT, () =>
  console.log(`Server statarted at port http://localhost:${PORT}`),
);
