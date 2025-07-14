import 'infrastructure/web/routes/routers-module';

import { httpServer } from 'config/server';
import { BashScripts } from 'shared/enum/bash-scripts.enum';
import { Utils } from 'shared/utils/utils';

const PORT = 3000;

httpServer.listen(PORT, (): void => {
  Utils.executeBashScript(BashScripts.InitServer, ['3000']); // -> Cuando lo ejecuto se queda parado diciendo que nodemon está ejecutando el fichero pero no prosigue
});
